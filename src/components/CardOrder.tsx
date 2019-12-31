import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
  useTheme
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import MaskedInput from "react-text-mask";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactGA from "react-ga";
import api from "../api/Api";
import Timer from "./Timer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("md")]: {
      root: {
        marginTop: "34px",
        padding: "27px 19px 52px 52px",
        alignItems: "center"
      },
      paper: {
        padding: "64px 72px",
        background: "#FFFFFF",
        border: "1px solid #E8e8e8",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "100%"
      },
      icon: {
        width: "18px",
        height: "19px"
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "40px"
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black"
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14
      },
      submit: {
        background: "#27AE60",
        borderRadius: "8px",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        fontStyle: "normal",
        textTransform: "none",
        color: "white",
        letterSpacing: "0",
        boxShadow: "0px 6px 25px rgba(39, 174, 96, 0.24)",
        height: "62px",
        "&:hover, &:active": {
          backgroundColor: "#7DCEA0",
          boxShadow: "none"
        }
      },
      timerBox: {
        padding: "24px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        borderRadius: 8,
        margin: "32px 0 42px",
        "& > h1": {
          margin: "0 0 17px",
          fontWeight: "normal",
          padding: 0,
          fontSize: 16,
          lineHeight: "24px"
        },
        "& > span": {
          fontWeight: "bold",
          fontSize: 48,
          lineHeight: "56px"
        }
      }
    },
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        marginTop: "34px",
        padding: "27px 19px 52px 52px",
        alignItems: "center"
      },
      paper: {
        padding: "64px 72px",
        background: "#FFFFFF",
        border: "1px solid #E8e8e8",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "70%"
      },
      icon: {
        width: "18px",
        height: "19px"
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "40px"
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black"
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14
      },
      submit: {
        background: "#27AE60",
        borderRadius: "8px",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        fontStyle: "normal",
        textTransform: "none",
        color: "white",
        letterSpacing: "0",
        boxShadow: "0px 6px 25px rgba(39, 174, 96, 0.24)",
        height: "62px",
        "&:hover, &:active": {
          backgroundColor: "#7DCEA0",
          boxShadow: "none"
        }
      },
      timerBox: {
        padding: "24px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        borderRadius: 8,
        margin: "32px 0 42px",
        "& > h1": {
          margin: "0 0 17px",
          fontWeight: "normal",
          padding: 0,
          fontSize: 16,
          lineHeight: "24px"
        },
        "& > span": {
          fontWeight: "bold",
          fontSize: 48,
          lineHeight: "56px"
        }
      }
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        marginTop: "34px",
        padding: "27px 19px 52px 19px"
      },
      box: {
        fontSize: "24px",
        lineHeight: "40px"
      },
      timerBox: {
        padding: "24px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        borderRadius: 8,
        margin: "32px 0 42px",
        "& > h1": {
          margin: "0 0 17px",
          fontWeight: "normal",
          padding: 0,
          fontSize: 16,
          lineHeight: "24px"
        },
        "& > span": {
          fontWeight: "bold",
          fontSize: 36,
          lineHeight: "56px"
        }
      },
      paper: {
        padding: "36px 24px"
      }
    },
    focused: {
      root: {
        "&$focused": {
          border: "2px solid #27AE60"
        }
      }
    }
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        /[1-9]/,
        " ",
        "(",
        /\d/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

const CardOrder = (props: any) => {
  const classes = useStyles({});

  const theme = useTheme();

  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const BccCheckbox = withStyles({
    root: {
      color: "#D8D8D8",
      "&$checked": {
        color: "#27AE60"
      }
    },
    checked: {}
  })((props: any) => <Checkbox checked value="remember" {...props} />);

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handlePhoneChange = (phone: string) => {
    setPhone(phone);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    ReactGA.event({
      category: "BccIronCard_Preorder_successful",
      action: "Preorder_successful"
    });

    if (name && phone) {
      api.card
        .order({ fio: name, phoneNumber: phone })
        .then((m: any) => {
          props.send();
          handleNameChange("");
          handlePhoneChange("");
        })
        .catch((e: any) => console.warn(e));
    }
  };

  return (
    <Grid
      ref={props.refProp}
      container
      className={classes.root}
      spacing={4}
      id="order"
      direction="column"
      justify="center"
    >
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.box}>
          Заполните заявку и получите металлическую карту с 50% скидкой
        </Typography>
        <Timer />
        <form onSubmit={handleSubmit}>
          <TextField
            size={isXS ? "small" : "medium"}
            variant="outlined"
            margin="normal"
            className={classes.focused}
            required
            fullWidth
            id="name"
            label="Имя"
            name="name"
            value={name}
            onChange={(e: any) => handleNameChange(e.target.value)}
          />
          <TextField
            size={isXS ? "small" : "medium"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            value={phone}
            onChange={(e: any) => handlePhoneChange(e.target.value)}
            label="Номер телефона"
            id="phone"
            InputProps={{
              classes: {
                focused: classes.focused
              }
            }}
          />
          <FormControlLabel
            control={<BccCheckbox />}
            label={
              <Typography className={classes.checkBoxLabel}>
                Я согласен(-а) на сбор и обработку персональных данных
              </Typography>
            }
          />
          <Grid container style={{ marginTop: "15px" }} spacing={4}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xl={false}
                  lg={false}
                  md={false}
                  sm={false}
                  xs={false}
                >
                  <img
                    src="card_order_security.svg"
                    className={classes.icon}
                    alt="order_security"
                  />
                </Grid>
                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                  <Typography className={classes.garant}>
                    Мы гарантируем безопасность и сохранность ваших данных
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Подать заявку
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default CardOrder;
