import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
};

export const stackSlice = createSlice({
	name: "stack",
	initialState,
	reducers: {
		pushToArr: (state) => {},
		popFromArr: (state) => {},
	},
});
export const { pushToArr, popFromArr } = stackSlice.actions;
export default stackSlice.reducer;
