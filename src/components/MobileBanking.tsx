import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: 0,
      },
      innerRoot: {
        padding: "24px 12px",
        maxWidth: 1280,
        margin: "0 auto",
        position: "relative",
      },
      title: {
        marginTop: 50,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 30,
        color: "#141414",
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#141414",
        marginBottom: 24,
      },
      googlePlayAppStore: {
        width: 120,
        height: 40,
        "&:hover": {
          cursor: "pointer",
        },
      },
      img: {
        display: "none",
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        padding: "27px 42px 52px 52px",
        background: "#fafafa",
        width: "100%",
        position: "relative",
      },
      innerRoot: {
        padding: "27px 42px 52px 52px",
        maxWidth: 1280,
        margin: "0 auto",
        position: "relative",
      },
      title: {
        marginTop: 200,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414",
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#141414",
        marginBottom: 48,
      },
      googlePlayAppStore: {
        "&:hover": {
          cursor: "pointer",
        },
      },
      img: {
        width: 330,
        height: 484,
        position: "absolute",
        bottom: 0,
      },
    },
  })
);

const MobileBanking = () => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const onClickAppStore = () => {
    ReactGA.event({
      category: "BccIronCard_AppStore_download",
      action: "AppStore_download",
    });

    window.open(
      "https://apps.apple.com/kz/app/starbanking/id743617904",
      "_blank"
    );
  };

  const onClickGooglePlay = () => {
    ReactGA.event({
      category: "BccIronCard_GooglePlay_download",
      action: "GooglePlay_download",
    });

    window.open(
      "https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru",
      "_blank"
    );
  };

  return (
    <Grid container className={classes.root}>
      <Grid item container className={classes.innerRoot}>
        <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
          <Typography className={classes.title}>
            {t("block_7.title_main")}
          </Typography>
          <Typography className={classes.description}>
            {t("block_7.subtitle_2")}
          </Typography>
          <Grid container spacing={3}>
            <Grid item>
              <img
                onClick={() => onClickAppStore()}
                className={classes.googlePlayAppStore}
                src="app_store.svg"
                alt="app_store"
              />
            </Grid>
            <Grid item>
              <img
                onClick={() => onClickGooglePlay()}
                className={classes.googlePlayAppStore}
                src="google_play.svg"
                alt="google_play"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
          <Grid container justify="center">
            <img
              className={classes.img}
              src="froot-apps.svg"
              alt="star_mobile_banking"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileBanking;
