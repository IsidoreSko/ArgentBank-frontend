// "state" initial:
const initialState = {
  authenticated: false,
  token: null,
};

// "reducer":
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action LOGIN:
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
        token: action.payload.token,
      };
    // Action LOGOUT:
    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        token: null,
      };
    // Action USER_NAME:
    case "USER_PROFILE":
      return {
        ...state,
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    default:
      return state;
  }
};

export default userReducer;
