export const INITIAL_STATE = {
  loading: false,
  error: false,
  post: {},
  curErrorMessage: "",
};

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        error: false,
        post: {},
        curErrorMessage: "",
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        post: {},
        curErrorMessage: action.payload,
      };
    default:
      return state;
  }
};
