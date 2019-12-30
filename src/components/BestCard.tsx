import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';

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
                margin: '10px 0'
            },
            description: {            
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#5B5B5B'
            }
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
        }
    })
)

const BestCard = (props: any) => {

    const classes = useStyles({});

    return(
        <Grid container className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.mainTitle}>Лучшее для вас</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={2}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container alignItems="center">
                            <Grid item className={classes.iconWrap} xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="percent.svg" className={classes.icon} alt="percent" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>Кэшбэк с покупок</Typography>
                                <Typography className={classes.description}>· 2% за все операции<br/>
· +1% при наличии вклада от 1 000 000 до 6 000 000 ₸<br/>
· +2% при наличии вклада от 6 000 000 ₸</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container alignItems="center">
                            <Grid item className={classes.iconWrap} xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="repeat.svg" className={classes.icon} alt="repeat" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>Бесплатное посещение бизнес-залов по всему миру</Typography>
                                <Typography className={classes.description}>· 6 проходов в бизнес-зал аэропорта г. Нур-Султан<br/>
                                    · Более 1000 бизнес-залов во всем мире</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container alignItems="center">
                            <Grid item className={classes.iconWrap} xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="card-small.svg" className={classes.icon} alt="card" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>Бесплатные переводы между картами любых банков</Typography>
                                <Typography className={classes.description}>· РК - безлимитно<br/>· зарубеж - до 1 000 000 ₸</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container alignItems="center">
                            <Grid item className={classes.iconWrap} xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="guard.svg" className={classes.icon} alt="guard" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>Страхование до 1 000 000 $ для владельцев и членов семьи</Typography>
                                <Grid container xl={true} lg={true} md={true} sm={12} xs={12}>
                                    <Grid item xl={true} lg={true} md={true} sm={12} xs={12}>
                                        <Typography className={classes.description}>·  медицинская помощь</Typography>
                                        <Typography className={classes.description}>·  отмена рейса</Typography>
                                    </Grid>
                                    <Grid item xl={true} lg={true} md={true} sm={12} xs={12}>
                                        <Typography className={classes.description}>·  потеря багажа</Typography>
                                        <Typography className={classes.description}>·  защита покупок</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BestCard;