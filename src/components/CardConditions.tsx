import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { rootSmXl } from "./helper/DefaultStyle";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: "24px 12px",
        width: "100%",
      },
      title: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 45,
      },
      cardImg: {
        marginRight: 50,
        marginBottom: 50,
        "& > img": {
          width: "100%",
        },
      },
      resultOrderCard: {
        width: "100%",
        height: "64px",
        backgroundColor: "transparent",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        border: "1px solid",
        textTransform: "none",
        color: "#27AE60",
        letterSpacing: "0",
      },
      cardText: {
        "& > h1": {
          fontWeight: "bold",
          fontSize: 24,
          lineHeight: "24px",
          margin: "0 0 24",
          padding: 0,
        },
        "& > p": {
          margin: "0 0 20",
          fontWeight: "normal",
          fontSize: 18,
          lineHeight: "24px",
          padding: 0,
        },
        "& > span": {
          fontWeight: "normal",
          fontSize: 18,
          lineHeight: "24px",
          color: "#5B5B5B",
        },
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      ...rootSmXl,
      root: {
        padding: "27px 42px 52px 52px",
        maxWidth: 1280,
        margin: "0 auto",
        position: "relative",
      },
      title: {
        fontWeight: "bold",
        fontSize: 36,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 45,
      },
      cardImg: {
        marginRight: 50,
        marginBottom: 50,
        "& > img": {
          width: "100%",
        },
      },
      resultOrderCard: {
        width: "324px",
        height: "64px",
        backgroundColor: "transparent",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        border: "1px solid",
        textTransform: "none",
        color: "#27AE60",
        letterSpacing: "0",
      },
      cardText: {
        "& > h1": {
          fontWeight: "bold",
          fontSize: 20,
          lineHeight: "24px",
          margin: "0 0 24",
          padding: 0,
        },
        "& > p": {
          margin: "0 0 20",
          fontWeight: "normal",
          fontSize: 16,
          lineHeight: "24px",
          padding: 0,
        },
        "& > span": {
          fontWeight: "normal",
          fontSize: 16,
          lineHeight: "24px",
          color: "#5B5B5B",
        },
      },
    },
  })
);

const CardConditions = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();

  const onClickOrder = () => {
    ReactGA.event({
      category: "BccIronCard_Preorder_3",
      action: "Preorder_3",
    });
    props.scrollToOrder();
  };

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      justify="center"
    >
      <Paper elevation={0} className={classes.paper}>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.title}>
              {t("block_4.title_main")}
            </Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid container justify="center">
              <Grid
                item
                xl={3}
                lg={3}
                md={3}
                sm={6}
                xs={6}
                className={classes.cardImg}
              >
                <img src="IronCard-second.svg" alt="Iron Card" />
              </Grid>
              <Grid
                item
                xl={4}
                lg={4}
                md={4}
                sm={12}
                xs={12}
                className={classes.cardText}
              >
                <h1>{t("block_4.title_1_desc")}</h1>
                <p>
                  1. {t("block_4.subtitle_1_desc")}
                  <br />
                  2. {t("block_4.title_2_desc")}
                </p>
                <Button
                  onClick={() => onClickOrder()}
                  className={classes.resultOrderCard}
                >
                  {t("block_4.button_main")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CardConditions;
