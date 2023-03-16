import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./src/app/layout.slice";
export const store = configureStore({
	reducer: {
		layout: layoutReducer,
	},
});
