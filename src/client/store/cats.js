import axios from 'axios'


// ACTION TYPES
const LOAD_CATS = 'LOAD_CATS';

// INITIAL STATE
const initialState = [];

// ACTION CREATORS
export const loadCats = data => ({
    type: LOAD_CATS,
    cats: data
})

// THUNK CREATORS
export const fetchCats = () => async dispatch => {
    const catsData = (await axios.get('/api/cats/')).data;
    dispatch(loadCats(catsData));
}

// REDUCER
export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_CATS: return action.cats
        default: return state;
    }
}
