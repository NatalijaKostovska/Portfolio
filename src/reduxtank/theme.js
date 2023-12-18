import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: 'dark'
    },
    reducers: {
        changeToDarkTheme: (state) => {
            state.theme = 'dark';
        },
        changeToLightTheme: (state) => {
            console.log(state.theme)
            state.theme = 'light';
        }
    }
});

// Action creators are generated for each case reducer function
export const { changeToDarkTheme, changeToLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
