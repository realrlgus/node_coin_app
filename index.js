import axios from "axios";
import { uuid } from "uuidv4";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const access_key = process.env.UPBIT_OPEN_API_ACCESS_KEY;
const secret_key = process.env.UPBIT_OPEN_API_SECRET_KEY;
const server_url = process.env.UPBIT_OPEN_API_URL;

const payload = {
  access_key,
  nonce: uuid(),
};

const token = sign(payload, secret_key);

const instance = axios.create({
  baseURL: server_url,
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` },
});

instance.get("/v1/accounts").then((response) => console.log(response));
