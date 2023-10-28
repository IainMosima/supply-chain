import { Country } from "@/models/Country";
import { createSlice } from "@reduxjs/toolkit";

interface CountryState {
    selectedCountry: Country | null
}

const initialState: CountryState = { selectedCountry: null };

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        setSelectedCountry: (state, action) => {
            state.selectedCountry = action.payload;
        }
    }
});

export const { setSelectedCountry } = countrySlice.actions;
export default countrySlice.reducer;