import axios from "axios";
import { uuid } from "uuidv4";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const access_key = process.env.UPBIT_OPEN_API_ACCESS_KEY;
const secret_key = process.env.UPBIT_OPEN_API_SECRET_KEY;
const server_url = process.env.UPBIT_OPEN_API_URL;

const instance = axios.create({
  baseURL: server_url,
  timeout: 1000,
  params: { market: "KRW-OMG", count: "1" },
});

setInterval(() => {
  const today = new Date();
  instance
    .get("/v1/candles/minutes/1")
    .then((response) =>
      console.log(
        `${today.toLocaleTimeString()} 기준 오미세고 가격 : ${
          response.data[0].trade_price
        }`
      )
    );
}, 1000);
