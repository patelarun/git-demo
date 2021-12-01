import {
  SET_CHARACTER_FIELDS,
  SET_CHARACTER_FILTERS,
} from '../actions';

const initialState = {
  characters: {
    records: [],
    filters: { page: 1, limit: 10, orderBy: 'name', order: 'asc' },
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
    case SET_CHARACTER_FILTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          filters: {
            ...state.characters.filters,
            ...action.payload,
          }
        },
      };
    default:
      return state;
  }
}
