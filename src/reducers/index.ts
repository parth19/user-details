const initialState = {
  userDetails: {},
  currentPath: '/',
  successFlag: false
};

const userDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SETUSERDETAILS":
      console.log(action.payload.userDetails);
      return Object.assign({}, state, {
        userDetails: action.payload.userDetails
      });

    case "SETCURRENTPATH":
      console.log(action.payload.currentPath);
      return Object.assign({}, state, {
        currentPath: action.payload.currentPath
      });

    case "SETSUCCESSFLAG":
      console.log(action.payload.successFlag);
      return Object.assign({}, state, {
        successflag: action.payload.successFlag
      });
    default:
      return state;
  }
};

export default userDetailsReducer;