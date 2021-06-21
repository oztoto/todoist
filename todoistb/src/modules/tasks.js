import { createSlice } from '@reduxjs/toolkit';
import { todoTasks } from './mock';

const initialState = todoTasks;

// reducer
const taskSlice = createSlice({
	name: 'tasks', // reducers名
	initialState, // initialState
	reducers: { // reducers
		setTask: (state, {payload: {content}}) => {
			const id = Math.max(...state.map(task=>task.id))+1;
			return [
				...state, 
				{ id, doneFlag: false, content, layer: 1, childIds: [] }
			]
		},
	}
})

export const { setTask } = taskSlice.actions;
export const selectTasks = (state) => state.tasks;
export const taskReducers = taskSlice.reducer;