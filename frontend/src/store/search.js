import {fetch} from './csrf'
const SEARCH = "/spots/search";
const CLEAR_SEARCH = "/spots/clearSearch";

const search = (spots) => ({
  type: SEARCH,
  payload: {...spots.data},
});

export const clearSearchInfo = () => ({
  type: CLEAR_SEARCH,
});


export const searchSpots = (location) => async (dispatch) => {
  let coordString = "NoLocation";
  const tt = window.tt;

  if (location) {
    let loc = await tt.services
      .fuzzySearch({
        key: "3mbhG7ahGflHQAtjynisAZIEkgWvQzZz",
        query: location,
      })
      .go();
      coordString = `${loc.results[0].position.lng},${loc.results[0].position.lat}`;
  }
  let url = `/api/search/?coord=${coordString}`
  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(search(res));
};


const initialState = [];

function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case CLEAR_SEARCH:
      newState = Object.assign({}, state);
      newState.searchResults = null;
      newState.searchCenter = null;
      return newState;
    case SEARCH:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;
