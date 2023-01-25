export default {
  SET_MENU(state, payload) {
    if (payload) {
      state.isMenu.isIn = true;
      state.isMenu.isOut = false;
    } else {
      state.isMenu.isIn = false;
      state.isMenu.isOut = true;
    }
  },
};
