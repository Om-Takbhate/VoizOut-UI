import { UserIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useSelector } from 'react-redux'
import { DEFAULT_USER_IMAGE } from '../utils/constants'

const ProfileImage = () => {
    
    const user = useSelector(store => store.user.user)

    return (
        <>
            <div className="group relative w-46 mx-auto h-46 rounded-full overflow-hidden bg-cover bg-center border border-2" style={{ backgroundImage: "url('https://source.unsplash.com/random/300x200')" }}>
                <img src={user.photoUrl || DEFAULT_USER_IMAGE} alt="" />
            </div>
        </>
    )
}

export default ProfileImage