import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const todoThunk = () => async (dispatch) => {
  const token = localStorage.getItem("TOKEN");
  const response = await axios(`${process.env.REACT_APP_BACKEND}/todo`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch(getTodo(response.data.todo));
};
