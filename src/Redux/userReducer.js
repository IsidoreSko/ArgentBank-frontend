// "state" initial:
const initialState = {
  authenticated: false,
  token: null,
};

// "reducer":
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        token: null,
      };

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
