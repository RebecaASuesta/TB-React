const noticias = (state, action) => {
    switch (action.type) {
      case "GET_NOTICIAS":
        return {
          ...state,
          noticias: action.payload,
        };
      default:
        return state;
    }
  };
  export default noticias;