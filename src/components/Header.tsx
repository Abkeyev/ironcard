import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, MenuItem, Select } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@keyframes card": {
      from: {
        transform: "translateY(0px)",
      },
      to: {
        transform: "translateY(30px)",
      },
    },
    root: {
      maxWidth: 1280,
      margin: "0 auto",
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        backgroundSize: "auto",
        backgroundColor: "#111111",
      },
      root: {
        backgroundSize: "auto",
        padding: paddingDownSm,
      },
      logo_img: {
        width: "126px",
        height: "30px",
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
        fontSize: 9,
      },
      cardDescriptionBlock: {
        marginTop: "50px",
        zIndex: 3,
      },
      cardTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: 'center',
        color: "white",
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: 'center',
        fontSize: "12px",
        color: "white",
        opacity: 0.7,
        marginTop: 24,
      },
      cardLimitPecentDay: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "12px",
        color: "white",
        marginTop: "21px",
      },
      cardLimitPecentDayTh: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "9px",
        color: "white",
        opacity: 0.54,
      },
      buttonOrderCard: {
        background: "#27AE60",
        minWidth: 320,
        color: "white",
        height: 64,
        marginTop: 16,
        borderRadius: 4,
        fontSize: 20,
        lineHeight: "24px",
        letterSpacing: "0",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#7DCEA0",
        },
      },
      card: {
        position: "absolute",
        right: 17,
        top: 240,
        zIndex: 2,
        width: "90%",
        animationName: "$card",
        animationDuration: "2s",
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        animationDelay: "2s",
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
          "-webkit-text-fill-color": "transparent",
        },
      },


      rootCarousel: {
        width: '100vw',
      },
      rootCarouselInner: {
        maxWidth: 1280,
        margin: "0 auto",
        padding: '100px 0',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center'
      },
      carousel: {
        width: '100vw',
        boxSizing: 'border-box',
        position: 'relative',
        '&:after': {
          content: ' '
        },
        '&:before': {
          content: ' '
        }
      },
      cardImage: {
        marginTop: 16,
        '& img': {
          width: 300
        }
      },
      innerCarousel: {
        display: 'flex',
        width: 'calc((100vw - 0px) * 4)',
        justifyContent: 'space-between',
        zIndex: 2,
        position: 'relative',
        transition: 'transform 500ms ease',
        // transform: 'translateX(calc(-100vw + 180px))',
        '& > a': {
          display: 'block',
          width: 'calc(100vw - 200px)',
          '& > img': {
            borderRadius: 6,
            width: '100%',
            padding: '0 10px',
            boxSizing: 'border-box'
          }
        }
      },
      leftArrow: {
        position: 'absolute',
        backgroundColor: 'rgb(255 255 255 / 0%)',
        width: '32px',
        zIndex: 3,
        left: 0,
        top: 0,
        bottom: 0,
        transition: '0.3s',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
          content: "' '",
          border: 'solid white',
          borderWidth: '0 3px 3px 0',
          display: 'inline-block',
          padding: 4,
          transform: 'rotate(135deg)'
        },
        '&:hover': {
          backgroundColor: 'rgb(255 255 255 / 10%)',
        }
      },
      rightArrow: {
        position: 'absolute',
        backgroundColor: 'rgb(255 255 255 / 0%)',
        width: '32px',
        zIndex: 3,
        right: 0,
        top: 0,
        bottom: 0,
        transition: '0.3s',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
          content: "' '",
          border: 'solid white',
          borderWidth: '0 3px 3px 0',
          display: 'inline-block',
          padding: 4,
          transform: 'rotate(-45deg)'
        },
        '&:hover': {
          backgroundColor: 'rgb(255 255 255 / 10%)',
        }
      },
      banner: {
        display: 'block',
        position: 'relative',
        '& > a': {
          display: 'block',
          '& > img': {
            width: '100%'
          }
        }
      },

      blackCard: {
        backgroundColor: '#111111'
      },
      redCard: {
        backgroundColor: '#991E1E'
      },
      roseCard: {
        backgroundColor: '#DDB5B5'
      },
      tiffCard: {
        backgroundColor: '#22B7B7'
      },
      changeHeaderImg: {
        display: 'flex',
        margin: '16px 0',
        '& img': {
          width: '70%',
          margin: 'auto',
          borderRadius: 16,
        }
      },
      topCard: {
        backgroundImage: 'unset',
        backgroundAttachment: 'fixed',
        backgroundSize: '200%',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff',
        height: '100%',
        width: '100%'
      },
      bannerRed: {
        display: 'none',
        backgroundImage: 'url(banner-red.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: '200%',
        backgroundColor: '#991E1E',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        '& div > div': {
          display: 'flex',
          alignItems: 'center'
        }
      },
      bannerRose: {
        display: 'none',
        backgroundImage: 'url(banner-rose.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: '200%',
        backgroundColor: '#DDB5B5',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        '& div > div': {
          display: 'flex',
          alignItems: 'center'
        }
      },
      bannerTiffany: {
        display: 'none',
        backgroundImage: 'url(banner-tif.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: '200%',
        backgroundColor: '#22B7B7',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        '& div > div': {
          display: 'flex',
          alignItems: 'center'
        }
      },
      ironCardDescriptionBlock: {
        fontSize: 20,
        marginTop: 16,
        textAlign: "center",
        color: "white",
        fontWeight: 300,
        marginBottom: 40,
      },
      circleWrap: {
        margin: "0 auto",
        width: 128,
        height: 128,
        borderRadius: "50%",
        padding: 1,
        background:
          "linear-gradient(to bottom, #27AE60 0%, rgba(39, 174, 96, 0.4) 100%)",
      },
      circleInner: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "#111",
        position: "relative",
      },
      circleImg: {
        transform: "translate(-50%, -50%)",
        position: "absolute",
        top: "50%",
        left: "50%",
      },
      circleUnderText: {
        color: "white",
        marginTop: "25px",
        fontSize: 16,
        display: "block",
        textAlign: "center",
      },
      signStyle: {
        textAlign: "center",
        color: "white",
        opacity: 0.7,
        fontSize: 38,
        lineHeight: "128px",
      },
      ironCardImg: {
        width: "100%",
        height: "fit-content",
      },

      cardMore: {
        '& img': {
          width: 220,
          position: 'absolute',
          margin: 'auto',
          right: 0,
          left: 0,
          top: 290,
          borderRadius: '10px'
        },
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
          fontSize: 16,
        },
      },
      saleText: {
        color: "white",
        fontSize: 24,
        lineHeight: "32px",
        fontWeight: "bold",
      },
      timer: {
        color: "white",
        fontSize: 48,
        marginTop: 5,
        lineHeight: "64px",
        fontWeight: "bold",
      },
      orderWrap: {
        marginTop: 32,
        borderRadius: 8,
        padding: 1,
        marginBottom: 20,
      },
      orderInner: {
        background: "#111111",
        borderRadius: 8,
        padding: 0,
      },
    },
    [theme.breakpoints.down("xs")]: {
      buttonOrderCard: {
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
          backgroundColor: "#7DCEA0",
        },
      },
      cardWhatYourWant: {
        marginTop: 10,
      },
      saleText: {
        fontSize: 20,
      },
      timer: {
        fontSize: 38,
        textAlign: "center",
      },
      ironCard: {
        fontSize: 24,
      },
      cardFeatures: {
        borderRadius: 8,
        margin: "30px 0",
        marginBottom: 0,
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        backgroundSize: "auto",
      },
      ...rootSmXl,
      logo_img: {
        width: "168px",
        height: "40px",
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
        fontSize: 12,
      },
      changeHeaderImg: {
        display: 'none'
      },
      conColor: {
        display: 'block'
      },
      cardDescriptionBlock: {
        marginTop: "80px",
        zIndex: 3,
      },
      cardTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "40px",
        lineHeight: "48px",
        color: "white",
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        color: "white",
        opacity: 0.7,
        marginTop: 24,
      },
      cardLimitPecentDay: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "24px",
        color: "white",
        marginTop: "42px",
      },
      cardLimitPecentDayTh: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "white",
        opacity: 0.54,
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
          backgroundColor: "#7DCEA0",
        },
      },
      card: {
        position: "absolute",
        right: 17,
        top: 120,
        zIndex: 2,
        animationName: "$card-one",
        animationDuration: "2s",
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        animationDelay: "2s",
      },
      cardMore: {
        '& img': {
          width: 320,
          position: 'absolute',
          right: 80,
          top: 180,
          borderRadius: '10px'
        },
      },
      ironCard: {
        fontSize: 36,
        fontWeight: 500,
        textAlign: "center",
        color: "#141414",
        "& > span": {
          background:
            "linear-gradient(to bottom, #27AE60 0%, rgba(39, 174, 96, 0.4) 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      },
      ironCardDescriptionBlock: {
        fontSize: 20,
        marginTop: 16,
        textAlign: "center",
        color: "#141414",
        fontWeight: 300,
        marginBottom: 40,
      },
      circleWrap: {
        margin: "0 auto",
        width: 128,
        height: 128,
        borderRadius: "50%",
        padding: 1,
        background:
          "linear-gradient(to bottom, #27AE60 0%, rgba(39, 174, 96, 0.4) 100%)",
      },
      circleInner: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "#111",
        position: "relative",
      },
      circleImg: {
        transform: "translate(-50%, -50%)",
        position: "absolute",
        top: "50%",
        left: "50%",
      },
      circleUnderText: {
        color: "#141414",
        marginTop: "25px",
        fontSize: 16,
        display: "block",
        textAlign: "center",
      },
      signStyle: {
        textAlign: "center",
        color: "#141414",
        opacity: 0.7,
        fontSize: 38,
        lineHeight: "128px",
      },
      ironCardImg: {
        width: "100%",
        height: "fit-content",
      },
      cardFeatures: {
        backgroundColor: "rgb(0 0 0 / 5%)",
        borderRadius: 8,
        margin: "55px 0",
        color: "#141414",
        fontSize: 24,
        padding: "24px 32px",
        fontWeight: 500,
        "& > span": {
          display: "block",
          marginTop: 15,
          opacity: 0.7,
          fontWeight: 300,
          fontSize: 16,
        },
      },
      cardMFeatures: {
        flexBasis: "49%",
      },
      saleText: {
        color: "white",
        fontSize: 24,
        lineHeight: "32px",
        fontWeight: "normal",
      },
      timer: {
        color: "white",
        fontSize: 48,
        marginTop: 5,
        lineHeight: "64px",
        fontWeight: "bold",
      },
      orderWrap: {
        marginTop: 32,
        borderRadius: 8,
        padding: 1,
        marginBottom: 110,
      },
      orderInner: {
        background: "transparent",
        borderRadius: 8,
        padding: 32,
        paddingLeft: 0,
      },



      rootCarousel: {
        width: '100vw',
      },
      rootCarouselInner: {
        maxWidth: 1280,
        margin: "0 auto",
        padding: '200px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      carousel: {
        width: '100vw',
        boxSizing: 'border-box',
        position: 'relative',
        '&:after': {
          content: ' '
        },
        '&:before': {
          content: ' '
        }
      },
      cardImage: {
        '& img': {
          width: 300
        }
      },
      innerCarousel: {
        display: 'flex',
        width: 'calc((100vw - 0px) * 4)',
        justifyContent: 'space-between',
        zIndex: 2,
        position: 'relative',
        transition: 'transform 500ms ease',
        // transform: 'translateX(calc(-100vw + 180px))',
        '& > a': {
          display: 'block',
          width: 'calc(100vw - 200px)',
          '& > img': {
            borderRadius: 6,
            width: '100%',
            padding: '0 10px',
            boxSizing: 'border-box'
          }
        }
      },
      leftArrow: {
        position: 'absolute',
        backgroundColor: 'rgb(255 255 255 / 0%)',
        width: '100px',
        zIndex: 3,
        left: 0,
        top: 0,
        bottom: 0,
        transition: '0.3s',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
          content: "' '",
          border: 'solid white',
          borderWidth: '0 3px 3px 0',
          display: 'inline-block',
          padding: 8,
          transform: 'rotate(135deg)'
        },
        '&:hover': {
          backgroundColor: 'rgb(255 255 255 / 10%)',
        }
      },
      rightArrow: {
        position: 'absolute',
        backgroundColor: 'rgb(255 255 255 / 0%)',
        width: '100px',
        zIndex: 3,
        right: 0,
        top: 0,
        bottom: 0,
        transition: '0.3s',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
          content: "' '",
          border: 'solid white',
          borderWidth: '0 3px 3px 0',
          display: 'inline-block',
          padding: 8,
          transform: 'rotate(-45deg)'
        },
        '&:hover': {
          backgroundColor: 'rgb(255 255 255 / 10%)',
        }
      },
      banner: {
        display: 'block',
        position: 'relative',
        '& > a': {
          display: 'block',
          '& > img': {
            width: '100%'
          }
        }
      },
      blackCard: {
        backgroundColor: '#111111'
      },
      redCard: {
        backgroundColor: '#991E1E'
      },
      roseCard: {
        backgroundColor: '#DDB5B5'
      },
      tiffCard: {
        backgroundColor: '#22B7B7'
      }


    },
    select: {
      color: "#111111",
      "&:before": {
        borderColor: "#111111",
      },
      "&:after": {
        borderColor: "#111111",
      },
    },
    icon: {
      fill: "#111111",
    },
  })
);

