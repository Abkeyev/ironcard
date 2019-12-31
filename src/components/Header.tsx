import React, { useEffect, useState } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@keyframes card": {
      from: {
        transform: "translateY(0px)"
      },
      to: {
        transform: "translateY(30px)"
      }
    },
    "@keyframes cardShadow": {
      from: {
        transform: "scale(1.2)"
      },
      to: {
        transform: "scale(.9)"
      }
    },

    [theme.breakpoints.down("sm")]: {
      root: {
        backgroundSize: "auto",
        backgroundColor: "#111111",
        padding: paddingDownSm
      },
      logo_img: {
        width: "126px",
        height: "30px"
      },
      buttonInternetBank: {
        width: "120px",
        height: "30px",
        background: "rgba(73, 73, 73, 0.2)",
        border: "1px solid white",
        boxSizing: "border-box",
        borderRadius: 4,
        color: "white",
        textTransform: "none",
        fontSize: 9
      },
      cardDescriptionBlock: {
        marginTop: "50px",
        zIndex: 3
      },
      cardTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        color: "white"
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        color: "white",
        opacity: 0.7,
        marginTop: 24
      },
      cardLimitPecentDay: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "12px",
        color: "white",
        marginTop: "21px"
      },
      cardLimitPecentDayTh: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "9px",
        color: "white",
        opacity: 0.54
      },
      buttonOrderCard: {
        marginTop: 32,
        background: "#27AE60",
        minWidth: 320,
        color: "white",
        height: 64,
        borderRadius: 4,
        fontSize: 20,
        lineHeight: "24px",
        letterSpacing: "0",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#7DCEA0"
        }
      },
      card: {
        position: "absolute",
        right: 17,
        top: 160,
        zIndex: 2,
        width: "90%",
        animationName: "$card",
        animationDuration: "2s",
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        animationDelay: "2s"
      },
      cardShadow: {
        position: "absolute",
        right: 20,
        top: 200,
        width: "80%",
        zIndex: 1,
        animationName: "$cardShadow",
        animationDuration: "2s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        animationDelay: "2s",
        transform: "scale(1.1)"
      },
      ironCard: {
        fontSize: 36,
        fontWeight: 500,
        textAlign: "center",
        color: "white",
        "& > span": {
          background:
            "linear-gradient(to bottom, #27AE60 0%, rgba(39, 174, 96, 0.4) 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent"
        }
      },
      ironCardDescriptionBlock: {
        fontSize: 20,
        marginTop: 16,
        textAlign: "center",
        color: "white",
        fontWeight: 300,
        marginBottom: 40
      },
      circleWrap: {
        margin: "0 auto",
        width: 128,
        height: 128,
        borderRadius: "50%",
        padding: 1,
        background:
          "linear-gradient(to bottom, #27AE60 0%, rgba(39, 174, 96, 0.4) 100%)"
      },
      circleInner: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "#111",
        position: "relative"
      },
      circleImg: {
        transform: "translate(-50%, -50%)",
        position: "absolute",
        top: "50%",
        left: "50%"
      },
      circleUnderText: {
        color: "white",
        marginTop: "25px",
        fontSize: 16,
        display: "block",
        textAlign: "center"
      },
      signStyle: {
        textAlign: "center",
        color: "white",
        opacity: 0.7,
        fontSize: 38,
        lineHeight: "128px"
      },
      ironCardImg: {
        width: "100%",
        height: "fit-content"
      },
      cardFeatures: {
        backgroundColor: "rgba(255,255,255,.05)",
        borderRadius: 8,
        margin: "55px 0",
        color: "white",
        fontSize: 24,
        padding: "24px 32px",
        fontWeight: 500,
        "& > span": {
          display: "block",
          marginTop: 15,
          opacity: 0.7,
          fontWeight: 300,
          fontSize: 16
        }
      },
      saleText: {
        color: "white",
        fontSize: 24,
        lineHeight: "32px",
        fontWeight: "bold"
      },
      timer: {
        color: "white",
        fontSize: 48,
        marginTop: 5,
        lineHeight: "64px",
        fontWeight: "bold"
      },
      orderWrap: {
        marginTop: 32,
        background: "linear-gradient(to right, #27ae60 0%, rgba(0,0,0,0) 50%)",
        borderRadius: 8,
        padding: 1,
        marginBottom: 110
      },
      orderInner: {
        background: "#111111",
        borderRadius: 8,
        padding: 32
      }
    },
    [theme.breakpoints.down("xs")]: {
      buttonOrderCard: {
        marginTop: 32,
        background: "#27AE60",
        minWidth: "100%",
        color: "white",
        height: 64,
        borderRadius: 4,
        fontSize: 20,
        lineHeight: "24px",
        textTransform: "none",
        letterSpacing: "0",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#7DCEA0"
        }
      },
      cardWhatYourWant: {
        marginTop: 10
      },
      saleText: {
        fontSize: 20
      },
      timer: {
        fontSize: 38,
        textAlign: "center"
      },
      ironCard: {
        fontSize: 24
      },
      cardFeatures: {
        borderRadius: 8,
        margin: "30px 0",
        marginBottom: 0
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        backgroundSize: "auto",
        backgroundColor: "#111111"
      },
      ...rootSmXl,
      logo_img: {
        width: "168px",
        height: "40px"
      },
      buttonInternetBank: {
        width: "160px",
        height: "40px",
        background: "rgba(73, 73, 73, 0.2)",
        border: "1px solid white",
        boxSizing: "border-box",
        borderRadius: 4,
        color: "white",
        textTransform: "none",
        fontSize: 12
      },
      cardDescriptionBlock: {
        marginTop: "80px",
        zIndex: 3
      },
      cardTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "40px",
        lineHeight: "48px",
        color: "white"
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        color: "white",
        opacity: 0.7,
        marginTop: 24
      },
      cardLimitPecentDay: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "24px",
        color: "white",
        marginTop: "42px"
      },
      cardLimitPecentDayTh: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "white",
        opacity: 0.54
      },
      buttonOrderCard: {
        marginTop: 32,
        background: "#27AE60",
        minWidth: 320,
        color: "white",
        height: 64,
        borderRadius: 4,
        fontSize: 20,
        lineHeight: "24px",
        textTransform: "none",
        letterSpacing: "0",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#7DCEA0"
        }
      },
      card: {
        position: "absolute",
        right: 17,
        top: 120,
        zIndex: 2,
        animationName: "$card",
        animationDuration: "2s",
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        animationDelay: "2s"
      },
      cardShadow: {
        position: "absolute",
        right: -50,
        top: 10,
        zIndex: 1,
        animationName: "$cardShadow",
        animationDuration: "2s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        animationDelay: "2s",
        transform: "scale(1.2)"
      },
      ironCard: {
        fontSize: 36,
        fontWeight: 500,
        textAlign: "center",
        color: "white",
        "& > span": {
          background:
            "linear-gradient(to bottom, #27AE60 0%, rgba(39, 174, 96, 0.4) 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent"
        }
      },
      ironCardDescriptionBlock: {
        fontSize: 20,
        marginTop: 16,
        textAlign: "center",
        color: "white",
        fontWeight: 300,
        marginBottom: 40
      },
      circleWrap: {
        margin: "0 auto",
        width: 128,
        height: 128,
        borderRadius: "50%",
        padding: 1,
        background:
          "linear-gradient(to bottom, #27AE60 0%, rgba(39, 174, 96, 0.4) 100%)"
      },
      circleInner: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "#111",
        position: "relative"
      },
      circleImg: {
        transform: "translate(-50%, -50%)",
        position: "absolute",
        top: "50%",
        left: "50%"
      },
      circleUnderText: {
        color: "white",
        marginTop: "25px",
        fontSize: 16,
        display: "block",
        textAlign: "center"
      },
      signStyle: {
        textAlign: "center",
        color: "white",
        opacity: 0.7,
        fontSize: 38,
        lineHeight: "128px"
      },
      ironCardImg: {
        width: "100%",
        height: "fit-content"
      },
      cardFeatures: {
        backgroundColor: "rgba(255,255,255,.05)",
        borderRadius: 8,
        margin: "55px 0",
        color: "white",
        fontSize: 24,
        padding: "24px 32px",
        fontWeight: 500,
        "& > span": {
          display: "block",
          marginTop: 15,
          opacity: 0.7,
          fontWeight: 300,
          fontSize: 16
        }
      },
      cardMFeatures: {
        flexBasis: "49%"
      },
      saleText: {
        color: "white",
        fontSize: 24,
        lineHeight: "32px",
        fontWeight: "normal"
      },
      timer: {
        color: "white",
        fontSize: 48,
        marginTop: 5,
        lineHeight: "64px",
        fontWeight: "bold"
      },
      orderWrap: {
        marginTop: 32,
        background: "linear-gradient(to right, #27ae60 0%, rgba(0,0,0,0) 50%)",
        borderRadius: 8,
        padding: 1,
        marginBottom: 110
      },
      orderInner: {
        background: "#111111",
        borderRadius: 8,
        padding: 32
      }
    }
  })
);

