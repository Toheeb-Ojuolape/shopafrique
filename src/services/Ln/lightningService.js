import handleError from "@/utils/handleErrors";
import serviceClient from "../../api/serviceClient"
import { HEADERS } from "@/constants/constants";

export default {
  async generateInvoice(payload) {
    try {
      const response = await serviceClient.post("/ln/invoice", payload, {
        headers: HEADERS,
      });
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },
};
