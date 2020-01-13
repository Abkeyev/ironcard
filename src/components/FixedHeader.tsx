import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      hide: {
        opacity: 0,
        transition: "all ease-in-out .3s"
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
        padding: "21px 52px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 7px 25px rgba(29, 29, 29, 0.15)",
        transition: "all ease-in-out .3s"
      },
      small: {
        display: "none"
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
          backgroundColor: "#7DCEA0"
        },
        overflow: "hidden"
      }
    },
    [theme.breakpoints.down("sm")]: {
      hide: {
        opacity: 0,
        transition: "all ease-in-out .3s"
      },
      small: {
        display: "none"
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
        padding: "16px 26px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 7px 25px rgba(29, 29, 29, 0.15)",
        transition: "all ease-in-out .3s"
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
          backgroundColor: "#7DCEA0"
        },
        overflow: "hidden"
      },
      smallcard: {
        marginRight: 20
      }
    },
    [theme.breakpoints.down("xs")]: {
      header: {
        padding: "16px 26px"
      },
      logo: {
        display: "none"
      },
      small: {
        display: "block"
      },
      smallcard: {
        marginRight: 20,
        "& > img": {
          width: "100%"
        }
      }
    }
  })
);

let hide = true;

const FixedHeader = (props: any) => {
  let [hide, setHide] = useState(true);
  useEffect(() => {
    window.document.addEventListener("scroll", d => {
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
      action: "order_card"
    });
    props.scrollToOrder();
  };

  return (
    <Grid
      container
      justify="space-between"
      alignContent="center"
      alignItems="center"
      className={hide ? classes.hide : classes.header}
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
              Заказать карту
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FixedHeader;
