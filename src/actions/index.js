export const User_Token = "  User_Token ";
export const Set_User = " Set_User";
export const Products_Item = "Products_Item";
export const Location_Info = "Location_Info";
export const Families = "Families";
export const Transaction = "Transaction";
export const Set_Filter="Set_Filter"

export const PRODUCT_ITEM_FILTERS = 'PRODUCT_ITEM_FILTERS';

export const setUser = (payload) => ({
  type: Set_User,
  payload,
});
export const userToken = (payload) => ({
  type: User_Token,
  payload,
});
export const productItems = (payload) => ({
  type: Products_Item,
  payload,
});
export const locationInfo = (payload) => ({
  type: Location_Info,
  payload,
});
export const familiesData = (payload) => ({
  type: Families,
  payload,
});
export const transactionData = (payload) => ({
  type: Transaction,
  payload,
});
export const setFilter = (payload) => ({
  type: Set_Filter,
  payload,
});
export const setProductsFilters = (payload) => ({
  type: PRODUCT_ITEM_FILTERS,
  payload,
});