const calculateTimeLeft = () => {
  const difference = +new Date("2020-02-01") - +new Date();
  let timeLeft: any = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const Header = (props: any) => {
  const classes = useStyles({});

  const [, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    });
  });

  const date = calculateTimeLeft();
  const days = date.days;
  const hours = date.hours;
  const minutes = date.minutes;
  const seconds = date.seconds;

  const eventGAOrderCard = () => {
    ReactGA.event({
      category: "BccIronCard_Preorder_1",
      action: "Preorder_1"
    });
    props.scrollToOrder();
  };

  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
              <div className={classes.logo_div}>
                <img
                  className={classes.logo_img}
                  src="logo-bcc.svg"
                  alt="logo-bcc"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container className={classes.cardDescriptionBlock}>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ zIndex: 5 }}
            >
              <Typography className={classes.cardTitle}>
                Первая бесконтактная
                <br />
                металлическая карта в Казахстане
              </Typography>
            </Grid>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ zIndex: 5 }}
            >
              <Typography className={classes.cardWhatYourWant}>
                Статус имеет значение!
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container className={classes.orderWrap}>
                <Grid item container className={classes.orderInner}>
                  <Grid item>
                    <img className={classes.card} src="card.png" alt="card" />
                    <img
                      className={classes.cardShadow}
                      src="card-shadow.png"
                      alt="card_shadow"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    style={{ zIndex: 4 }}
                  >
                    <Typography className={classes.saleText}>
                      Успейте оформить со скидкой 50% до конца января
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    style={{ zIndex: 3 }}
                  >
                    <Typography className={classes.timer}>
                      {days} : {hours} : {minutes} : {seconds}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    style={{ zIndex: 3 }}
                  >
                    <Button
                      onClick={(e: any) => eventGAOrderCard()}
                      variant="contained"
                      className={classes.buttonOrderCard}
                    >
                      Заказать карту
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container id="secondHeader">
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.ironCard}>
              <span>#IronCard</span> - мы объединили наши традиции и<br />
              инновационные технологии
            </Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.ironCardDescriptionBlock}>
              Карта подчеркивает статус и престиж владельца. Это высочайший
              <br />
              уровень заботы, безопасности и конфиденциальности
            </Typography>
          </Grid>
          <Grid
            item
            container
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            justify="space-between"
          >
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <div className={classes.circleWrap}>
                <div className={classes.circleInner}>
                  <img
                    className={classes.circleImg}
                    src="hammer.svg"
                    alt="hammer"
                  />
                </div>
              </div>
              <span className={classes.circleUnderText}>
                Первоклассная сталь
                <br />
                как для острых мечей
              </span>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={12}
              xs={12}
              className={classes.signStyle}
            >
              +
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <div className={classes.circleWrap}>
                <div className={classes.circleInner}>
                  <img
                    className={classes.circleImg}
                    src="brain.svg"
                    alt="brain"
                  />
                </div>
              </div>
              <span className={classes.circleUnderText}>
                Современные технологии
                <br />
                для комфорта
              </span>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={12}
              xs={12}
              className={classes.signStyle}
            >
              =
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <img
                className={classes.ironCardImg}
                src="IconCard-first.svg"
                alt="iconcard"
              />
              <span className={classes.circleUnderText}>
                Карта всего <b>17 грамм</b>,<br />
                <b>15 грамм</b> нержавеющей стали
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={classes.cardMFeatures}
          >
            <div className={classes.cardFeatures}>
              Бесконтактная оплата
              <span>В том числе Apple Pay</span>
            </div>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={classes.cardMFeatures}
          >
            <div className={classes.cardFeatures}>
              Visa Infinite
              <span>Самый высокий уровень премиальной карты</span>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
