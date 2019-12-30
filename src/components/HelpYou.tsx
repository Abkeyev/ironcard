import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import { PhoneAndroid, Call } from '@material-ui/icons';
import ReactGA from 'react-ga';
 
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            mainRoot: {
                backgroundColor: '#FAFAFA',
                padding: '20px 0'
            },
            ...rootSmXl,
            helpYou: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 40,
                color: '#141414'        
            },
            paper: {
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                padding: 20,
                border: '1px solid #E8E8E8',
                marginBottom: 10
            },
            ourSpec: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 18,
                color: '#5B5B5B',
                paddingLeft: 56
            },
            freeCallText: {                
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 28
            },
            freeCall: {
                color: '#ffffff',
                background: '#27AE60',
                borderRadius: 8,
                width: 32,
                height: 32,
                padding: 6,
                boxSizing: 'border-box',
                verticalAlign: 'text-bottom',
                marginRight: 16
            },
            phoneText: {
                fonStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 28
            },
            phone: {
                color: '#ffffff',
                background: '#27AE60',
                borderRadius: 8,
                width: 32,
                height: 32,
                padding: 6,
                boxSizing: 'border-box',
                verticalAlign: 'text-bottom',
                marginRight: 16
            },
            gridMargin: {
                marginTop: 30
            }
        },
        [theme.breakpoints.between('md', 'xl')]: {
            mainRoot: {
                backgroundColor: '#FAFAFA',
                padding: '50px 0'
            },
            ...rootSmXl,
            helpYou: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 40,
                color: '#141414'        
            },
            paper: {
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                padding: 20,
                border: '1px solid #E8E8E8',
                display: 'grid',
                alignContent: 'center'
            },
            ourSpec: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 18,
                color: '#5B5B5B',
                paddingLeft: 56
            },
            freeCallText: {                
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 28
            },
            freeCall: {
                color: '#ffffff',
                background: '#27AE60',
                borderRadius: 8,
                width: 32,
                height: 32,
                padding: 6,
                boxSizing: 'border-box',
                verticalAlign: 'text-bottom',
                marginRight: 16
            },
            phoneText: {
                fonStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 28,
                display: 'flex',
                alignItems: 'center'
            },
            phone: {
                color: '#ffffff',
                background: '#27AE60',
                borderRadius: 8,
                width: 32,
                height: 32,
                padding: 6,
                boxSizing: 'border-box',
                verticalAlign: 'text-bottom',
                marginRight: 16
            }
        },
        [theme.breakpoints.down('xs')]: {
            paper: {
                display: 'flex',
                alignItems: 'center'
            },
            ourSpec: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                paddingLeft: 0
            },
            freeCallText: {
                fontSize: 20
            },
            phoneText: {
                fontSize: 18,
                display: 'flex',
                alignItems: 'center'
            }
        },
        gridMargin: {
            '& > a': {
                textDecoration: 'none',
                color: 'black'
            }
        }
    })
)

const HelpYou = () => {

    const classes = useStyles({});

    const onClickCall505 = () => {
        ReactGA.event({
            category: 'BccCard',
            action: 'call_505'
        })
    }

    return(
        <Grid container className={classes.mainRoot}>
            <Grid container className={classes.root} spacing={4} justify="center">
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}  className={classes.gridMargin}>
                    <a href="tel:505">
                        <Box onClick={() => onClickCall505()} className={classes.paper} height={1}>
                            <Typography className={classes.freeCallText}>
                                <Call className={classes.freeCall}/> 505
                            </Typography>
                            <Typography className={classes.ourSpec}>
                                Бесплатно с мобильного
                            </Typography>
                        </Box>
                    </a>
                </Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12} className={classes.gridMargin}>
                    <a href="tel:87272443030">
                        <Box className={classes.paper} height={1}>
                            <Typography className={classes.phoneText}>
                                <PhoneAndroid className={classes.phone}/> 8 (727) 244 30 30
                            </Typography>
                        </Box>
                    </a>
                </Grid>
            </Grid>
        </Grid>        
    )

}

export default HelpYou;