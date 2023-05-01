const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT_MODE": {
      return {
        darkMode: false,
      };
    }
    case "DARK_MODE": {
      return {
        darkMode: true,
      };
    }
    case "TOOGLE_MODE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default darkModeReducer;
