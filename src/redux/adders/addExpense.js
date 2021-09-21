import { EXPENSE } from '../types/types';
const initialState = {
    totalExpense: 0,
}

const addExpense = (state = initialState, action) => {
    switch (action.type) {

        case EXPENSE:
            return { ...state, totalExpense : state.totalExpense + action.payload }

        default:
            return state
    }
}
export default addExpense;