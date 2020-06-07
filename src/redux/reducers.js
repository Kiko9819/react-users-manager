import { USER_ACTIONS } from "./actions";

const initialState = {
  users: [],
  selectedUser: null,
  error: null,
  loading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.CLEAR_USER_FORM:
      return {
        ...state,
        loading: false,
        error: null,
        selectedUser: null,
      };
    case USER_ACTIONS.SELECT_USER_TO_UPDATE:
      return {
        ...state,
        loading: false,
        error: null,
        selectedUser: action.payload.user,
      };
    // CREATE
    case USER_ACTIONS.CREATE_USER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_ACTIONS.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload.user],
      };
    case USER_ACTIONS.CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    // EDIT ACTIONS
    case USER_ACTIONS.UPDATE_USER_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case USER_ACTIONS.UPDATE_USER_SUCCESS:
      const userIndex = state.users.findIndex(
        (x) => x.id === action.payload.user.id
      );
      return {
        ...state,
        loading: false,
        users: state.users.splice(userIndex, 1),
      };
    case USER_ACTIONS.UPDATE_USER_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload.error,
      };
    // DELETE ACTIONS
    case USER_ACTIONS.DELETE_USER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_ACTIONS.DELETE_USER_SUCCESS:
      // ensures that the form is not left with the old value
      if (state.selectedUser && action.payload.id === state.selectedUser.id) {
        return {
          ...state,
          loading: false,
          users: state.users.filter((user) => user.id !== action.payload.id),
          selectedUser: null,
        };
      }
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    case USER_ACTIONS.DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: [],
      };
    // FETCH ACTIONS
    case USER_ACTIONS.FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_ACTIONS.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };
    case USER_ACTIONS.FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: [],
      };
    default:
      return state;
  }
};

export default usersReducer;
