import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/store/slices/userSlice";
import { showToast } from "../utils/store/slices/appSlice";


export const login = async (data) => {
    
    const res = await axios.post(BASE_URL + "/auth/login", data, { withCredentials: true })

    return res
}

export const handleLogout = async (dispatch, navigate) => {

    try {

        const data = await axios.post(BASE_URL + "/auth/logout", {}, { withCredentials: true })
        
        dispatch(removeUser())
        navigate("/home")

        dispatch(showToast({
            message: "Logout successful",
            type: "success",
        }))
    }
    catch(err) {
        console.log(err)
        dispatch(showToast({
            message: err.message,
            type: "error",
        }))
    }
}