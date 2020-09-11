import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                padding: paddingDownSm
            },
            mainTitle: {
                fontStyle: 'normal',
                textAlign: 'center',
                marginBottom: 30,
                fontWeight: 'bold',
                fontSize: '36px',
                lineHeight: '40px',
                marginTop: 30,
                color: '#141414'
            },
            mainDescription: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#8B98A7'
            },
            paper: {
                padding: '24px',
                background: '#FAFAFA',
                boxSizing: 'border-box',
                borderRadius: '8px',
                minHeight: 160
            },
            iconWrap: {
                padding: 30,
                border: '1px solid #7DCEA0',
                borderRadius: '50%',
                position: 'relative',
                width: 80,
                height: 80,
                marginRight: 25
            },
            icon: {
                width: '20px',
                height: '20px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            },
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#141414',
                lineHeight: '20px',
                marginBottom: 10
            },

            cardFeatures: {
                backgroundColor: "rgb(245 245 245)",
                borderRadius: 8,
                margin: "25px 0",
                color: "#141414",
                fontSize: 24,
                padding: "24px 32px",
                fontWeight: 500,
                "& > span": {
                    display: "block",
                    marginTop: 15,
                    opacity: 1,
                    fontWeight: 300,
                    fontSize: 16,
                },
            },
            description: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#5B5B5B'
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            ...rootSmXl,
            mainTitle: {
                fontStyle: 'normal',
                textAlign: 'center',
                marginBottom: 30,
                fontWeight: 'bold',
                fontSize: '36px',
                lineHeight: '40px',
                marginTop: 30,
                color: '#141414'
            },
            mainDescription: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#8B98A7'
            },
            paper: {
                padding: '24px',
                background: '#FAFAFA',
                boxSizing: 'border-box',
                borderRadius: '8px',
                minHeight: 160,
                height: '100%'
            },
            iconWrap: {
                padding: 30,
                border: '1px solid #7DCEA0',
                borderRadius: '50%',
                position: 'relative',
                width: 80,
                height: 80,
                marginRight: 25
            },
            icon: {
                width: '20px',
                height: '20px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            },
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#141414',
                lineHeight: '20px',
                margin: '10px 0'
            },
            description: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#5B5B5B'
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
        },
        [theme.breakpoints.down('xs')]: {
            iconWrap: {
                padding: 24,
                width: 20,
                height: 20,
                marginRight: 20
            },
            icon: {
                width: '15px',
                height: '15px'
            },
            title: {
                marginBottom: 10
            }
        },
        root: {
            maxWidth: 1280,
            margin: '0 auto',
            position: 'relative'
        }
    })
)

const BestCard = (props: any) => {

    const classes = useStyles({});
    const { t, i18n } = useTranslation();

    return (
        <Grid container className={classes.root}>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.mainTitle}>{t("block_2.title_main")}</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={2}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container alignItems="center">
                            <Grid item className={classes.iconWrap} xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="percent.svg" className={classes.icon} alt="percent" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>{t("block_2.subtitle_desc")}</Typography>
                                <Typography className={classes.description}>{t("block_2.title_2_desc")}<br />
                                    {t("block_2.subtitle_2_desc")}<br />
                                    {t("block_2.subtitle_2_1_desc")}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container alignItems="center">
                            <Grid item className={classes.iconWrap} xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="repeat.svg" className={classes.icon} alt="repeat" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>{t("block_2.title_3_desc")}</Typography>
                                <Typography className={classes.description}>{t("block_2.subtitle_3_desc")}<br />
                                    {t("block_2.subtitle_3_1_desc")}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container alignItems="center">
                            <Grid item className={classes.iconWrap} xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="card-small.svg" className={classes.icon} alt="card" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>{t("block_2.subtitle_3_2_desc")}</Typography>
                                <Typography className={classes.description}>{t("block_2.title_4_desc")}<br />{t("block_2.subtitle_4_desc")}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container alignItems="center">
                            <Grid item className={classes.iconWrap} xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="guard.svg" className={classes.icon} alt="guard" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>{t("block_2.subtitle_4_1_desc")}</Typography>
                                <Grid container xl={true} lg={true} md={true} sm={12} xs={12}>
                                    <Grid item xl={true} lg={true} md={true} sm={12} xs={12}>
                                        <Typography className={classes.description}>{t("block_2.title_5_desc")}</Typography>
                                        <Typography className={classes.description}> {t("block_2.subtitle_5_desc")}</Typography>
                                    </Grid>
                                    <Grid item xl={true} lg={true} md={true} sm={12} xs={12}>
                                        <Typography className={classes.description}>{t("block_2.subtitle_5_1_desc")}</Typography>
                                        <Typography className={classes.description}> {t("block_2.subtitle_5_1_desc_1")}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
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
                        {t("header.subtitle8_desc")}
                        <span>{t("header.subtitle8_1_desc")}</span>
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
              <span>{t("header.subtitle9_1_desc")}</span>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BestCard;