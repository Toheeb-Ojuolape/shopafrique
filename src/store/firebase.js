import firebaseService from "@/services/Firebase/firebaseService";

export default {
  namespaced: true,
  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING(state, value) {
      state.loading = value;
    },
  },
  actions: {
    async uploadPost({ commit }, value) {
      try {
        commit("SET_LOADING", true);
        const imageUrl = await firebaseService.uploadImageToFirebase(value.image);
        value.image = imageUrl;
        await firebaseService.postDataToFirebase(value);
        commit("SET_LOADING", false);
      } catch (error) {
        console.log(error);
        commit("SET_LOADING", false);
      }
    },
  },
};
