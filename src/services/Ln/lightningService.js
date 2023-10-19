import handleError from "@/utils/handleErrors";
import serviceClient from "../../api/serviceClient";
import { HEADERS } from "@/constants/constants";

export default {
  async generateInvoice(payload) {
    try {
      const response = await serviceClient.post("/ln/invoice", payload, {
        headers: HEADERS,
      });
      return response.data;
    } catch (error) {
      handleError(error.message);
      throw new Error(error.message);
    }
  },

  async getSatsValue(payload) {
    try {
      const response = await serviceClient.get(
        "/ln/sats?amount=" + payload.amount + "&currency=" + payload.currency
      );
      return response.data;
    } catch (error) {
      handleError(error.message);
      throw new Error(error.message);
    }
  },

  async getUsdValue(amount) {
    try {
      const response = await serviceClient.get(
        "/ln/usd?amount=" + amount
      );
      return response.data;
    } catch (error) {
      handleError(error.message);
      throw new Error(error.message);
    }
  },
};
