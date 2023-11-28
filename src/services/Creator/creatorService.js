import handleError from "@/utils/handleErrors";
import apiClient from "../../api/apiClient";
import { HEADERS } from "@/constants/constants";
import handleSuccess from "@/utils/handleSuccess";

export default {
  async updateDemographic(payload) {
    try {
      const response = await apiClient.post(
        "/creator/update-demographic",
        payload,
        {
          headers: HEADERS,
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      handleError(error.message);
      throw new Error(error.message);
    }
  },

  async addSite(payload) {
    try {
      const response = await apiClient.post("/creator/add-site", payload, {
        headers: HEADERS,
      });
      return response.data;
    } catch (error) {
      handleError(error.message);
      throw new Error(error.message);
    }
  },

  async verifySite(value) {
    try {
      const response = await apiClient.get("/creator/verify-site/" + value, {
        headers: HEADERS,
      });
      handleSuccess(response.data.message + ". Refreshing..");
      setTimeout(() => {
        location.reload();
      }, 2500);
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.message);
    }
  },

  async fetchSites() {
    try {
      const response = await apiClient.get("/creator/fetch-sites", {
        headers: HEADERS,
      });
      return response.data.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },
};
