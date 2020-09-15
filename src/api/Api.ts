import axios from "axios";
import moment from "moment";

const baseURL = process.env.REACT_APP_SERVER_URL || "";

export class Api {
  card = new CardController();
}

export interface OrderRequest {
  fio?: string;
  phoneNumber?: string;
  city?: string;
}

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getUrlParameter(name: string) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export class CardController {
  order(request: OrderRequest) {
    const config: any = {};
    config.headers = config.headers || {};
    config.headers = {
      "x-ibm-client-id": "c274fb89-0d53-4304-95e9-130b267cd326",
    };
    config.baseURL = baseURL;

    const data = {
      system: "EXTERNALSITE",
      requestId: uuid(),
      responseId: "c274fb89-0d53-4304-95e9-130b267cd326",
      route: "DeltaM",
      object: "ClaimAddRequest",
      timestamp: "1453526556",
      type: "REQUEST",
      attributes: {
        data: {
          type: "SMARTCALL",
          systemId: "c274fb89-0d53-4304-95e9-130b267cd326",
          name: request.fio, //---------------------FIO
          phone: request.phoneNumber, //------------PhoneNumber
          iinBin: null,
          organizationName: null,
          email: null,
          callTime: moment().format("HH:mm"), //--------------CallTime
          date: moment().format("DD-MM-YYYY"),
          requestID: uuid(),
          utm_source: getUrlParameter("utm_source"),
          utm_medium: getUrlParameter("utm_medium"),
          utm_campaign: getUrlParameter("utm_campaign"),
          utm_term: getUrlParameter("utm_term"),
          utm_content: getUrlParameter("utm_content"),
          productService: {
            productName: "металлическая карта",
            productCode: "0.300.1400.10",
            productDescription: "премиальная металлическая карта",
          },
        },
      },
    };

    return axios
      .post(`/protected/callcenter/order`, data, config)
      .then((r) => r.data);
  }
}

export default new Api();
