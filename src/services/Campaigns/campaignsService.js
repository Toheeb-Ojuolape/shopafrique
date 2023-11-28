import handleError from "@/utils/handleErrors";
import apiClient from "../../api/apiClient";
import { HEADERS } from "@/constants/constants";

export default {
  async createCampaign(data) {
    try {
      const response = await apiClient.post("/campaigns", data, {
        headers: HEADERS,
      });
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  async fetchCampaigns() {
    try {
      const response = await apiClient.get("/campaigns", {
        headers: HEADERS,
      });
      return response.data.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },
};
