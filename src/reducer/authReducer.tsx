const authReducer = (state:any, action:any) => {
  switch (action.type) {
    //? SET ALL USERS LIST (ALL REGISTERED USERS)
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    //? SET CURRENT LOGGED IN USER
    case "SET_AUTH_USER":
      return {
        ...state,
        authUser: action.payload,
      };

    //? SHOW MESSAGES (ERROR OR SUCCESS)
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    //? CLEAR MESSAGE(WHEN ROUTE CHANGES)
    case "CLEAR_MESSAGE":
      return {
        ...state,
        message: "",
      };

    default:
      return state;
  }
};

export default authReducer;
