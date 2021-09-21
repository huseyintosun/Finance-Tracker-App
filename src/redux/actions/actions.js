import { EXPENSE, INCOME } from '../types/types';

export const expenseNumber = (number) => {
    return {
        type: EXPENSE,
        payload: number
    }
};
export const incomeNumber = (number) => {
    return {
        type: INCOME,
        payload: number
    }
};