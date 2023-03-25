import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const queueSlice = createSlice({
  name: "queue",
  initialState,
  reducers: {
    QueueArr: (state, actions) => {
      console.log("actions", actions.payload);
      const { name, type } = actions.payload;
      if (type.includes("push")) {
        state.data = [name, ...state.data];
      }
      if (type.includes("pop")) {
        state.data.pop();
      }
    },
  },
});
export const { QueueArr } = queueSlice.actions;
export default queueSlice.reducer;
