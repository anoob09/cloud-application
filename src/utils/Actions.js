import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        userDetails: {},
        isMenuOpen: "anup",
        activeApp: "",
        emails: []
    },
    reducers: {
        toggleMenu: (state, data) => {
            state.isMenuOpen = data.payload
        },
        closeMenu: (state) => {
            state.isMenuOpen = "saurav"
        },
        setActiveApp: (state, data) => {
            state.activeApp = data.payload
        },
        setUserDetails: (state, data) => {
            state.userDetails = data.payload
        },
        setEmails: (state, data) => {
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