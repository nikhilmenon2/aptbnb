const BOOKING = "/spots/booking";
const CLEAR = "/spots/clear";

const booking = (reserves) => ({
  type: BOOKING,
  payload: reserves,
});

export const clearInfo = () => ({
  type: CLEAR,
});

export const getBooking = (spotId, userId) => async (dispatch) => {
  let res = await fetch(`/api/spots/${spotId}/booking/user/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  res = await res.json();
  dispatch(booking(res));
};

const initialState = {};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case CLEAR:
      newState = Object.assign(state);
      return newState;
    case BOOKING:
      newState = Object.assign(state, { ...action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;
