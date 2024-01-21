import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        userDetails: {},
        emails: []
    },
    reducers: {
        setUserDetails: (state, data) => {
            state.userDetails = data.payload
        },
        setUserEmails: (state, data) => {
            state.emails = data.payload
        }
    }
})

export const {
    toggleMenu, 
    closeMenu,
    setActiveApp,
    setUserDetails,
    setEmails } = appSlice.actions;
export default appSlice.reducer