import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

// reducer
const counterSlice = createSlice({
	name: 'counter', // reducers名
	initialState, // initialState
	reducers: { // reducers
		increment: state => state + 1,
		decrement: state => state - 1,
		incrementByAmount : (state, action) => {
			console.log(action);
			return state + action.payload.amount;
		}
	}
})



export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state) => state.counter;
export const counterReducers = counterSlice.reducer;