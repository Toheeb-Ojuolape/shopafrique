import handleError from "@/utils/handleErrors";
// import handleSuccess from "@/utils/handleSuccess";
import apiClient from "../../api/apiClient";
import { HEADERS } from "@/constants/constants";

export default {
  async fetchUser() {
    try {
      const response = await apiClient.get("/user",{
        headers:HEADERS
      });
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },
};
