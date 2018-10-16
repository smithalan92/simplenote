/* eslint-disable no-shadow */

const state = {
  currentNoteId: null,
};

const mutations = {
  SET_CURRENT_NOTE: (state, id) => {
    state.currentNoteId = id;
  },
};

const actions = {
  setCurrentNote({ commit }, id) {
    commit('SET_CURRENT_NOTE', id);
  },
};

const getters = {};


export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
