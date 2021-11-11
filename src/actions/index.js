export const SET_SELECTED_USER_ID = 'SET_SELECTED_USER_ID';
export const SET_USERS = 'SET_USERS';
export const SET_USER = 'SET_USER';

export const setSelectedUserId = (payload) => ({ type: SET_SELECTED_USER_ID, payload });
export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const setUser = (payload) => ({ type: SET_USER, payload });
