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
export default Reducer;
