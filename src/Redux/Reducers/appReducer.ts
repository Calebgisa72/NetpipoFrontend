import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  search: string;
  viewMenuBar: boolean;
}

const initialState: InitialStateProps = {
  search: "",
  viewMenuBar: false,
};

const todoSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setviewMenuBar: (state, action) => {
      state.viewMenuBar = action.payload;
    },
  },
});

export const { setSearch, setviewMenuBar } = todoSlice.actions;

export default todoSlice.reducer;
