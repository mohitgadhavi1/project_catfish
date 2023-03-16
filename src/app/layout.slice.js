import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkmode: true,
	siderCollapsed: true,
};

export const layoutSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		toggleDarkmode: (state) => {
			state.darkmode = !state.darkmode;
		},
		toggleSidebar: (state) => {
			state.siderCollapsed = !state.siderCollapsed;
		},
	},
});
export const { toggleDarkmode, toggleSidebar } = layoutSlice.actions;
export default layoutSlice.reducer;
