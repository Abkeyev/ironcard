import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import { useTranslation } from "react-i18next";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down("sm")]: {
            root: {
                padding: paddingDownSm,
            },
            fixedRoot: {
                width: "100%",
                cursor: "pointer",
                marginBottom: 16,
                marginRight: 16,
                "& img": {
                    width: "300px",
                },
            },
            mainTitle: {
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "26px",
                color: "#141414",
                marginBottom: 24,
            },
            bannerMain: {
                flexWrap: "nowrap",
                overflowX: "auto",
                justifyContent: "space-between",
                width: "100%",
            },
            modalClose: {
                position: "relative",
                width: "100%",
                zIndex: 1000,
            },
            modalMain: {
                zIndex: 1000,
                borderRadius: 8,
                background: "white",
                height: 400,
                position: "relative",
                overflowY: "auto",
                overflowX: "hidden",
            },
            notScroll: {
                overflowY: "hidden",
                overflowX: "hidden",
                height: "100%",
            },
            fixedBtn: {
                position: "absolute",
                margin: "auto",
                right: 30,
                height: 48,
                top: 0,
                width: 48,
                bottom: 0,
            },
            fixedBtnModal: {
                position: "absolute",
                margin: "auto",
                right: 0,
                color: "white",
                zIndex: 1001,
                top: -48,
            },
            fixedModal: {
                display: "none",
                position: "fixed",
                margin: "auto",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 1,
                transition: ".3s",
                "& img": {
                    zIndex: 102,
                    width: "100%",
                },
            },
            fixedImgModal: {
                zIndex: 103,
                opacity: 1,
                "& img:first-child": {
                    display: "none",
                },
            },

            imgPhoneBanner: {
                "& img": {
                    width: "47%",
                    marginRight: 10,
                    borderRadius: 10,
                },
            },
            imgPhoneBanner2: {
                "& img": {
                    width: "50%",
                    borderRadius: 10,
                },
            },
            modalTables: {
                border: "1px solid #dee2e6",
                marginTop: 10,
                "& td": {
                    padding: "16px",
                },
                "& tr:last-child": {
                    borderBottom: "0px solid #dee2e6",
                },
                "& tr": {
                    borderBottom: "1px solid #dee2e6",
                    display: "flex",
                    "& td:nth-child(1)": {
                        width: "70%",
                    },
                    "& td:nth-child(2)": {
                        width: "30%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderLeft: "1px solid #dee2e6",
                    },
                },
            },
            modalTitle: {
                padding: "20px 16px",
                "& h3": {
                    marginTop: 0,
                    fontSize: 20,
                    color: "#141414",
                },
                "& p": {
                    fontSize: 14,
                    margin: "8px 0 16px 0",
                },
                "& h4": {
                    fontSize: 12,
                    margin: "0",
                },
            },
            chooseTitle: {
                marginTop: 24,
                "& span": {
                    display: "block",
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "#141414",
                    paddingLeft: 26,
                    lineHeight: "24px",
                    position: "relative",
                    marginBottom: 4,
                    "&:before": {
                        content: "' '",
                        position: "absolute",
                        margin: "auto",
                        top: 10,
                        left: 8,
                        width: 4,
                        background: "#FF6056",
                        height: 4,
                        borderRadius: "50%",
                    },
                },
            },
            open: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
                transition: ".3s",
                padding: "0 10px",
            },
            drpBack: {
                width: "100%",
                height: "100%",
                background: "#00000099",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 100,
                cursor: "pointer",
            },
            closed: {
                display: "none",
            },
        },
        [theme.breakpoints.between("sm", "xl")]: {
            ...rootSmXl,
            mainRoot: {
                margin: '0 auto',
                position: 'relative',
                maxWidth: 1280
            },
            fixedRoot: {
                width: "32%",
                cursor: "pointer",
                marginRight: 16,
                "& img": {
                    width: "340px",
                },
            },
            mainTitle: {
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "40px",
                color: "#141414",
                marginBottom: 24,
            },
            bannerMain: {
                overflowX: "auto",
                justifyContent: "space-between",
                flexWrap: "nowrap",
            },
            modalClose: {
                position: "relative",
                width: "55%",
                padding: "48px 0px",
                background: "white",
                zIndex: 1000,
                borderRadius: 8,
            },
            modalMain: {
                zIndex: 1000,
                background: "white",
                height: 450,
                position: "relative",
                padding: "20px 40px",
                overflowY: "auto",
                overflowX: "hidden",
            },
            notScroll: {
                overflowY: "hidden",
                overflowX: "hidden",
                height: "100%",
            },
            fixedBtn: {
                position: "absolute",
                margin: "auto",
                right: 30,
                height: 48,
                top: 0,
                width: 48,
                bottom: 0,
            },
            fixedBtnModal: {
                position: "absolute",
                margin: "auto",
                right: 0,
                zIndex: 1001,
                top: 0,
            },
            fixedModal: {
                display: "none",
                position: "fixed",
                margin: "auto",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 1,
                transition: ".3s",
                "& img": {
                    zIndex: 102,
                    width: "100%",
                },
            },
            fixedImgModal: {
                zIndex: 103,
                opacity: 1,
                "& img:last-child": {
                    display: "none",
                },
            },
            modalTitle: {
                "& h3": {
                    marginTop: 0,
                    fontSize: 24,
                    color: "#141414",
                },
                "& p": {
                    margin: "8px 0 16px 0",
                },
                "& h4": {
                    fontSize: 14,
                    margin: "0",
                },
            },
            imgPhoneBanner: {
                "& img": {
                    width: "23%",
                    marginRight: 10,
                    borderRadius: 10,
                },
            },
            imgPhoneBanner2: {
                "& img": {
                    width: "30%",
                    borderRadius: 10,
                },
            },
            modalTables: {
                border: "1px solid #dee2e6",
                marginTop: 10,
                "& td": {
                    padding: ".75rem",
                },
                "& tr:last-child": {
                    borderBottom: "0px solid #dee2e6",
                },
                "& tr": {
                    borderBottom: "1px solid #dee2e6",
                    display: "flex",
                    "& td:nth-child(1)": {
                        width: "70%",
                    },
                    "& td:nth-child(2)": {
                        width: "30%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderLeft: "1px solid #dee2e6",
                    },
                },
            },
            chooseTitle: {
                marginTop: 24,
                "& span": {
                    display: "block",
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "#141414",
                    paddingLeft: 26,
                    lineHeight: "24px",
                    position: "relative",
                    marginBottom: 4,
                    "&:before": {
                        content: "' '",
                        position: "absolute",
                        margin: "auto",
                        top: 0,
                        bottom: 0,
                        left: 8,
                        width: 4,
                        background: "#FF6056",
                        height: 4,
                        borderRadius: "50%",
                    },
                },
            },
            open: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 100,
                transition: ".3s",
            },
            drpBack: {
                width: "100%",
                height: "100%",
                background: "#00000099",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 100,
                cursor: "pointer",
            },
            closed: {
                display: "none",
            },
        },
    })
);

