import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./src/app/layout.slice";
import stackReducer from "./src/app/stack/stack.slice";
export const store = configureStore({
	reducer: {
		layout: layoutReducer,
		stack: stackReducer,
	},
});
