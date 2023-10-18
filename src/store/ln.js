import lightningService from "@/services/Ln/lightningService";

export default {
  namespaced: true,
  state: {
    invoice: "",
    loading: false,
    satsValue: 0,
    usdValue: 0,
  },
  mutations: {
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_INVOICE(state, value) {
      state.invoice = value;
    },
    SET_SATSVALUE(state, value) {
      state.satsValue = value;
    },

    SET_USDVALUE(state, value) {
      state.usdValue = value;
    },
  },
  actions: {
    async generateInvoice({ commit }, value) {
      try {
        commit("SET_LOADING", true);
        const { invoice } = await lightningService.generateInvoice(value);
        commit("SET_INVOICE", invoice);
        commit("SET_LOADING", false);
        return invoice;
      } catch (error) {
        commit("SET_LOADING", false);
      }
    },

    async getSatsValue({ commit }, value) {
      try {
        commit("SET_LOADING", true);
        const satsValue = await lightningService.getSatsValue(value);
        commit("SET_SATSVALUE", satsValue);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
      }
    },

    async getUsdValue({ commit }, value) {
      try {
        commit("SET_LOADING", true);
        const usdValue = await lightningService.getUsdValue(value);
        commit("SET_USDVALUE", usdValue);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
      }
    },
  },
};
