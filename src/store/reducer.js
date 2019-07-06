const initialState = {
  user: {
    _id: " ",
    FirstName: " ",
    MiddleName: " ",
    LastName: " ",
    EmployeeID: " ",
    EmailIDs: [],
    status: false,
    token: ""
  }
};

const Reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_USER") {
    return {
      user: action.data
    };
  } else return state;
};

const intialUserState = {};
const UsersReducer = (state = intialUserState, action) => {};

export default (UsersReducer, Reducer);
