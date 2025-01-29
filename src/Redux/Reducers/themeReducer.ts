// import { createSlice } from "@reduxjs/toolkit";

// interface InitialStateProps {
//   theme: "light" | "dark";
// }

// const storedTheme = localStorage.getItem("theme");
// const initialState: InitialStateProps = {
//   theme: storedTheme === "dark" ? "dark" : "light",
// };

// const themeSlice = createSlice({
//   name: "theme",
//   initialState,
//   reducers: {
//     setTheme: (state, action) => {
//       const newTheme = action.payload || "light";
//       localStorage.setItem("theme", newTheme);
//       state.theme = newTheme;
//     },
//   },
// });

// export const { setTheme } = themeSlice.actions;

// export default themeSlice.reducer;
