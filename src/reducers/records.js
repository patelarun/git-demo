import {
  PRODUCT_ITEM_FILTERS,
  Products_Item,
  Location_Info,
  Families,
  Transaction,
  Set_Filter
} from "../actions";

const initialState = {
  products: { records: [], filters: { page: 1, limit: 10 } },
  location: { records: [], filters: { page: 1, limit: 10 } },
  families: { records: [], filters: { page: 1, limit: 10 } },
  transaction: { records: [], filters: { page: 1, limit: 10 } },
};

export default function records (state = initialState, action) {
  switch (action.type) {
    case Products_Item:
      return {
        ...state,
        products: {
          ...state.products,
          records: action.payload,
        }
      };
    case PRODUCT_ITEM_FILTERS:
      return {
        ...state,
        products: {
          ...state.products,
          filters: {
            ...state.products.filters,
            ...action.payload,
          },
        }
      };
    case Location_Info:
      return {
        ...state,
        location: action.payload,
      };
    case Families:
      return {
        ...state,
        families: action.payload,
      };
    case Transaction:
      return {
        ...state,
        transaction: action.payload,
      };
    case Set_Filter:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
}
