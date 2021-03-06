import React, { useEffect } from "react";
import { Grid, Typography, MenuItem } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import MaskedInput from "react-maskedinput";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactGA from "react-ga";
import api from "../api/Api";
import { BccInputText } from "./CustomComponents";
import axios from "axios";
import ym from "react-yandex-metrika";
import { useTranslation } from "react-i18next";
import spacetime from "spacetime";
import moment from "moment";

var momentTz = require("moment-timezone");

interface Branch {
  code: string;
  address: string;
}

const jsSHA = require("jssha");
const CityList = require("../city_list.json");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("md")]: {
      root: {
        marginTop: "34px",
        padding: "27px 19px 52px 52px",
        alignItems: "center",
      },
      paper: {
        padding: "64px 72px",
        background: "#FFFFFF",
        border: "1px solid #E8e8e8",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "100%",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "40px",
        marginBottom: 20,
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
      },
      submit: {
        background: "#27AE60",
        borderRadius: "8px",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        fontStyle: "normal",
        textTransform: "none",
        color: "white",
        letterSpacing: "0",
        boxShadow: "0px 6px 25px rgba(39, 174, 96, 0.24)",
        height: "62px",
        "&:hover, &:active": {
          backgroundColor: "#7DCEA0",
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: "#7DCEA0",
          color: "white",
          opacity: 0.8,
        },
      },
      timerBox: {
        padding: "24px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        borderRadius: 8,
        margin: "32px 0 42px",
        "& > h1": {
          margin: "0 0 17px",
          fontWeight: "normal",
          padding: 0,
          fontSize: 16,
          lineHeight: "24px",
        },
        "& > span": {
          fontWeight: "bold",
          fontSize: 48,
          lineHeight: "56px",
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        marginTop: "34px",
        padding: "27px 19px 52px 52px",
        alignItems: "center",
      },
      paper: {
        padding: "64px 72px",
        background: "#FFFFFF",
        border: "1px solid #E8e8e8",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "60%",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "40px",
        marginBottom: 20,
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
      },
      submit: {
        background: "#27AE60",
        borderRadius: "8px",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        fontStyle: "normal",
        textTransform: "none",
        color: "white",
        letterSpacing: "0",
        boxShadow: "0px 6px 25px rgba(39, 174, 96, 0.24)",
        height: "62px",
        "&:hover, &:active": {
          backgroundColor: "#7DCEA0",
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: "#7DCEA0",
          color: "white",
          opacity: 0.8,
        },
      },
      timerBox: {
        padding: "24px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        borderRadius: 8,
        margin: "32px 0 42px",
        "& > h1": {
          margin: "0 0 17px",
          fontWeight: "normal",
          padding: 0,
          fontSize: 16,
          lineHeight: "24px",
        },
        "& > span": {
          fontWeight: "bold",
          fontSize: 48,
          lineHeight: "56px",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      root: {
        marginTop: "34px",
        padding: "24px 12px",
        width: "100%",
      },
      box: {
        fontSize: "24px",
        lineHeight: "40px",
        marginBottom: 20,
      },
      timerBox: {
        padding: "24px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        borderRadius: 8,
        margin: "32px 0 42px",
        "& > h1": {
          margin: "0 0 17px",
          fontWeight: "normal",
          padding: 0,
          fontSize: 16,
          lineHeight: "24px",
        },
        "& > span": {
          fontWeight: "bold",
          fontSize: 36,
          lineHeight: "56px",
        },
      },
      paper: {
        padding: "36px 24px",
      },
    },
    root: {
      maxWidth: 1280,
      margin: "0 auto",
      position: "relative",
    },
    checkBoxLabel: {
      "& > a": {
        color: "#27AE60",
        "&:hover": {
          color: "#7DCEA0",
        },
      },
    },
    progressBarSuccess: {
      background: "#27AE60",
      borderRadius: 5,
      display: "block",
      margin: "12px 0 32px",
      height: 36,
      lineHeight: "36px",
      textAlign: "center",
      position: "relative",
      fontSize: 16,
      "& > span": {
        zIndex: 5,
        color: "white",
        fontWeight: "bold",
        position: "relative",
      },
    },
    progressBarInnerSuccess: {
      position: "absolute",
      transition: "width .5s ease-out",
      top: 0,
      height: 36,
      borderRadius: 5,
      bottom: 0,
      zIndex: 4,
    },
    successForm: {
      padding: "30px",
      borderRadius: 8,
      backgroundColor: "rgba(125, 206, 160, 0.2)",
      textAlign: "center",
      "& > img": {
        display: "block",
        margin: "0 auto",
        marginBottom: 23,
      },
      "& > span": {
        display: "block",
        fontSize: 16,
        fontWeight: "bold",
        color: "#1F7042",
      },
    },
    progressBar: {
      background: "#E0E0E0",
      borderRadius: 5,
      display: "block",
      margin: "12px 0 32px",
      height: 36,
      lineHeight: "36px",
      textAlign: "center",
      position: "relative",
      fontSize: 16,
      "& > span": {
        zIndex: 5,
        fontWeight: "bold",
        position: "relative",
      },
    },
    progressBarInner: {
      position: "absolute",
      transition: "width .5s ease-out",
      top: 0,
      height: 36,
      borderRadius: 5,
      bottom: 0,
      background: "url('progress.svg') #27AE60",
      zIndex: 4,
    },
    consult: {
      height: 62,
      color: "#27AE60",
      border: "1px solid #27AE60",
      borderRadius: 8,
      width: "100%",
      fontSize: 14,
      "&:hover, &:active": {
        backgroundColor: "#27AE60",
        color: "white",
      },
    },
    timerSMS: {
      lineHeight: "62px",
      color: "#5B5B5B",
      fontSize: 14,
    },
    sendSMSAgain: {
      color: "#27AE60",
      fontSize: 16,
      lineHeight: "62px",
      height: 62,
      padding: 0,
      border: "none",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#2eca70",
      },
    },
    chip: {
      backgroundColor: "rgba(125, 206, 160, 0.2)",
      color: "#1F7042",
      marginRight: 16,
      marginBottom: 8,
      display: "inline-block",
      borderRadius: 16,
      padding: "6px 32px",
      cursor: "pointer",
    },
    activeChip: {
      backgroundColor: "#27AE60",
      color: "white",
      marginRight: 16,
      display: "inline-block",
      borderRadius: 16,
      padding: "6px 32px",
      cursor: "pointer",
    },
    hintText: {
      fontSize: 12,
      color: "#898989",
      lineHeight: "16px",
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const TextMaskCustom = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask="1(111) 111 11 11"
      placeholder={"7(707) 707 77 77"}
    />
  );
};

const CardOrder = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();

  const theme = useTheme();

  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const stepText = [
    `${t("block_6.subtitle_desc_20")}`,
    `${t("block_6.subtitle_desc_21")}`,
    `${t("block_6.subtitle_desc_22")}`,
    `${t("block_6.subtitle_desc_23")}`,
    `${t("block_6.subtitle_desc_24")}`,
  ];
  const buttonText = [
    `${t("block_6.subtitle_desc_25")}`,
    `${t("block_6.subtitle_desc_26")}`,
    `${t("block_6.subtitle_desc_27")}`,
    `${t("block_6.subtitle_desc_28")}`,
    `${t("block_6.subtitle_desc_29")}`,
  ];
  const emailPrefix = [
    { label: "gmail.com", value: "@gmail.com" },
    { label: "mail.ru", value: "@mail.ru" },
    { label: "yandex.ru", value: "@yandex.ru" },
  ];

  const [name, setName] = React.useState("");
  const [src, setSrc] = React.useState("");
  const [selectedEmail, setSelectEmail] = React.useState();
  const [phone, setPhone] = React.useState("");
  const [iin, setIin] = React.useState("");
  const [code, setCode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [branchName, setBranchName] = React.useState("");
  const [branchList, setBranchList] = React.useState<Branch[]>([]);
  const [checkbox, setCheckbox] = React.useState(true);
  const [flag, setFlag] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [cardName, setCardName] = React.useState("");
  const [timer, setTimer] = React.useState(5);

  useEffect(() => {
    if (step === 1) {
      const tim = setTimeout(() => {
        timer > 0 ? setTimer(timer - 1) : clearTimeout(tim);
      }, 1000);
    }
  });

  const handleIinChange = (iin: string) => {
    iin.length <= 12 && setIin(iin);
  };

  const handleNameChange = (name: string) => {
    setName(name);
    // setCardName(rus_to_latin(name));
  };

  const handleSelectEmailChange = (index: number, emailValue: string) => {
    setSelectEmail(index);
    let e =
      email.indexOf("@") !== -1
        ? email.substring(email.indexOf("@"), -1)
        : email;
    setEmail(e + emailValue);
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  function uuid() {
    return "xxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString();
    });
  }

  function uuidNonce() {
    return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16).substr(0, 32);
    });
  }

  function XOR_hex(a: string, b: string) {
    var res = "",
      l = Math.max(a.length, b.length);
    for (var i = 0; i < l; i += 4)
      res =
        (
          "000" +
          (
            parseInt(a.slice(-i - 4, -i || a.length), 16) ^
            parseInt(b.slice(-i - 4, -i || b.length), 16)
          ).toString(16)
        ).slice(-4) + res;
    return res;
  }

  // const localGMT = () => {
  //   const date = new Date();
  //   return (-1 * date.getTimezoneOffset()) / 60;
  // };

  const generateUrl = () => {
    // const hex1 = "690B5589573ACB3608DB7395A319B175";
    // const hex2 = "02BBF98BB3411445D15498E2DC22E3E1";
    // const xor = XOR_hex(hex1, hex2);
    const xor = "4ee6d5f37a804cd5bc980f369ca1851d";
    const order = uuid();
    const nonce = uuidNonce();
    let desc = encodeURIComponent(
      `${phone.replace(/\+|\(|\)| /g, "")}-${iin}-${city}`
    ).substring(0, 80);
    const merchant = "ironcardpromo";
    const terminal = "90030556";
    // const terminal = "88888881";
    const nameOnCard = cardName.replace(/ /g, "-");

    let datetime = new Date().toLocaleString("ru-RU", {
      timeZone: "Asia/Almaty",
    });
    let date = datetime.substr(0, 10);
    let time = datetime.substr(12, 8);

    const timestamp = momentTz(
      date
        .split(".")
        .reverse()
        .join("-") +
        " " +
        time
    )
      .add(-6, "hours")
      .format("YYYYMMDDHHmmss");

    const backref = "https://www.bcc.kz";
    const value = `5300003398${order.length}${order}${desc.length}${desc}${merchant.length}${merchant}${terminal.length}${terminal}16${timestamp.length}${timestamp}11${nonce.length}${nonce}`;
    var shaObj = new jsSHA("SHA-1", "TEXT");
    shaObj.setHMACKey(xor, "HEX");
    shaObj.update(value);
    const pSign = shaObj.getHMAC("HEX").toUpperCase();
    let url = `https://3dsecure.bcc.kz:5443/cgi-bin/cgi_link/?AMOUNT=30000&CURRENCY=398&ORDER=${order}&DESC=${desc}&NAME=${nameOnCard}&MERCHANT=${merchant}&TERMINAL=${terminal}&MERCH_GMT=6&TIMESTAMP=${timestamp}&TRTYPE=1&NONCE=${nonce}&P_SIGN=${pSign}&LANG=RU&BACKREF=${backref}`;
    // let url = `https://test3ds.bcc.kz:5445/cgi-bin/cgi_link/?AMOUNT=15000&CURRENCY=398&ORDER=${uid}&DESC=${desc}&NAME=${nameOnCard}&MERCHANT=${merchant}&TERMINAL=${terminal}&MERCH_GMT=6&TIMESTAMP=${timestamp}&TRTYPE=1&NONCE=${uid}&P_SIGN=${pSign}&LANG=RU&BACKREF=${backref}`
    window.location.replace(url);
    setSrc(url);
  };

  const handleCityChange = (city: string) => {
    setCity(city);
  };

  const handlePhoneChange = (phone: string) => {
    setPhone(phone);
  };

  const handleCodeChange = (code: string) => {
    setCode(code);
  };

  const handleCardNameChange = (cardName: string) => {
    cardName = cardName.replace(/[^A-Za-z ]/gi, "").toUpperCase();
    setCardName(cardName);
  };

  const handleCheckboxChange = () => {
    setCheckbox(!checkbox);
  };

  const handleStepChange = (step: number, flag: boolean = false) => {
    if (step === 0 && flag) {
      setFlag(flag);
      setStep(3);
    } else if (step === 3 && flag) {
      setStep(4);
      setFlag(false);
    } else if (step === 4) {
      setStep(1);
    } else if (step === 1) generateUrl();
    else {
      step++;
      setStep(step);
    }
  };

  const BccCheckbox = withStyles({
    root: {
      color: "#D8D8D8",
      "&$checked": {
        color: "#27AE60",
      },
    },
    checked: {},
  })((props: any) => <Checkbox {...props} />);

  function getUrlParameter(name: string) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    ReactGA.event({
      category: "BccIronCard_Preorder_successful",
      action: "Preorder_successful",
    });

    ym("reachGoal", "get_consult");

    if (name && phone) {
      const formData = new FormData();

      formData.append("TELEPHONE", phone);
      formData.append("NAME", name);
      formData.append("SYSTEM_TITLE", "#IronCard");
      formData.append("SYSTEM_POST_EVENT", "NEW_USER");
      formData.append("SYSTEM_LINK", "https://www.bcc.kz/ironcard");
      formData.append("SYSTEM_IBLOCK_ID", "140");
      formData.append("SYSTEM_NAME_ELEMENT", "NAME");
      formData.append("SYSTEM_STATUS", "2877182");
      formData.append("SYSTEM_LID", "S1");
      formData.append("BCC_KEY", "1v5df35v");
      formData.append("utm_source", getUrlParameter("utm_source"));
      formData.append("utm_medium", getUrlParameter("utm_medium"));
      formData.append("utm_campaign", getUrlParameter("utm_campaign"));
      formData.append("utm_term", getUrlParameter("utm_term"));
      formData.append("utm_content", getUrlParameter("utm_content"));

      const response = fetch(
        `https://www.bcc.kz/local/tmpl/ajax/iblock_save.php`,
        {
          method: "POST",
          body: formData,
        }
      );
      api.card
        .order({ fio: name, phoneNumber: phone })
        .then((m: any) => {
          props.send();
          handleNameChange("");
          handlePhoneChange("");
        })
        .catch((e: any) => console.warn(e));
    }
  };

  const nextButton = (flag: boolean) => {
    if (step === 0) {
      ReactGA.event({
        category: "BccIronCard_Go_to_the_payment",
        action: "Go_to_the_payment",
      });
      ym("reachGoal", "get_card");
    } else if (step === 1) {
      ReactGA.event({
        category: "BccIronCard_To_Pay",
        action: "To_Pay",
      });
      ym("reachGoal", "get_topay");
    }
    handleStepChange(step, flag);
  };

  const isValid = () => {
    if (step === 0) {
      return (
        checkbox && name.length > 1 && phone.replace("_", "").length === 16
      );
    } else if (step === 3) {
      return code.length > 1;
    } else if (step === 1) {
      return (
        checkbox &&
        cardName.length > 1 &&
        city.length > 1 &&
        iin.length === 12 &&
        phone.replace("_", "").length === 16
      );
    } else {
      return true;
    }
  };

  const generateForm = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
            <BccInputText
              size={isXS ? "small" : "medium"}
              variant="outlined"
              margin="normal"
              fullWidth
              name="name"
              value={name}
              onChange={(e: any) => handleNameChange(e.target.value)}
              label={t("block_6.subtitle_desc_11")}
              id="name"
            />
            <BccInputText
              size={isXS ? "small" : "medium"}
              variant="outlined"
              margin="normal"
              fullWidth
              name="phone"
              value={phone}
              onChange={(e: any) => handlePhoneChange(e.target.value)}
              label={t("block_6.subtitle_desc_12")}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputComponent: TextMaskCustom as any,
              }}
            />
          </>
        );
      case 1:
        return (
          <>
            <BccInputText
              size={isXS ? "small" : "medium"}
              variant="outlined"
              margin="normal"
              fullWidth
              name="name"
              value={name}
              onChange={(e: any) => handleNameChange(e.target.value)}
              label={t("block_6.subtitle_desc_11")}
              id="name"
            />
            <BccInputText
              size={isXS ? "small" : "medium"}
              variant="outlined"
              margin="normal"
              fullWidth
              style={{ marginBottom: 0 }}
              name="cardName"
              value={cardName}
              onChange={(e: any) => handleCardNameChange(e.target.value)}
              label={t("block_6.subtitle_desc_13")}
              id="cardName"
            />
            <span className={classes.hintText}>
              Укажите точно так же, как и у вас в удостоверении личности на
              обратной стороне
            </span>
            <BccInputText
              size={isXS ? "small" : "medium"}
              variant="outlined"
              margin="normal"
              fullWidth
              name="iin"
              value={iin}
              onChange={(e: any) => handleIinChange(e.target.value)}
              label={t("block_6.subtitle_desc_14")}
              type="number"
              id="iin"
            />
            <Grid container spacing={2}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <BccInputText
                  fullWidth={true}
                  label={t("block_6.subtitle_desc_15")}
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e: any) => handleCityChange(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  select
                >
                  {CityList.map((c: any) => {
                    return (
                      <MenuItem key={c.code} value={c.code}>
                        {c.value}
                      </MenuItem>
                    );
                  })}
                </BccInputText>
              </Grid>
              {/* <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <BccInputText
                  fullWidth={true}
                  label={t("block_6.subtitle_desc_16")}
                  id="branchName"
                  name="branchName"
                  value={branchName}
                  onChange={(e: any) => handleBranchChange(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  select
                >
                  {branchList.length > 0 ? (
                    branchList.map((b: any) => {
                      return (
                        <MenuItem key={b.code} value={b.code}>
                          {b.address}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem key="000000" value="000000">
                      -
                    </MenuItem>
                  )}
                </BccInputText>
              </Grid> */}
              {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <BccInputText
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="phone"
                  value={phone}
                  onChange={(e: any) => handlePhoneChange(e.target.value)}
                  label={t("block_6.subtitle_desc_17")}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    inputComponent: TextMaskCustom as any
                  }}
                />
              </Grid> */}
              {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <BccInputText
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={(e: any) => handleEmailChange(e.target.value)}
                  label="Email"
                  id="email"
                />
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                {emailPrefix.map((mail, index) => {
                  return (
                    <div
                      key={mail.value}
                      onClick={() => handleSelectEmailChange(index, mail.value)}
                      className={
                        index === selectedEmail
                          ? classes.activeChip
                          : classes.chip
                      }
                    >
                      {mail.label}
                    </div>
                  );
                })}
              </Grid> */}
            </Grid>
          </>
        );
      case 2:
        return <>Загрузка...</>;
      case 3:
        return (
          <>
            <BccInputText
              size={isXS ? "small" : "medium"}
              variant="outlined"
              margin="normal"
              fullWidth
              name="code"
              value={code}
              onChange={(e: any) => handleCodeChange(e.target.value)}
              label={t("block_6.subtitle_desc_18")}
              id="code"
              type="number"
            />
          </>
        );
      case 4:
        return (
          <>
            <BccInputText
              size={isXS ? "small" : "medium"}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled
              name="code"
              value={code}
              onChange={(e: any) => handleCodeChange(e.target.value)}
              label={t("block_6.subtitle_desc_18")}
              id="code"
              type="number"
            />
          </>
        );
      default:
        return <div>nihuya</div>;
    }
  };

  return (
    <Grid
      ref={props.refProp}
      container
      className={classes.root}
      spacing={4}
      id="order"
      direction="column"
      justify="center"
    >
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.box}>
          {t("block_6.title_main")}
        </Typography>
        {window.document.location.search === "?success=true" ? (
          <div className={classes.progress}>
            <div className={classes.progressBarSuccess}>
              <span>{t("block_6.subtitle_desc")}</span>
              <div
                style={{ width: `100%` }}
                className={classes.progressBarInnerSuccess}
              ></div>
            </div>
          </div>
        ) : (
          <div className={classes.progress}>
            <span>
              {step === 3
                ? `${t("block_6.subtitle_desc_2")} ${stepText[step]}`
                : step === 4
                ? `${t("block_6.subtitle_desc_3")} ${stepText[step]}`
                : `${t("block_6.subtitle_desc_1")} ${step + 1}: ${
                    stepText[step]
                  }`}
            </span>
            <div className={classes.progressBar}>
              <span>{step === 3 ? "50" : step === 4 ? "100" : step * 50}%</span>
              <div
                style={{
                  width: `${
                    step === 3 ? "50" : step === 4 ? "100" : step * 50
                  }%`,
                }}
                className={classes.progressBarInner}
              ></div>
            </div>
          </div>
        )}
        {window.document.location.search === "?success=true" ? (
          <div className={classes.successForm}>
            <img src="success.svg" alt="" />
            <span>{t("block_6.subtitle_desc_4")}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} autoComplete="off">
            {generateForm(step)}
            {step === 0 || step === 1 ? (
              <FormControlLabel
                control={
                  <BccCheckbox
                    name="checkbox"
                    defaultChecked={true}
                    checked={checkbox}
                    onChange={() => handleCheckboxChange()}
                  />
                }
                label={
                  <Typography className={classes.checkBoxLabel}>
                    {t("block_6.subtitle_desc_5")}{" "}
                    <a href="agreement.pdf" target="_blank">
                      {t("block_6.subtitle_desc_6")}
                    </a>
                  </Typography>
                }
              />
            ) : (
              ""
            )}
            <Grid container style={{ marginTop: "15px" }} spacing={4}>
              {step !== 2 ? (
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xl={false}
                      lg={false}
                      md={false}
                      sm={false}
                      xs={false}
                    >
                      <img
                        src="card_order_security.svg"
                        className={classes.icon}
                        alt="order_security"
                      />
                    </Grid>
                    <Grid
                      item
                      xl={true}
                      lg={true}
                      md={true}
                      sm={true}
                      xs={true}
                    >
                      <Typography className={classes.garant}>
                        {t("block_6.subtitle_desc_7")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                {step === 0 ? (
                  <Button
                    variant="outlined"
                    className={classes.consult}
                    disabled={!isValid()}
                    type="submit"
                  >
                    {t("block_6.subtitle_desc_8")}
                  </Button>
                ) : step === 3 && timer >= 1 ? (
                  <span className={classes.timerSMS}>
                    {t("block_6.subtitle_desc_9")} ({timer})
                  </span>
                ) : step === 3 && timer < 1 ? (
                  <Button variant="outlined" className={classes.sendSMSAgain}>
                    {t("block_6.subtitle_desc_10")}
                  </Button>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                <Button
                  disabled={!isValid()}
                  type="button"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick={() => nextButton(false)}
                >
                  {buttonText[step]}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Paper>
    </Grid>
  );
};

export default CardOrder;
