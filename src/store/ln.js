import lightningService from "@/services/Ln/lightningService";

export default {
  namespaced: true,
  state: {
    invoice: "",
    loading: false,
  },
  mutations: {
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_INVOICE(state, value) {
      state.invoice = value;
    },
  },
  actions: {
    async generateInvoice({ commit }, value) {
      try {
        commit("SET_LOADING", true);
        const { invoice } = await lightningService.generateInvoice(value);
        commit("SET_INVOICE", invoice);
        commit("SET_LOADING", false);
        return invoice
      } catch (error) {
        commit("SET_LOADING", false);
      }
    },
  },
};
