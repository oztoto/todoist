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
		doneTask: (state, {payload: {targetIds}}) => {
			// [TODO]子要素もまとめてDoneにする
			return state.map(task => {
				if (targetIds.includes(task.id)){
					return {...task, doneFlag: true};
				}
				return task;
			})
		}
	}
})

export const { setTask, doneTask } = taskSlice.actions;
export const selectTasks = (state) => state.tasks;
export const taskReducers = taskSlice.reducer;