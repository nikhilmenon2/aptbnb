
const TEXT = "modal/text";

const LOGIN = "modal/login";



export const setTextModal = (bool) => ({
  type: TEXT,
  payload: { text: bool },
});

export const setLogInModal = (bool) => ({
  type: TEXT,
  payload: { text: bool },
});

const initialState = {
  text: false,
  login: false
};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case TEXT:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    case LOGIN:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;