const Banners = () => {
    const classes = useStyles({});
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    return (
        <Grid className={classes.mainRoot}>
            <Grid container className={classes.root}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.mainTitle}>
                        {t("banners.mainTitle")}
                    </Typography>
                </Grid>
                <Grid container className={classes.bannerMain}>
                    <Grid className={classes.fixedRoot}>
                        <img
                            src={t("banners.banner-1")}
                            onClick={() => {
                                setOpen(true);
                            }}
                        />
                    </Grid>

                    <Grid className={classes.fixedRoot}>
                        <img
                            src={t("banners_01.banner-1")}
                            onClick={() => {
                                setOpen2(true);
                            }}
                        />
                    </Grid>

                    <Grid className={classes.fixedRoot}>
                        <img
                            src={t("banners_02.banner-1")}
                            onClick={() => {
                                setOpen3(true);
                            }}
                        />
                    </Grid>



                    <Grid className={`${classes.fixedModal} ${open ? classes.open : ""}`}>
                        <Grid className={classes.modalClose}>
                            <span className={classes.fixedBtnModal} onClick={() => setOpen(false)}>
                                <CloseIcon />
                            </span>
                            <Grid className={`${classes.modalMain} ${classes.notScroll}`}>
                                <Grid className={classes.modalTitle}>
                                    <h3 style={{ marginBottom: 10 }}>
                                        {t("banners.text_0")}
                                    </h3>
                                    <p>
                                        {t("banners.text_00")}
                                    </p>
                                    <p style={{ textDecoration: "underline" }}>
                                        {t("banners.text_01")}
                                    </p>
                                    <p>{t("banners.text_02")}</p>
                                    <p>{t("banners.text_03")}</p>
                                    <p>{t("banners.text_04")}</p>

                                    <p>{t("banners.text_06")}</p>
                                </Grid>
                            </Grid>
                        </Grid>

                        <div className={classes.drpBack} onClick={() => setOpen(false)}></div>
                    </Grid>

                    <Grid className={`${classes.fixedModal} ${open2 ? classes.open : ""}`}>
                        <Grid className={classes.modalClose}>
                            <span className={classes.fixedBtnModal} onClick={() => setOpen2(false)}>
                                <CloseIcon />
                            </span>
                            <Grid className={classes.modalMain}>
                                <Grid className={classes.modalTitle}>
                                    <h3>{t("banners_01.text_0")}</h3>
                                    <p style={{ marginBottom: "5px" }}>{t("banners_01.text_01")}</p>
                                    <p style={{ marginBottom: "5px" }}>
                                        {t("banners_01.text_02")}
                                    </p>
                                    <p style={{ marginBottom: "5px" }}>
                                        {t("banners_01.text_03")}
                                    </p>
                                    <p style={{ marginBottom: "5px" }}>
                                        {t("banners_01.text_04")}
                                    </p>
                                </Grid>
                            </Grid>
                        </Grid>

                        <div
                            className={classes.drpBack}
                            onClick={() => setOpen2(false)}
                        ></div>
                    </Grid>

                    <Grid className={`${classes.fixedModal} ${open3 ? classes.open : ""}`}>
                        <Grid className={classes.modalClose}>
                            <span className={classes.fixedBtnModal} onClick={() => setOpen3(false)}>
                                <CloseIcon />
                            </span>
                            <Grid className={classes.modalMain}>
                                <Grid className={classes.modalTitle}>
                                    <h3 style={{ marginBottom: 10 }}>
                                        {t("banners_02.text_0")}
                                    </h3>
                                    <p>
                                        {t("banners_02.text_00")}
                                    </p>
                                    <p style={{ textDecoration: "underline" }}>
                                        {t("banners_02.text_01")}
                                    </p>
                                    <p>{t("banners_02.text_02")}</p>
                                    <p>{t("banners_02.text_03")}</p>
                                    <p>{t("banners_02.text_04")}</p>
                                    <p>{t("banners_02.text_05")}</p>
                                    <p>{t("banners_02.text_06")}</p>

                                    <p style={{ fontWeight: "bold" }}>{t("banners_02.text_07")}</p>
                                </Grid>
                            </Grid>
                        </Grid>

                        <div
                            className={classes.drpBack}
                            onClick={() => setOpen3(false)}
                        ></div>
                    </Grid>



                </Grid>
            </Grid>
        </Grid>
    );
};

export default Banners;
