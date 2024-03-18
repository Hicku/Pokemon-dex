import { ACTION_TYPES } from "./actionTypes/actionTypes";

// Intital state for pokemon fetch

export const INITIAL_STATE = {
  loading: false,
  error: false,
  pokemon: {},
  curErrorMessage: "",
};

// Reducer checks for current action type and updates initial state
export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        loading: true,
        error: false,
        pokemon: {},
        curErrorMessage: "",
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        // post is updated with pokemon data by recieving data in payload
        pokemon: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        loading: false,
        error: true,
        pokemon: {},
        curErrorMessage: action.payload,
      };
    default:
      return state;
  }
};
