import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./pages/layout.slice";
import stackReducer from "./pages/stack/stack.slice";
import queueReducer from "./pages/queue/queueSlice";
import linked_list_slice from "./pages/linkedlist/linked_list_slice";
export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    stack: stackReducer,
    queue: queueReducer,
    linkedlist: linked_list_slice,
  },
});
