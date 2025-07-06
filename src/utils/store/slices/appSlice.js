import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        activeTab: "Home",
        toast: null
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        showToast: (state, action) => {
            console.log(action.payload)
            state.toast = action.payload
        },
        hideToast: (state, action) => {
            state.toast = null
        }
    }
})

export const { setActiveTab, showToast, hideToast } = appSlice.actions
export default appSlice.reducer
