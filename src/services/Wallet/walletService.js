import handleError from "@/utils/handleErrors";
import apiClient from "../../api/apiClient";
import { HEADERS } from "@/constants/constants";

export default {
  async fundWallet(data) {
    try {
      const response = await apiClient.post("/wallet/fund-wallet", data, {
        headers: HEADERS,
      });
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  async fetchTransactions() {
    try {
      const response = await apiClient.get("/wallet/transactions", {
        headers: HEADERS,
      });
      return response.data.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },
};
