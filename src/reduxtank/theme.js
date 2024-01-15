import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: true
    },
    reducers: {
        changeToDarkTheme: (state) => {
            state.theme = !state.theme;
        },
    }
});

// Action creators are generated for each case reducer function
export const { changeToDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
