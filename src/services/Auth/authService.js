import handleError from "@/utils/handleErrors";
import handleSuccess from "@/utils/handleSuccess";
import apiClient from "../../api/apiClient";

export default {
  async verifyEmail(email) {
    try {
      const response = await apiClient.post("/auth/verify-email", {
        email: email,
      });
      if (response.data.message) {
        handleSuccess(response.data.message);
      }
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  async resendOtp(sessionId) {
    try {
      const response = await apiClient.post("/auth/resend-otp", {
        sessionId: sessionId,
      });
      if (response.data.message) {
        handleSuccess(response.data.message);
      }
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  async verifyOtp(otp, sessionId, processType) {
    try {
      const response = await apiClient.post("/auth/verify-otp", {
        otp: otp,
        sessionId: sessionId,
        processType: processType,
      });
      if (response.data.message) {
        handleSuccess(response.data.message);
      }
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  async signup(payload) {
    try {
      const response = await apiClient.post("/auth/signup", payload);
      if (response.data.message) {
        handleSuccess(response.data.message);
      }
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  async forgotPassword(email) {
    try {
      const response = await apiClient.post("/auth/forgot-password", email);
      if (response.data.message) {
        handleSuccess(response.data.message);
      }
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  async resetPassword(password, processId) {
    try {
      const response = await apiClient.post("/auth/reset-password", {
        password: password,
        processId: processId,
      });
      if (response.data.message) {
        handleSuccess(response.data.message);
      }
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },

  async login(data) {
    try {
      const response = await apiClient.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      if (response.data.message) {
        handleSuccess(response.data.message);
      }
      return response.data;
    } catch (error) {
      handleError(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  },
};
