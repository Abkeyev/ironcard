import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Tab from "./Tab";
import { paddingDownSm } from "../helper/DefaultStyle";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStylesTarifs = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "black"
      },
      TableW: {
        widthh: "100%"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
        "& span": {
          fontSize: 14,
          color: "#5B5B5B"
        }
      },
      TableW: {
        widthh: "70%"
      }
    }
  })
);

const Tarifs = () => {
  const classes = useStylesTarifs({});
  const { t } = useTranslation();

  const rows = [
    {
      code: `${t("block_8.title_1_tab_1")}`,
      value: `${t("block_8.subtitle_1_tab_1")}`
    },
    {
      code: `${t("block_8.title_2_tab_1")}`,
      value: `${t("block_8.subtitle_2_tab_1")}`
    },
    {
      code: `${t("block_8.title_3_tab_1")}`,
      value: `${t("block_8.subtitle_3_tab_1")}`
    },
    {
      code: `${t("block_8.title_4_tab_1")}`,
      value: `${t("block_8.subtitle_4_tab_1")}`
    },
    {
      code: `${t("block_8.title_5_tab_1")}`,
      value: `${t("block_8.subtitle_5_tab_1")}`
    },
    {
      code: `${t("block_8.title_6_tab_1")}`,
      value: `${t("block_8.subtitle_6_tab_1")}`
    },
    {
      code: `${t("block_8.title_7_tab_1")}`,
      value: `${t("block_8.subtitle_7_tab_1")}`
    },
    {
      code: `${t("block_8.title_8_tab_1")}`,
      value: `${t("block_8.subtitle_8_tab_1")}`
    },
    {
      code: `${t("block_8.title_9_tab_1")}`,
      value: `${t("block_8.subtitle_9_tab_1")}`
    },
    {
      code: `${t("block_8.title_10_tab_1")}`,
      value: `${t("block_8.subtitle_10_tab_1")}`
    },
    {
      code: `${t("block_8.title_11_tab_1")}`,
      value: `${t("block_8.subtitle_11_tab_1")}`
    }
  ];

  return (
    <Box className={classes.TableW}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>
                <div dangerouslySetInnerHTML={{ __html: m.code }} />
              </TableCell>
              <TableCell className={classes.td}>
                <div dangerouslySetInnerHTML={{ __html: m.value }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const Conditions = () => {
  const classes = useStylesTarifs({});
  const { t } = useTranslation();

  const rows = [
    {
      code: `${t("block_8.title_12_tab_1")}`,
      value: `${t("block_8.subtitle_12_tab_1")}`
    },
    {
      code: `${t("block_8.title_13_tab_1")}`,
      value: `${t("block_8.subtitle_10_tab_1")}`
    },
    {
      code: `${t("block_8.title_14_tab_1")}`,
      value: `${t("block_8.subtitle_10_tab_1")}`
    },
    {
      code: `${t("block_8.title_15_tab_1")}`,
      value: `${t("block_8.subtitle_13_tab_1")}`
    },
    { code: `${t("block_8.title_16_tab_1")}`, value: "25%" },
    { code: `${t("block_8.title_17_tab_1")}`, value: "25%" },
    { code: `${t("block_8.title_18_tab_1")}`, value: "4%" },
    { code: `${t("block_8.title_19_tab_1")}`, value: "4%" }
  ];

  return (
    <Box className={classes.TableW}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>{m.code}</TableCell>
              <TableCell className={classes.td}>{m.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        padding: "60px 42px 52px 52px",
        width: "100%"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      }
    },
    root: {
      maxWidth: 1280,
      margin: "0 auto",
      position: "relative"
    }
  })
);

const AdditionalInfo = () => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const swipeTab = (index: number) => {
    const actionName =
      index === 0 ? "Iron_Additionally_Rates" : "Iron_Additionally_Conditions";

    ReactGA.event({
      category: `BccIronCard_${actionName}`,
      action: actionName
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>
          {t("block_8.title_main")}
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Tab
          onHandleChanged={(i: number) => swipeTab(i)}
          menuTitle={[`${t("block_8.button_2_tab_2")}`]}
          pans={[<Tarifs />]}
        />
      </Grid>
    </Grid>
  );
};

export default AdditionalInfo;
