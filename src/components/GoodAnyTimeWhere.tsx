import React from 'react';
import { Grid, Button, Typography, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import { EmojiObjects, ArrowDropDown, ArrowDropUp, Error } from '@material-ui/icons';
import NumberFormat from 'react-number-format';
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            mainRoot: {
                background: '#FAFAFA'
            },
            root: {
                padding: paddingDownSm
            },
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 20,
                color: '#141414'
            },
            subTitle: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#141414'
            },
            subTitleDesc: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                color: '#5B5B5B'
            },
            tabButtonsBlock: {
                marginTop: 12
            },
            tabButtonActive: {
                width: 160,
                height: 30,
                backgroundColor: '#FFCF87',
                borderRadius: 4,
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                textTransform: 'none',
                '&:hover, &:active': {
                    backgroundColor: '#FFCF87',
                    opacity: 0.8,
                }
            },
            tabButton: {
                width: 140,
                height: 30,
                backgroundColor: '#E8E8E8',
                borderRadius: 4,
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                textTransform: 'none'
            },
            noteBlock: {
                background: 'white',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
                borderRadius: 4,
                padding: '4px 8px 4px 8px',
                marginTop: 10
            },
            noteIcons: {
                fontSize: 11,
                color: '#B9B9B9',
                marginRight: 5
            },
            note: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B'
            },
            noteShow: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B',
                textAlign: 'center',
                margin: '10px auto 10px auto'
            },
            noteBold: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 10,
                color: 'black'
            },
            noteDetailBlock: {
                background: 'white',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
                borderRadius: 4,
                padding: '10px 20px 0px 20px',
                marginTop: 10
            },
            noteDetail: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B',
                marginTop: 10
            },
            tableBlock: {
                padding: 0,
                backgroundColor: 'white',
                border: '1px solid #E8E8E8',
                borderRadius: '4px',
                marginTop: 16
            },
            tableBlockLeft: {
                padding: 16,
                textAlign: 'center',
                borderBottom: '1px solid E8E8E8'
            },
            tableBlockLeftTitle: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 12,
                color: '#141414'
            },
            tableBlockLeftDesc: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B'
            },
            tableBlockLeftCommision: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 36,
                color: '#FFCF87'
            },
            tableBlockLeftCommisionText: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#898989'
            },
            tableMoth: {
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 10,
                color: '#898989',
            },
            tableTotalPrice: {
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 10,
                color: 'black'
            },
            tableTd: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: 'black'
            },
            tableProductName: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B',
            },
            tableProductPrice: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#B9B9B9',
            },
            tableCell: {
                minWidth: 95,
                textAlign: 'center'
            },
            table: {
                overflowX: 'auto'
            },
            img: {
                width: 165,
                height: 242,
                marginTop: 25
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            mainRoot: {
                background: '#FAFAFA'
            },
            ...rootSmXl,
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 40,
                color: '#141414'
            },
            subTitle: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 28,
                color: '#141414'
            },
            subTitleDesc: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 18,
                color: '#5B5B5B'
            },
            tabButtonsBlock: {
                marginTop: 20
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
            noteBlock: {
                background: 'white',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
                borderRadius: 4,
                padding: '4px 16px 4px 16px',
                lineHeight: '42px',
                marginTop: 10
            },
            noteIcons: {
                fontSize: 20,
                color: '#B9B9B9',
                verticalAlign: 'middle',
                marginRight: 10
            },
            note: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                color: '#5B5B5B'
            },
            noteShow: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                color: '#5B5B5B',
                verticalAlign: 'middle',
                textAlign: 'right'
            },
            noteBold: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 16,
                color: 'black'
            },
            noteDetailBlock: {
                background: 'white',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
                borderRadius: 4,
                padding: '20px 47px 0px 47px',
                marginTop: 10
            },
            noteDetail: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14,
                color: '#5B5B5B',
                marginTop: 10
            },
            tableBlock: {
                padding: 0,
                backgroundColor: 'white',
                border: '1px solid #E8E8E8',
                borderRadius: '8px',
                marginTop: 32
            },
            tableBlockLeft: {
                padding: 32,
                borderRight: '1px solid #E8E8E8'
            },
            tableBlockLeftTitle: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 22,
                color: '#141414'
            },
            tableBlockLeftDesc: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                color: '#5B5B5B'
            },
            tableBlockLeftCommision: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 72,
                color: '#FFCF87'
            },
            tableBlockLeftCommisionText: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                color: '#898989'
            },
            tableMoth: {
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 12,
                color: '#898989',
            },
            tableTotalPrice: {
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 14,
                color: 'black'
            },
            tableTd: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                color: 'black'
            },
            tableProductName: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                color: '#5B5B5B',
            },
            tableProductPrice: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                color: '#B9B9B9',
            },
            tableCell: {
                minWidth: 110,
                textAlign: 'center'
            },
            table: {
                overflowX: 'auto',
                '&::-webkit-scrollbar': {
                    height: 8
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#A6A6A6'
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#E4E4E4'
                }
            },
            img: {
                width: 205,
                height: 300,
                marginTop: 20
            }
        }
    })
)

interface InstallmentModel {
    img: string;
    name: string;
    price: number;
    installment: number;
    beginMonth: number;
}

const monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const GoodAnyTimeWhere = () => {

    const classes = useStyles({});

    const [isShowNote, setShowNote] = React.useState(false);

    const toggleNote = (val: boolean) => {

        setShowNote(val);

        ReactGA.event({
            category: 'BccCard',
            action: 'to_uncover'
        });
    }

    const items: InstallmentModel[] = [
        { img: 'installment_dubai.svg', name: 'Тур в Дубай', price: 180000, installment: 12, beginMonth: 1 },
        { img: 'installment_smartphone.svg', name: 'Смартфон', price: 240000, installment: 6, beginMonth: 2 },
        { img: 'installment_ring.svg', name: 'Кольца', price: 60000, installment: 3, beginMonth: 3 },
    ];

    const totalMothSum = (index: number) => {
        let result = 0;
        items.forEach(val => {
            result += (val.beginMonth - 1) < index && index < (val.beginMonth + val.installment) ? val.price / val.installment : 0;
        });
        return result;
    }

    return (
        <Grid className={classes.mainRoot}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.title}>Хороша всегда и везде</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.tabButtonsBlock}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button className={classes.tabButtonActive}>по любимым категориям</Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.tabButton}>по всем категориям</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.tabButtonsBlock}>
                    <Typography className={classes.subTitle}>Умная рассрочка до 12 месяцев</Typography>
                    <Typography className={classes.subTitleDesc}>Управление в BCC.KZ 24/7</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.tableBlock}>
                    <Grid container>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12} className={classes.tableBlockLeft}>
                            <Typography className={classes.tableBlockLeftTitle}>В сети партнеров Банка</Typography>
                            <Typography className={classes.tableBlockLeftDesc}>3, 6, или 12 месяцев</Typography>
                            <Typography><span className={classes.tableBlockLeftCommision}>0%</span>&nbsp;&nbsp;
                                        <span className={classes.tableBlockLeftCommisionText}>комиссия</span>
                            </Typography>
                        </Grid>
                        <Grid item xl={8} lg={8} md={8} sm={12} xs={12} className={classes.table}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        {monthArr.map((m, i) =>
                                            <TableCell key={i} className={classes.tableCell}>
                                                <Typography className={classes.tableMoth}>{m}</Typography>
                                                <Typography className={classes.tableTotalPrice}>
                                                    <NumberFormat
                                                        value={totalMothSum(i)}
                                                        thousandSeparator={" "}
                                                        displayType="text" /> ₸
                                                </Typography>
                                            </TableCell>
                                        )}
                                    </TableRow>
                                    {items.map((val, i) =>
                                        <TableRow key={i} style={i % 2 === 0 ? { backgroundColor: '#FAFAFA' } : {}}>
                                            {monthArr.map((m, index) =>
                                                <TableCell key={index} className={classes.tableCell}>
                                                    {
                                                        (val.beginMonth - 1) <= index &&
                                                        (
                                                            (val.beginMonth - 1) < index
                                                                ?
                                                                (index < val.beginMonth + val.installment &&
                                                                    <Typography className={classes.tableTd}>
                                                                        <NumberFormat
                                                                            value={val.price / val.installment}
                                                                            thousandSeparator={" "}
                                                                            displayType="text" /> ₸
                                                            </Typography>
                                                                )
                                                                :
                                                                <Grid container>
                                                                    <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                                                                        <img src={val.img} alt={val.name} />
                                                                    </Grid>
                                                                    <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                                                        <Typography className={classes.tableProductName}>{val.name}</Typography>
                                                                        <Typography className={classes.tableProductPrice}>
                                                                            <NumberFormat
                                                                                value={val.price}
                                                                                thousandSeparator={" "}
                                                                                displayType="text" /> ₸
                                                                </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                        )
                                                    }
                                                </TableCell>
                                            )}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} onClick={() => toggleNote(!isShowNote)}>
                            <Grid container className={classes.noteBlock}>
                                <Grid item xl={9} lg={9} md={9} sm={9} xs={12}>
                                    <Grid container direction="row">
                                        <Grid item sm={false} xs={false}>
                                            <EmojiObjects className={classes.noteIcons} />
                                            <span className={classes.noteBold}>Подсказка:</span>&nbsp;&nbsp;
                                        </Grid>
                                        <Grid item sm={true} xs={true}>
                                            <span className={classes.note}>Активируйте режим рассрочки в BCC.KZ и оплачивайте покупки по частям</span>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={3} xs={12} className={classes.note}>
                                    {isShowNote
                                        ?
                                        <div className={classes.noteShow}>Скрыть <ArrowDropUp className={classes.noteIcons} /></div>
                                        :
                                        <div className={classes.noteShow}>Расскрыть <ArrowDropDown className={classes.noteIcons} /></div>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                        {isShowNote &&
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.noteDetailBlock}>
                                <Grid container>
                                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                                        <Typography className={classes.noteBold}>Режим рассрочки</Typography>
                                        <Typography className={classes.noteDetail}>1. Выберите #картукарту из списка ваших доступных счетов.</Typography>
                                        <Typography className={classes.noteDetail}>2. Нажмите на кнопку “Рассрочка”. В обычном состоянии режим рассрочки выключен, что и показывает статус “Off”.</Typography>
                                        <Typography className={classes.noteDetail}>3. Включите режим рассрочки, сдвинув ползунок направо.</Typography>
                                        <Typography className={classes.noteDetail}>4. С включенным режимом рассрочки все ваши покупки по #картекарте будут делиться на равные части без комиссий в сети партнеров.</Typography>
                                    </Grid>
                                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                                        <Grid container justify="center">
                                            <img className={classes.img} src="star_mobile_banking.gif" alt="star_mobile_banking" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        }
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.noteBlock}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <Error className={classes.noteIcons} />
                                    <span className={classes.note}>Вне сети партнеров Банка под 1% на 3 месяца</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default GoodAnyTimeWhere;