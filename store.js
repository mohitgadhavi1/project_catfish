import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./pages/layout.slice";
import stackReducer from "./pages/stack/stack.slice";
export const store = configureStore({
	reducer: {
		layout: layoutReducer,
		stack: stackReducer,
	},
});
