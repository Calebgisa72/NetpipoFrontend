import { createSlice } from "@reduxjs/toolkit";

export enum Tabs {
  HOME = "Home",
  BROWSER = "Browser",
  TRENDING = "Trending",
  SAVED = "Saved",
  PLAYLIST = "Playlist",
  SETTINGS = "Settings",
  PROFILE = "My profile",
}

interface InitialStateProps {
  search: string;
  viewMenuBar: boolean;
  tab: Tabs;
}

let path: keyof typeof Tabs = "BROWSER";

const route = window.location.pathname.replace("/", "").toUpperCase();

if (route && route in Tabs) {
  path = route as keyof typeof Tabs;
}

const initialState: InitialStateProps = {
  search: "",
  viewMenuBar: false,
  tab: Tabs[path],
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
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { setSearch, setviewMenuBar, setTab } = todoSlice.actions;

export default todoSlice.reducer;
