/* eslint-disable no-shadow */

// TODO - Sort out random ID
let nextId = 1;

const state = {
  items: {},
};

const mutations = {
  ADD_NOTE: (state) => {
    state.items = {
      ...state.items,
      ...{
        [nextId]: {
          id: nextId,
          title: '',
          contents: '',
          createdAt: new Date().toISOString(),
          modifiedAt: null,
        },
      },
    };

    nextId += 1;
  },
};

const actions = {
  addNote({ commit }) {
    commit('ADD_NOTE');
  },
};

const getters = {
  getNotes: (state) => Object.values(state.items),
};


export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
