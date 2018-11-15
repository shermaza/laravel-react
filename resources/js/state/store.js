import { createStore } from 'redux';

function state(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(state);
export default store;