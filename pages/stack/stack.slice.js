import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
};

export const stackSlice = createSlice({
	name: "stack",
	initialState,
	reducers: {
		customizeArr: (state, actions) => {
			console.log("actions", actions.payload);
			const { name, type } = actions.payload;
			if (type.includes("push")) {
				state.data = [name, ...state.data];
			}
			if (type.includes("pop")) {
				state.data = state.data.slice(1, state.data.length);
			}
		},
	},
});
export const { customizeArr } = stackSlice.actions;
export default stackSlice.reducer;
