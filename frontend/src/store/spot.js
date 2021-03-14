const SET_SPOTS = "spots/SET_SPOTS";

const setSpots = (spots) => ({ type: SET_SPOTS, payload: spots });

export const getSpots = () => async (dispatch) => {
  const res = await fetch("/api/spots");
  const spots = await res.json();
  dispatch(setSpots(spots));
};

export const spotDisplay = (spotId) => async (dispatch) => {
  let res = await fetch(`/api/spots/${spotId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  res = await res.json();
  dispatch(setSpots(res));
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_SPOTS:
      newState = Object.assign({}, state);
      newState = { ...newState, ...action.payload };
      return newState;
    default:
      return state;
  }
}

export default reducer;
