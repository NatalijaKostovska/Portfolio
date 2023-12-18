import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import themeReducer from './theme'

export default configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer
    }
});
