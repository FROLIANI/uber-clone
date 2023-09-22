import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const NavSlices = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },

        setDestination: (state, action) => {
            state.destination = action.payload;
        },

        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    }
})

export const { setOrigin, setDestination,
    setTravelTimeInformation } = NavSlices.actions
    
//Selectors
//Pull back information

export const selectOrigin = (state) => state.nav.origin;
export const seleDestination = (state) => state.nav.origin;
export const selectTravelTimeInformation = (state) => state.nav.origin;

export default NavSlices.reducer;