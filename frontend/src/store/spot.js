const SET_SPOTS = 'spots/SET_SPOTS'

const setSpots = (spots) => (
    {type: SET_SPOTS ,
    payload: spots
}
)


export const getSpots = () => async (dispatch) => {
const res = await fetch('/api/spots')
const {spots} = await res.json()
dispatch(setSpots(spots))
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
    default:
      return state;
  }
}

export default reducer;