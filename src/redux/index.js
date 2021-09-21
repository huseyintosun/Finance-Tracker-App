import { combineReducers, createStore } from 'redux';
import addExpense from './adders/addExpense'
import addIncome from './adders/addIncome';

const rootAdder = combineReducers({
    expense : addExpense,
    income : addIncome,
})

const store = createStore(rootAdder)

export default store;