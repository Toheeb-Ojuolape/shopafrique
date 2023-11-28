import creatorService from "@/services/Creator/creatorService";

export default {
  namespaced: true,
  state: {
    loading: false,
    code: "",
    siteid: "",
    sites: [],
  },
  mutations: {
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_CODE(state, value) {
      state.code = value;
    },
    SET_SITEID(state, value) {
      state.siteid = value;
    },
    SET_SITES(state, value) {
      state.sites = value;
    },
  },
  actions: {
    async updateDemographic({ commit }, value) {
      try {
        commit("SET_LOADING", true);
        await creatorService.updateDemographic(value);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
        commit("SET_LOADING", false);
      }
    },

    async addSite({ commit }, value) {
      try {
        commit("SET_LOADING", true);
        const response = await creatorService.addSite(value);
        commit("SET_CODE", response.data.code);
        commit("SET_SITEID", response.data.id);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
        commit("SET_LOADING", false);
      }
    },

    async verifySite({ commit, rootState }) {
      try {
        commit("SET_LOADING", true);
        await creatorService.verifySite(rootState.creator.siteid);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
        commit("SET_LOADING", false);
      }
    },

    async fetchSites({ commit }) {
      try {
        commit("SET_LOADING", true);
        const response = await creatorService.fetchSites();
        commit("SET_SITES", response);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_SITES", []);
      }
    },
  },
};
