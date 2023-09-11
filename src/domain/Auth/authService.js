import handleError from "@/utils/handleErrors";
import handleSuccess from "@/utils/handleSuccess";
import apiClient from "../../services/apiClient"

export default {

  async verifyEmail(email) {
    try {
      const response = await apiClient.post("/auth/verify-email", {
        email: email,
      });
      if(response.data.message){
        handleSuccess(response.data.message)
      }
      return response.data;
    } catch (error) {
      handleError(error.message)
      throw new Error("Error sending otp");
    }
  }
}
