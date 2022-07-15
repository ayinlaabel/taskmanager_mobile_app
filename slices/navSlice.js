import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  list: null,
  task: null,
  token: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setList, setTask, setToken } = navSlice.actions;

//Selectors
export const selectUser = (state) => state.nav.user;
export const selectList = (state) => state.nav.list;
export const selectTask = (state) => state.nav.task;
export const selectToken = (state) => state.nav.token;

export default navSlice.reducer;
