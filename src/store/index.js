import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies";
import userService from "@/domain/User/userService";
import { USERDATA } from "@/constants/constants";

Vue.use(Vuex);
Vue.use(VueCookies);

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
  },
  getters: {},
  mutations: {
    SET_USER(state, value) {
      state.user = value.data;
      sessionStorage.setItem("userData", JSON.stringify(value.data));
      VueCookies.set("token", value.token, "10m", {
        secure: true,
        httpOnly: true,
      });
    },

    SET_LOADING(state, loading) {
      state.loading = loading;
    },

    FETCH_USER(state, user) {
      state.user = user
    },
  },
  actions: {
    setUser: ({ commit }, value) => {
      commit("SET_USER", value);
    },
    fetchUser: async ({ commit }) => {
      if (USERDATA) {
        commit("FETCH_USER", USERDATA);
      } else {
        commit("SET_LOADING", true);
        try {
          const response = await userService.fetchUser();
          const user = response.data;
          commit("FETCH_USER", user);
        } catch (error) {
          commit("SET_LOADING", false);
        }
      }
    },
  },
  modules: {},
});
