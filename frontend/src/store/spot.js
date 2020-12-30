const SET_SPOTS = 'spots/SET_SPOTS'
const SET_ONE_SPOT = 'spots/SET_ONE_SPOT'

const setSpots = (spots) => (
    {type: SET_SPOTS ,
    payload: spots
}
)

const setSpot = (spot) => (
    {type: SET_SPOTS ,
    payload: spot
}
)

export const getSpots = () => async (dispatch) => {
const res = await fetch('/api/spots')
const {spots} = await res.json()
dispatch(setSpots(spots))
}

export const getSpot = () => async (dispatch) => {
const res = await fetch('/api/spots/${id}')
const {spot} = await res.json()
dispatch(setSpot(spot))
}

const initialState = [];

function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_SPOTS:
        return action.payload;
        // to specifically update certain value
    // case UPDATE_CITY:
    //      newState = Object.assign({}, state );
    //      newState = {...newState, ...action.payload}
    //     return newState;
    case SET_ONE_SPOT:
        return action.payload;
    default:
      return state;
  }
}

export default reducer;