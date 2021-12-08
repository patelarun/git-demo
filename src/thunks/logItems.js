import client from "./axios";
import {
  productItems,
  locationInfo,
  familiesData,
  transactionData,
} from "../actions";

export const productData = (filter) => async (dispatch) => {
  try {
    const params = {
     _limit: filter.limit,
      _page: filter.page,
    };
    const response = await client.get("/products", { params });
    dispatch(productItems(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const familiesInfo = (filter) => async (dispatch) => {
  try {
    const params = {
      _limit: filter.limit,
       _page: filter.page,
     };
    const response = await client.get("/families", { params });
    dispatch(familiesData(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const transactionInfo = (filter) => async (dispatch) => {
  try {
    const params = {
      _limit: filter.limit,
       _page: filter.page,
     };
    const response = await client.get("/transactions", { params });
    dispatch(transactionData(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const locationData = (filter) => async (dispatch) => {
  try {
    const params = {
      _limit: filter.limit,
       _page: filter.page,
     };
    const response = await client.get("/locations", { params });
    dispatch(locationInfo(response.data));
  } catch (err) {
    console.log(err);
  }
};
