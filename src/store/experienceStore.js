const initialStateType = "EXPERIENCE_INITIAL_STATE";
const logStateType = "EXPERIENCE_LOG_STATE";

export const initialState = {
  type: initialStateType,
  data: {}
};

export const actionCreators = {
  logInput: input => (
    {
      type: logStateType,
      payload: input
    },
    console.log(input)
  )
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case logStateType:
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
};
