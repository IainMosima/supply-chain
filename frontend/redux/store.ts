import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./reducers/countryReducer";

export const store = configureStore({
    reducer: {
        selectedCountry: countrySlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
