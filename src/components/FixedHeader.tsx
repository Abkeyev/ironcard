import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link, animateScroll as scroll } from 'react-scroll';
 
const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        [theme.breakpoints.between('sm', 'xl')]: {
            hide: {
                opacity: 0,
                transition: 'all ease-in-out .3s'
            },
            header: {
                position: 'fixed',
                zIndex: 99,
                top: 0,
                left: 0,
                right: 0,
                opacity: 1,
                height: 100,
                width: '100%',
                boxSizing: 'border-box',
                padding: '21px 52px',
                backgroundColor: '#ffffff',
                boxShadow: '0px 7px 25px rgba(29, 29, 29, 0.15)',
                transition: 'all ease-in-out .3s'
            },
            buttonOrderCard: {
                background: '#27AE60',
                minWidth: 230,
                color: 'white',
                height: 48,
                borderRadius: 4,
                fontSize: 16,
                lineHeight: '48px',
                textTransform: 'none',
                fontWeight: 'bold',
                padding: 0,
                '&:hover': {
                    backgroundColor: '#7DCEA0'
                }
            }
        }
    })
);

let hide = true

const FixedHeader = (props: any) => {
    let [hide, setHide] = useState(true)
    useEffect(() => {
      window.document.addEventListener('scroll', (d) => {
        const doc = document
        const element = doc && doc.getElementById('secondHeader')
        const scrollTop = element && element.offsetTop
        scrollTop && window.scrollY >= scrollTop ? setHide(hide = false) : setHide(hide = true)
      })
    });

    const classes = useStyles({});

    return(
        <Grid container className={hide ? classes.hide : classes.header}>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <img src="green-logo.svg" />
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Grid justify="center" container>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                        <img src="iconcardsmall.svg" />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <Link smooth={true} to="order" >
                            <Button variant="contained" className={classes.buttonOrderCard}>
                                Предзаказ
                            </Button>
                        </Link>
                    </Grid>       
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FixedHeader;