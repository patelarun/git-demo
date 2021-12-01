import { SET_CHARACTER_FIELDS } from '../actions';

const initialState = {
  characters: {
    records: [],
    filters: { page: 1, limit: 10 },
  },
}

export default function books (state = initialState, action) {
  switch (action.type) {
    case SET_CHARACTER_FIELDS:
      return {
        ...state,
        characters: {
          ...state.characters,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
