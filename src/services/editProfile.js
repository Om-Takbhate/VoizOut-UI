import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { showToast } from "../utils/store/slices/appSlice"
import { addUser } from "../utils/store/slices/userSlice"

const editProfileData = async function (dispatch, name, contact, photoUrl, bio, showEmail) {

    try {
        const res = await axios.patch(BASE_URL + "/api/v1/user/profile", { name, contact, photoUrl, bio, showEmail }, {
            withCredentials: true
        })

        const user = res.data.data
        const message = res.data.message

        dispatch(addUser(user))
        console.log(message)

        dispatch(showToast({
            message, type: "success"
        }))
    }
    catch (err) {
        console.log(err)
        const message = err?.response?.data?.message || err.message
        dispatch(showToast({message, type:"failure"}))
    }
}

export default editProfileData