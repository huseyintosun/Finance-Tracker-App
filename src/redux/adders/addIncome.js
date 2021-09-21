import {INCOME} from '../types/types';
const initialState = {
    totalIncome:0,
}

const addIncome = (state = initialState, action) => {
    switch (action.type) {

    case INCOME:
        return { ...state, totalIncome:state.totalIncome + action.payload }

    default:
        return state
    }
}
export default addIncome;