const Header = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();
  const [carousel, setCarousel] = React.useState(0);

  const handleLangChange = (lang: any) => {
    props.changeLang(lang);
  };

  const eventGAOrderCard = () => {
    ReactGA.event({
      category: "BccIronCard_Preorder_1",
      action: "Preorder_1",
    });
    props.scrollToOrder();
  };

  const carouselMove = (isLeft: boolean) => {
    if (isLeft) {
      if (carousel === 0) {
        setCarousel(3)
      } else {
        setCarousel(carousel - 1)
      }
    } else {
      if (carousel === 3) {
        setCarousel(0)
      } else {
        setCarousel(carousel + 1)
      }
    }
  }

  return (
    <Grid container className={classes.mainRoot}>

      <Grid container className={classes.topCard}>
        <Grid container className={classes.root}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid container justify="space-between">
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <div className={classes.logo_div}>
                  <img
                    className={classes.logo_img}
                    src="green-logo.svg"
                    alt="logo-bcc"
                  />
                </div>
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                style={{ textAlign: "right", zIndex: 10 }}
              >
                <Select
                  className={classes.select}
                  value={props.lang}
                  onChange={(e: any) => handleLangChange(e.target.value)}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                >
                  <MenuItem value="ru">Рус</MenuItem>
                  <MenuItem value="kz">Каз</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div className={classes.carousel} id="secondHeader">
          <div className={classes.leftArrow} onClick={() => carouselMove(true)}></div>
          <div className={classes.rightArrow} onClick={() => carouselMove(false)}></div>
          <div className={classes.innerCarousel} style={{ transform: `translateX(calc((-100vw + 0px) * ${carousel}))` }}>
            <div className={`${classes.rootCarousel} ${classes.blackCard}`} style={{ transform: carousel === 3 ? 'translateX(calc((100vw - 0px) * 4))' : '' }}>


              <div className={classes.rootCarouselInner}>
                <div>
                  <Typography className={classes.cardTitle}>
                    Карта, соответствующая
                <br />
                вашему образу жизни
              </Typography>

                  <Typography className={classes.cardWhatYourWant}>
                    {t("header.subtitle_desc")}
                  </Typography>

                  <Button
                    onClick={(e: any) => eventGAOrderCard()}
                    variant="contained"
                    className={classes.buttonOrderCard}
                  >
                    {t("header.button_main")}
                  </Button>
                </div>
                <div className={classes.cardImage}>
                  <img src="images/black-ed.svg" />
                </div>
              </div>


            </div>


            <div className={`${classes.rootCarousel} ${classes.redCard}`}>
              <div className={classes.rootCarouselInner}>
                <div>
                  <Typography className={classes.cardTitle}>
                    Больше привилегий
                <br />
                для ваших впечатлений
              </Typography>

                  <Typography className={classes.cardWhatYourWant}>
                    {t("header.subtitle_desc")}
                  </Typography>

                  <Button
                    onClick={(e: any) => eventGAOrderCard()}
                    variant="contained"
                    className={classes.buttonOrderCard}
                  >
                    {t("header.button_main")}
                  </Button>
                </div>
                <div className={classes.cardImage}>
                  <img src="images/red-ed.svg" />
                </div>
              </div>
            </div>

            <div className={`${classes.rootCarousel} ${classes.roseCard}`}>
              <div className={classes.rootCarouselInner}>
                <div>
                  <Typography className={classes.cardTitle}>
                    Откройте новый
                <br />
                уровень комфорта
              </Typography>

                  <Typography className={classes.cardWhatYourWant}>
                    {t("header.subtitle_desc")}
                  </Typography>

                  <Button
                    onClick={(e: any) => eventGAOrderCard()}
                    variant="contained"
                    className={classes.buttonOrderCard}
                  >
                    {t("header.button_main")}
                  </Button>
                </div>
                <div className={classes.cardImage}>
                  <img src="images/rose-ed.svg" />
                </div>
              </div>
            </div>
            <div className={`${classes.rootCarousel} ${classes.tiffCard}`} style={{ transform: carousel === 0 ? 'translateX(calc((-100vw + 0px) * 4))' : '' }}>
              <div className={classes.rootCarouselInner}>
                <div>
                  <Typography className={classes.cardTitle}>
                    С #IronCard вы
                <br />
                всегда в приоритете
              </Typography>

                  <Typography className={classes.cardWhatYourWant}>
                    {t("header.subtitle_desc")}
                  </Typography>

                  <Button
                    onClick={(e: any) => eventGAOrderCard()}
                    variant="contained"
                    className={classes.buttonOrderCard}
                  >
                    {t("header.button_main")}
                  </Button>
                </div>
                <div className={classes.cardImage}>
                  <img src="images/tiffany-ed.svg" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </Grid>


      {/* <Grid container className={classes.bannerRed} id="secondHeader">
        <Grid container className={classes.root}>

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
                  Больше привилегий
                <br />
                для ваших впечатлений
                </Typography>
              </Grid>


            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.bannerRose}>
        <Grid container className={classes.root}>

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
                  Откройте новый
                <br />
                уровень комфорта
                </Typography>
              </Grid>


            </Grid>
          </Grid>
        </Grid>
      </Grid>


      <Grid container className={classes.bannerTiffany}>
        <Grid container className={classes.root}>

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
                  С #IronCard вы
                <br />
                всегда в приоритете
                </Typography>
              </Grid>


            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

    </Grid>
  );
};

export default Header;
