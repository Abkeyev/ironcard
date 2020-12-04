import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({        
        [theme.breakpoints.down('sm')]: {
            root: {
                backgroundColor: '#FAFAFA',
                padding: paddingDownSm
            },
            mainTitle: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '20px'
            },
            step: {
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 48,
                color: '#E8E8E8'
            },
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#141414'  
            },
            description: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B'          
            },
            arrow: {
                width: 20,
                height: 20
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            mainRoot: {
                backgroundColor: '#FAFAFA',
            },
            ...rootSmXl,
            mainTitle: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '40px'
            },
            step: {
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 96,
                color: '#E8E8E8'
            },
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 28,
                color: '#141414'  
            },
            description: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 18,
                color: '#5B5B5B'          
            },
            arrow: {
                width: 42,
                height: 42
            }
        }
    })
)

const HowToGetCard = (props: any) => {

    const classes = useStyles({});

    return(
        <Grid container className={classes.mainRoot}>
            <Grid container className={classes.root}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.mainTitle}>Как получить карту</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Grid container spacing={8}>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Grid container spacing={8} alignItems="center">
                                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                    <Typography className={classes.step}>1</Typography>
                                    <Typography className={classes.title}>Заполните заявку</Typography>
                                    <Typography className={classes.description}>В ближайшем офисе или на сайте. Это займет всего несколько минут</Typography>
                                </Grid>
                                <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                                    <img className={classes.arrow} src="arrow.svg" alt="arrow" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Grid container spacing={8} alignItems="center">
                                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                    <Typography className={classes.step}>2</Typography>
                                    <Typography className={classes.title}>Узнайте решение</Typography>
                                    <Typography className={classes.description}>Наш менеджер свяжется с вами для уточнения деталей в течение 5 минут</Typography>
                                </Grid>
                                <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                                    <img className={classes.arrow} src="arrow.svg" alt="arrow" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Grid container spacing={8} alignItems="center">
                                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                    <Typography className={classes.step}>3</Typography>
                                    <Typography className={classes.title}>Получите карту</Typography>
                                    <Typography className={classes.description}>Получите #картукарту в удобном для вас офисе Банка</Typography>
                                </Grid>
                            </Grid>                
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>     
    )

}

export default HowToGetCard;