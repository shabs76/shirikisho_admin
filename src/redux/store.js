import { configureStore } from "@reduxjs/toolkit";
import allreducers from "./reducers";

const store = configureStore({
    reducer: allreducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
   }),
});
export default store;