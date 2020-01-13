import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('md')]: {
            timerBox: {
                padding: '24px',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                borderRadius: 8,
                margin: '32px 0 42px',
                '& > h1': {
                    margin: '0 0 17px',
                    fontWeight: 'normal',
                    padding: 0,
                    fontSize: 16,
                    lineHeight: '24px'
                },
                '& > span': {
                    fontWeight: 'bold',
                    fontSize: 48,
                    lineHeight: '56px'
                }
            }
        },
        [theme.breakpoints.between('md', 'xl')]: {
            timerBox: {
                padding: '24px',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                borderRadius: 8,
                margin: '32px 0 42px',
                '& > h1': {
                    margin: '0 0 17px',
                    fontWeight: 'normal',
                    padding: 0,
                    fontSize: 16,
                    lineHeight: '24px'
                },
                '& > span': {
                    fontWeight: 'bold',
                    fontSize: 48,
                    lineHeight: '56px'
                }
            }
        },
        [theme.breakpoints.down('xs')]: {
            timerBox: {
                padding: '24px',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                borderRadius: 8,
                margin: '32px 0 42px',
                '& > h1': {
                    margin: '0 0 17px',
                    fontWeight: 'normal',
                    padding: 0,
                    fontSize: 16,
                    lineHeight: '24px'
                },
                '& > span': {
                    fontWeight: 'bold',
                    fontSize: 36,
                    lineHeight: '56px'
                }
            }

        }
    })
)

const calculateTimeLeft = () => {
    const difference = +new Date('2020-02-01') - +new Date()
    let timeLeft: any = {}

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }

    return timeLeft;
}

const Timer = (props: any) => {
    const classes = useStyles({});

    const [, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000)
    })

    const date = calculateTimeLeft();
    const days = date.days
    const hours = date.hours
    const minutes = date.minutes
    const seconds = date.seconds

    return (
        <div className={classes.timerBox}>
            <h1>Дней до завершения акции</h1>
            <span>{days}  :  {hours}  :  {minutes}  :  {seconds}</span>
        </div>
    )
}


export default Timer;