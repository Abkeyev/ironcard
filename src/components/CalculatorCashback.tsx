import React from "react";
import { Grid, Typography, Button, Paper, Slider } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles
} from "@material-ui/core/styles";
import NumberFormat from "react-number-format";
import { rootSmXl } from "./helper/DefaultStyle";
import ReactGA from "react-ga";

const PrettoSlider = withStyles({
  root: {
    color: "#E8E8E8",
    height: 4
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#27AE60",
    border: "4px solid #FFFFFF",
    marginTop: -10,
    marginLeft: -12,
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.24)"
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 1px)"
  },
  track: {
    height: 4,
    borderRadius: 4,
    backgroundColor: "#27AE60"
  },
  rail: {
    height: 4,
    borderRadius: 4
  }
})(Slider);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        backgroundColor: "#fafafa",
        padding: "27px 24px 27px 24px"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "38px"
      },
      tabButtonActive: {
        width: "215px",
        height: "36px",
        backgroundColor: "#FFCF87",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#FFCF87",
          opacity: 0.8
        }
      },
      tabButton: {
        width: "181px",
        height: "36px",
        backgroundColor: "#E8E8E8",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none"
      },
      result: {
        padding: "32px",
        background: "#FFFFFF",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
        borderRadius: "8px"
      },
      resultTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "#B9B9B9"
      },
      resultSum: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "60px",
        color: "#141414"
      },
      resultOrderCard: {
        width: "324px",
        height: "64px",
        backgroundColor: "#27AE60",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        textTransform: "none",
        color: "#FFFFFF",
        letterSpacing: "0"
      },
      monthSpending: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#141414",
        opacity: 0.7,
        marginTop: "36px"
      },
      monthSpendingSum: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "32px",
        color: "#141414",
        marginTop: 12
      },
      monthSpendingInterval: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#898989"
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#898989",
        opacity: 0.7,
        marginTop: 32
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      ...rootSmXl,
      root: {
        backgroundColor: "#fafafa",
        padding: "27px 42px 52px 52px"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "38px"
      },
      tabButtonActive: {
        width: "215px",
        height: "36px",
        backgroundColor: "#FFCF87",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#FFCF87",
          opacity: 0.8
        }
      },
      tabButton: {
        width: "181px",
        height: "36px",
        backgroundColor: "#E8E8E8",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none"
      },
      result: {
        padding: "32px",
        background: "#FFFFFF",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
        borderRadius: "8px"
      },
      resultTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "#B9B9B9"
      },
      resultSum: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "80px",
        color: "#141414"
      },
      resultOrderCard: {
        width: "324px",
        height: "64px",
        backgroundColor: "#27AE60",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        textTransform: "none",
        color: "#FFFFFF",
        letterSpacing: "0"
      },
      monthSpending: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#141414",
        opacity: 0.7,
        marginTop: "36px"
      },
      monthSpendingSum: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "32px",
        color: "#141414",
        marginTop: 12
      },
      monthSpendingInterval: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#898989"
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#898989",
        opacity: 0.7,
        marginTop: 32
      }
    },
    [theme.breakpoints.down("xs")]: {
      resultSum: {
        fontSize: "40px"
      },
      resultOrderCard: {
        width: "100%"
      }
    }
  })
);

const CaclulatorCashBack = (props: any) => {
  const classes = useStyles({});

  const [spendingSum, setSpendingSum] = React.useState(300000);
  const cashback = (spendingSum * 2) / 100;

  const onClickIssue = () => {
    ReactGA.event({
      category: "BccIronCard_Preorder_2",
      action: "Preorder_2"
    });
    props.scrollToOrder();
  };

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>Калькулятор кешбэка</Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container justify="space-between">
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid container>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.monthSpending}>
                  Личные покупки в месяц
                </Typography>
              </Grid>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className={classes.monthSpendingSum}
              >
                <NumberFormat
                  value={spendingSum}
                  thousandSeparator={" "}
                  displayType="text"
                />
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <PrettoSlider
                  min={0}
                  max={3000000}
                  step={10000}
                  valueLabelDisplay="off"
                  aria-label="pretto slider"
                  defaultValue={spendingSum}
                  onChange={(e, val) =>
                    setSpendingSum(val instanceof Array ? val[1] : val)
                  }
                />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Grid container justify="flex-start">
                  <Typography className={classes.monthSpendingInterval}>
                    0
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Grid container justify="flex-end">
                  <Typography className={classes.monthSpendingInterval}>
                    3 000 000
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.note}>
                  * В расчет для примера взят кешбэк на все операции 2%
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <Paper elevation={0} className={classes.result}>
              <Typography align="center" className={classes.resultTitle}>
                Ваш кешбэк с картой #IronCard
              </Typography>
              <Typography align="center" className={classes.resultSum}>
                {cashback} ₸
              </Typography>
              <Typography align="center">
                <Button
                  onClick={() => onClickIssue()}
                  className={classes.resultOrderCard}
                >
                  Заказать карту
                </Button>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaclulatorCashBack;
