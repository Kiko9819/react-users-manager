import Axios from "axios";

export const USER_ACTIONS = {
  FETCH_USERS_BEGIN: "FETCH_USERS_BEGIN",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAIL: "FETCH_USERS_FAIL",

  CREATE_USER_BEGIN: "CREATE_USER_BEGIN",
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_FAIL: "CREATE_USER_FAIL",

  SELECT_USER_TO_UPDATE: "SELECT_USER_TO_UPDATE",
  CLEAR_USER_FORM: "CLEAR_USER_FORM",
  UPDATE_USER_BEGIN: "UPDATE_USER_BEGIN",
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAIL: "UPDATE_USER_FAIL",

  DELETE_USER_BEGIN: "DELETE_USER_BEGIN",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAIL: "DELETE_USER_FAIL",
};

export const clearUserForm = () => ({
  type: USER_ACTIONS.CLEAR_USER_FORM,
});

export const selectUserToUpdate = (user) => ({
  type: USER_ACTIONS.SELECT_USER_TO_UPDATE,
  payload: { user },
});

// CREATE
export const createUserBegin = () => ({
  type: USER_ACTIONS.CREATE_USER_BEGIN,
});

export const createUserSuccess = (user) => ({
  type: USER_ACTIONS.CREATE_USER_SUCCESS,
  payload: { user },
});

export const createUserFail = (error) => ({
  type: USER_ACTIONS.CREATE_USER_FAIL,
  payload: { error },
});

// UPDATE
export const updateUserBegin = () => ({
  type: USER_ACTIONS.UPDATE_USER_BEGIN,
});

export const updateUserSuccess = (user) => ({
  type: USER_ACTIONS.UPDATE_USER_SUCCESS,
  payload: { user },
});

export const updateUserFail = (error) => ({
  type: USER_ACTIONS.UPDATE_USER_FAIL,
  payload: { error },
});

// GET
export const fetchUsersBegin = () => ({
  type: USER_ACTIONS.FETCH_USERS_BEGIN,
});

export const fetchUsersSuccess = (users) => ({
  type: USER_ACTIONS.FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersError = (error) => ({
  type: USER_ACTIONS.FETCH_USERS_FAIL,
  payload: { error },
});

// DELETE
// export
export const deleteUserBegin = () => ({
  type: USER_ACTIONS.DELETE_USER_BEGIN,
});

export const deleteUserSuccess = (id) => ({
  type: USER_ACTIONS.DELETE_USER_SUCCESS,
  payload: { id },
});

export const deleteUserFail = (error) => ({
  type: USER_ACTIONS.DELETE_USER_FAIL,
  payload: { error },
});
