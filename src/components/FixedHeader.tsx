import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      small: {
        display: "none",
      },
      buttonOrderCard: {
        background: "#27AE60",
        minWidth: 230,
        color: "white",
        height: 48,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: "48px",
        textTransform: "none",
        fontWeight: "bold",
        padding: 0,
        "&:hover": {
          backgroundColor: "#7DCEA0",
        },
        overflow: "hidden",
      },
    },
    [theme.breakpoints.down("sm")]: {
      small: {
        display: "none",
      },
      header: {
        padding: "16px 26px",
      },
      buttonOrderCard: {
        background: "#27AE60",
        minWidth: "auto",
        padding: "0 10px",
        color: "white",
        height: 48,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: "48px",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#7DCEA0",
        },
        overflow: "hidden",
      },
      smallcard: {
        marginRight: 20,
      },
    },
    [theme.breakpoints.down("xs")]: {
      header: {
        padding: "16px 26px",
      },
      logo: {
        display: "none",
      },
      small: {
        display: "block",
      },
      innerRoot: {
        padding: "0!important",
        maxWidth: 1280,
        margin: "0 auto",
        position: "relative",
      },
      buttonOrderCard: {
        lineHeight: "14px",
      },
      smallcard: {
        marginRight: 20,
        "& > img": {
          width: "100%",
        },
      },
    },
    hide: {
      opacity: 0,
      transition: "all ease-in-out .3s",
    },
    innerRoot: {
      padding: "21px 52px",
      maxWidth: 1280,
      margin: "0 auto",
      position: "relative",
    },
    header: {
      position: "fixed",
      zIndex: 99,
      top: 0,
      left: 0,
      right: 0,
      opacity: 1,
      height: 100,
      width: "100%",
      boxSizing: "border-box",
      backgroundColor: "#ffffff",
      boxShadow: "0px 7px 25px rgba(29, 29, 29, 0.15)",
      transition: "all ease-in-out .3s",
    },
  })
);

let hide = true;

const FixedHeader = (props: any) => {
  let [hide, setHide] = useState(true);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.document.addEventListener("scroll", (d) => {
      const doc = document;
      const element = doc && doc.getElementById("secondHeader");
      const scrollTop = element && element.offsetTop;
      scrollTop && window.scrollY >= scrollTop
        ? setHide((hide = false))
        : setHide((hide = true));
    });
  });

  const classes = useStyles({});

  const onClickOrder = () => {
    ReactGA.event({
      category: "BccCard_order_card",
      action: "order_card",
    });
    props.scrollToOrder();
  };

  return (
    <Grid container className={hide ? classes.hide : classes.header}>
      <Grid
        item
        container
        justify="space-between"
        alignContent="center"
        alignItems="center"
        className={classes.innerRoot}
      >
        <Grid item xl={6} lg={6} md={6} sm={4} xs={4}>
          <img src="green-logo.svg" className={classes.logo} alt="green-logo" />
          <img
            src="logo-bcc-small.svg"
            className={classes.small}
            alt="logo-bcc"
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={8} xs={8}>
          <Grid
            justify="flex-end"
            alignContent="center"
            alignItems="center"
            container
          >
            <Grid
              item
              xl={3}
              lg={3}
              md={4}
              sm={4}
              xs={4}
              className={classes.smallcard}
            >
              <img src="iconcardsmall.svg" alt="iconcardsmall" />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={6}>
              <Button
                variant="contained"
                className={classes.buttonOrderCard}
                onClick={() => onClickOrder()}
              >
                {t("header.button_main")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FixedHeader;
