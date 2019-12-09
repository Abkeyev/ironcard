import React from 'react';
import { Grid, Typography, Button, Paper, Slider } from '@material-ui/core';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format'; 

const PrettoSlider = withStyles({
    root: {
      color: '#FFCF87',
      height: 4,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#FFCF87',
      border: '4px solid #FFFFFF',
      marginTop: -10,
      marginLeft: -12,
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.24)'
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 1px)',
    },
    track: {
      height: 4,
      borderRadius: 4,
    },
    rail: {
      height: 4,
      borderRadius: 4,
    },
  })(Slider);


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                padding: '36px 20px 36px 20px'
            },
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '20px'
            },
            tabButtonActive: {
                width: '160px',
                height: '30px',
                backgroundColor: '#FFCF87',
                borderRadius: '2px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '10px',
                textTransform: 'none',
                '&:hover, &:active': {
                    backgroundColor: '#FFCF87',
                    opacity: 0.8,
                  }
                
            },
            tabButton: {
                width: '120px',
                height: '30px',
                backgroundColor: '#E8E8E8',
                borderRadius: '2px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '10px',
                textTransform: 'none'
            }, 
            result: {
                padding: '32px 67px 32px 67px',
                background: '#FFFFFF',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
                borderRadius: '8px'
            },
            resultTitle: {            
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                color: '#B9B9B9'
            },
            resultSum: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '96px',
                color: '#141414'
            },
            resultOrderCard: {
                width:'324px',
                height: '64px',
                backgroundColor: '#3F0259',
                borderRadius: '8px',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '20px',
                textTransform: 'none',
                color: '#FFFFFF'
            },
            monthSpending: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                height: '16px',
                color: '#141414',
                opacity: 0.7,
                marginTop: '36px'
            },
            monthSpendingSum: {                        
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '32px',
                color: '#141414',
                marginTop: 12
            },
            monthSpendingInterval: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                color: '#898989'
            },
            note: {            
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14,
                color: '#898989',
                opacity: 0.7,
                marginTop: 32
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            root: {
                padding: '72px 52px 72px 52px'
            },
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '40px'
            },
            tabButtonActive: {
                width: '215px',
                height: '36px',
                backgroundColor: '#FFCF87',
                borderRadius: '4px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '14px',
                textTransform: 'none',
                '&:hover, &:active': {
                    backgroundColor: '#FFCF87',
                    opacity: 0.8,
                  }
                
            },
            tabButton: {
                width: '181px',
                height: '36px',
                backgroundColor: '#E8E8E8',
                borderRadius: '4px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '14px',
                textTransform: 'none'
            }, 
            result: {
                padding: '32px 67px 32px 67px',
                background: '#FFFFFF',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
                borderRadius: '8px'
            },
            resultTitle: {            
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                color: '#B9B9B9'
            },
            resultSum: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '96px',
                color: '#141414'
            },
            resultOrderCard: {
                width:'324px',
                height: '64px',
                backgroundColor: '#3F0259',
                borderRadius: '8px',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '20px',
                textTransform: 'none',
                color: '#FFFFFF'
            },
            monthSpending: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                height: '16px',
                color: '#141414',
                opacity: 0.7,
                marginTop: '36px'
            },
            monthSpendingSum: {                        
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '32px',
                color: '#141414',
                marginTop: 12
            },
            monthSpendingInterval: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '13px',
                color: '#898989'
            },
            note: {            
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14,
                color: '#898989',
                opacity: 0.7,
                marginTop: 32
            }
        }
    })
)

const CaclulatorCashBack = () => {

    const classes = useStyles({});

    const [spendingSum, setSpendingSum] = React.useState(300000);

    return(
        <Grid container className={classes.root} spacing={4}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.title}>Калькулятор кешбэка</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={10}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Button className={classes.tabButtonActive}>по любимым категориям</Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.tabButton}>по всем категориям</Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Typography className={classes.monthSpending}>Траты в месяц по любимым категориям*</Typography>
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}
                                    className={classes.monthSpendingSum} >
                                <NumberFormat 
                                    value={spendingSum} 
                                    thousandSeparator={" "}
                                    displayType="text"/>
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <PrettoSlider 
                                    min={0}
                                    max={1000000}
                                    valueLabelDisplay="off" 
                                    aria-label="pretto slider" 
                                    defaultValue={spendingSum}
                                    onChange={(e, val) => setSpendingSum(val instanceof Array ? val[1] : val)}
                                    />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                <Grid container justify="flex-start">
                                    <Typography className={classes.monthSpendingInterval}>0</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                <Grid container justify="flex-end">
                                    <Typography className={classes.monthSpendingInterval}>1 000 000</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Typography className={classes.note}>*В расчет взяли кешбэк под 5%. То есть, сумма бонусов может быть намного больше</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Paper elevation={0} className={classes.result}>
                            <Typography align="center" className={classes.resultTitle}>Ваш кешбэк с картой #КартаКарта</Typography>
                            <Typography align="center" className={classes.resultSum}>45000 ₸</Typography>
                            <Typography align="center">
                                <Button className={classes.resultOrderCard}>Оформить</Button>
                            </Typography>                    
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>            
        </Grid>
    )
};

export default CaclulatorCashBack;