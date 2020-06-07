import {
  deleteUserBegin,
  deleteUserSuccess,
  deleteUserFail,
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersError,
  createUserBegin,
  createUserSuccess,
  createUserFail,
  updateUserBegin,
  updateUserSuccess,
  updateUserFail,
} from "../redux/actions";
import Axios from "axios";

export function deleteUser(id) {
  return (dispatch) => {
    dispatch(deleteUserBegin());

    return Axios.delete(`http://localhost:3001/users/${id}`)
      .then(() => dispatch(deleteUserSuccess(id)))
      .catch((error) => dispatch(deleteUserFail(error)));
  };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersBegin());

    return Axios.get("http://localhost:3001/users")
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data));

        return res.data;
      })
      .catch((error) => dispatch(fetchUsersError(error)));
  };
}

export function createUser(user) {
  return (dispatch) => {
    dispatch(createUserBegin());

    return Axios.post("http://localhost:3001/users", user)
      .then((res) => {
        dispatch(createUserSuccess(res.data));
      })
      .catch((error) => dispatch(createUserFail(error)));
  };
}

export function updateUser(user) {
  return (dispatch) => {
    dispatch(updateUserBegin());

    return Axios.put(`http://localhost:3001/users/${user.id}`, user)
      .then((res) => {
        dispatch(updateUserSuccess(res.data));
      })
      .catch((error) => dispatch(updateUserFail(error)));
  };
}
