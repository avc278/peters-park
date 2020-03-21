import axios from "axios";

// ACTION TYPES
const LOAD_CAT = 'LOAD_CAT';

// INITIAL STATE
const initialState = {};

// ACTION CREATORS
export const loadCat = data => ({
    type: LOAD_CAT,
    cat: data
})

// THUNK CREATORS
export const fetchCat = id => async (dispatch) => {
    const catData = (await axios.get(`/api/cats/${id}/`)).data;
    dispatch(loadCat(catData));
}

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_CAT: return action.cat;
        default: return state;
    }
}
