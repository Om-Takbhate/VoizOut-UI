import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import appReducer from "./slices/appSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer
    }
})

export default appStore