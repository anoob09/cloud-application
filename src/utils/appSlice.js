import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: "anup",
        activeApp: "",
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
        }
    }
})

export const {
    toggleMenu, 
    closeMenu,
    setActiveApp } = appSlice.actions;
export default appSlice.reducer