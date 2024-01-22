import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Actions";

const store = configureStore({
    reducer: {
        app: appSlice,
    }
})

export default store;