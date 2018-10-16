/* eslint-disable no-shadow */

// TODO - Sort out random ID
let nextId = 1;

const contents = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

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
          contents,
          createdAt: new Date().toISOString(),
          modifiedAt: null,
        },
      },
    };

    nextId += 1;
  },
};

const actions = {
  addNote({ commit, dispatch }) {
    commit('ADD_NOTE');
    dispatch('general/setCurrentNote', nextId - 1, { root: true });
  },
};

const getters = {
  getNotes: (state) => Object.values(state.items),

  getNoteById: (state) => (id) => Object.values(state.items).find((note) => note.id === id),
};


export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
