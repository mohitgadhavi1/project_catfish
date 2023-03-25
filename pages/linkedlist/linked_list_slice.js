import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const linkedlistSlice = createSlice({
  name: "linkedlist",
  initialState,
  reducers: {
    LinkedListArr: (state, actions) => {
      console.log("actions", actions.payload);
      const { name, type } = actions.payload;
      if (type.includes("Add")) {
        state.data = [...state.data,name];
      }
      if (type.includes("remove")) {
        state.data.pop();                               
      }
    },
  },
});
export const { LinkedListArr } = linkedlistSlice.actions;
export default linkedlistSlice.reducer;
