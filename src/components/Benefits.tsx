import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        backgroundColor: "#FAFAFA",
        padding: "27px 42px 52px 52px"
      },
      mainTitle: {
        fontStyle: "normal",
        marginTop: 30,
        textAlign: "center",
        marginBottom: 30,
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "40px",
        color: "#141414"
      },
      mainDescription: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#8B98A7"
      },
      paper: {
        padding: "24px",
        background: "#ffffff",
        boxSizing: "border-box",
        borderRadius: "8px",
        minHeight: 160
      },
      iconWrap: {
        padding: 30,
        border: "1px solid #7DCEA0",
        borderRadius: "50%",
        position: "relative",
        width: 80,
        height: 80,
        marginRight: 25
      },
      icon: {
        width: "20px",
        height: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#141414",
        marginBottom: 20,
        lineHeight: "20px"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#5B5B5B"
      },
      seeMore: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: "0",
        textAlign: "center",
        "&:hover": {
          textDecoration: "underline",
          cursor: "pointer"
        },
        "& > a": {
          textDecoration: "none",
          color: "inherit"
        },
        "&::after": {
          content: '""',
          display: "inline-block",
          width: 11,
          height: 21,
          marginLeft: 13,
          background: "url('seeMoreArrow.svg') #fff no-repeat",
          backgroundSize: "contain",
          position: "absolute"
        }
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        backgroundColor: "#FAFAFA",
        padding: "27px 42px 52px 52px"
      },
      mainTitle: {
        fontStyle: "normal",
        marginTop: 30,
        textAlign: "center",
        marginBottom: 30,
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "40px",
        color: "#141414"
      },
      mainDescription: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#8B98A7"
      },
      paper: {
        padding: "24px",
        background: "#ffffff",
        boxSizing: "border-box",
        borderRadius: "8px",
        minHeight: 160
      },
      iconWrap: {
        padding: 30,
        border: "1px solid #7DCEA0",
        borderRadius: "50%",
        position: "relative",
        width: 80,
        height: 80,
        marginRight: 25
      },
      icon: {
        width: "20px",
        height: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#141414",
        marginBottom: 20,
        lineHeight: "20px"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#5B5B5B"
      },
      seeMore: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: "0",
        textAlign: "center",
        "&:hover": {
          textDecoration: "underline",
          cursor: "pointer"
        },
        "& > a": {
          textDecoration: "none",
          color: "inherit"
        },
        "&::after": {
          content: '""',
          display: "inline-block",
          width: 11,
          height: 21,
          marginLeft: 13,
          background: "url('seeMoreArrow.svg') #fff no-repeat",
          backgroundSize: "contain",
          position: "absolute"
        }
      }
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        backgroundColor: "#FAFAFA",
        padding: "27px 24px 27px 24px"
      },
      iconWrap: {
        padding: 24,
        width: 20,
        height: 20,
        marginRight: 20
      },
      icon: {
        width: "15px",
        height: "15px"
      }
    }
  })
);

const Benefits = (props: any) => {
  const classes = useStyles({});
  const onClickIssue = () => {
    ReactGA.event({
      category: "BccIronCard_all_benefits_visa",
      action: "all_benefits_visa"
    });
    window.open(
      "https://www.visa.com.kz/ru_KZ/pay-with-visa/find-a-card/infinite.html",
      "_blank"
    );
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.mainTitle}>
          Преимущества VISA Infinite
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid className={classes.paper} container alignItems="center">
              <Grid
                item
                className={classes.iconWrap}
                xl={false}
                lg={false}
                md={false}
                sm={false}
                xs={false}
              >
                <img
                  src="headphone.svg"
                  className={classes.icon}
                  alt="headphone"
                />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>
                  Консьерж-служба
                </Typography>
                <Typography className={classes.description}>
                  Воспользуйтесь множеством услуг, доступных круглосуточно в
                  телефонном режиме или онлайн с любой точки мира.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid className={classes.paper} container alignItems="center">
              <Grid
                item
                className={classes.iconWrap}
                xl={false}
                lg={false}
                md={false}
                sm={false}
                xs={false}
              >
                <img src="guard.svg" className={classes.icon} alt="guard" />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>
                  Страхование поездок
                </Typography>
                <Typography className={classes.description}>
                  Оплачивая поездку картой Visa Infinite, вы обеспечиваете себе
                  полное страхование на время путешествий.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid className={classes.paper} container alignItems="center">
              <Grid
                item
                className={classes.iconWrap}
                xl={false}
                lg={false}
                md={false}
                sm={false}
                xs={false}
              >
                <img src="phone.svg" className={classes.icon} alt="phone" />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>
                  Служба Поддержки
                </Typography>
                <Typography className={classes.description}>
                  Круглосуточная помощь в случае потери вашей карты Visa, мы
                  можем помочь в блокировании счета, отправке временной карты.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid className={classes.paper} container alignItems="center">
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className={classes.seeMore} onClick={() => onClickIssue()}>
                  Все преимущества VISA
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Benefits;
