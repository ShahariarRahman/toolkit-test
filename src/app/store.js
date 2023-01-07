import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

const store = configureStore({
    devTools: true,
    reducer: {
        counter: counterSlice,
    },
});

export default store;