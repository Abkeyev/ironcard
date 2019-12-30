import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                padding: '20px 24px 20px 24px'
            },
            title: {
                marginTop: 50,
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 30,
                color: '#141414'
            },
            description: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14,
                color: '#141414',
                marginBottom: 24
            },
            googlePlayAppStore: {
                width: 120,
                height: 40
            },
            img: {
                display: 'none'
            }
        },
        [theme.breakpoints.between('md', 'xl')]: {
            root: {
                padding: '27px 42px 52px 52px',
                background: '#fafafa',
                width: '100%',
                position: 'relative'
            },
            title: {
                marginTop: 200,
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 40,
                color: '#141414'
            },
            description: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 18,
                color: '#141414',
                marginBottom: 48
            },
            img: {
                width: 330,
                height: 484,
                position: 'absolute',
                right: 100,
                bottom: 0
            }
        }
    })
)

const MobileBanking = () => {

    const classes = useStyles({});

    const onClickAppStore = () => {
        ReactGA.event({
            category: 'BccCard',
            action: 'AppStore_download'
        });
    }

    const onClickGooglePlay = () => {
        ReactGA.event({
            category: 'BccCard',
            action: 'GooglePlay_download'
        });
    }

    return(
        <Grid container className={classes.root} spacing={4}>
            <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                <Typography className={classes.title}>Мобильное приложение Starbanking</Typography>
                <Typography className={classes.description}>Оплачивайте услуги, управляйте рассрочкой и кешбэком,
                    пополняйте карту онлайн с карт других банков РК</Typography>
                <Grid container spacing={3}>
                    <Grid item>
                        <a href="https://apps.apple.com/kz/app/starbanking/id743617904">
                            <img onClick={() => onClickAppStore()} className={classes.googlePlayAppStore} src="app_store.svg" alt="app_store" />
                        </a>
                    </Grid> 
                    <Grid item>
                        <a href="https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru">
                            <img onClick={() => onClickGooglePlay()} className={classes.googlePlayAppStore} src="google_play.svg" alt="google_play" />
                        </a>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <Grid container justify="center">
                    <img className={classes.img} src="froot-apps.svg" alt="star_mobile_banking" />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MobileBanking;