import axios from "axios";
import { SERVICE_URL } from "@/constants/constants";

const instance = axios.create({
  baseURL: SERVICE_URL,
});

export default instance;
