import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import Skills from "./Skills";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import UserProfileSkeleton from "./skeletons/UserProfileSkeleton";

function Profile() {

    const [userProfile, setUserProfile] = useState()
    const user = useSelector(store => store.user.user)
    const params = useParams()


    const fetchUser = async () => {
        try {
            const userId = params.userId
            const res = await axios.get(BASE_URL + "/api/v1/user/profile/" + userId, { withCredentials: true })

            setUserProfile(res.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (params.userId && params.userId != null) {
            fetchUser()
        }
        else {
            console.log("this user")
            setUserProfile(user)
        }
    }, [params, user])

    if (userProfile == null) {
        return <UserProfileSkeleton />
    }

    return (
        <section className="container mx-auto px-4 sm:px-8 py-20 min-h-screen">
            <Card
                shadow={false}
                className="border border-gray-300 rounded-2xl"
            >
                <img
                    src="https://img.freepik.com/premium-photo/bright-blue-geometric-modern-design-template_665346-4755.jpgcl"
                    alt="profile-background-image"
                    className="w-full h-48 object-cover"
                />
                <CardBody>
                    <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
                        <div className="flex flex-col sm:flex-row mx-auto sm:mx-0 sm:justify-end items-center gap-3">
                            <Avatar src={userProfile?.photoUrl || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"} alt="avatar" className="" variant="circular" />
                            <div>
                                <Typography variant="h6" color="amber" className="text-center sm:text-start font-bold sm:text-xl">
                                    {userProfile?.name}
                                </Typography>
                                {
                                    userProfile.emailId &&
                                    <Typography
                                        variant="small"
                                        className="font-normal text-gray-600"
                                    >
                                        {userProfile.emailId}
                                    </Typography>
                                }
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <Button
                                variant="outlined"
                                className="border-gray-300 flex items-center gap-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                            >
                                <i className="fa fa-github text-base" />
                                Github
                            </Button>
                            <Button
                                variant="outlined"
                                className="border-gray-300 flex items-center gap-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                            >
                                <i className="fa-brands fa-twitter" />
                                Twitter
                            </Button>
                            <Button
                                variant="outlined"
                                className="border-gray-300 flex items-center gap-2 hover:bg-indigo-500 hover:text-white cursor-pointer"
                            >
                                <i className="fa-brands fa-medium" />
                                Medium
                            </Button>
                        </div>
                    </div>
                    <Typography
                        variant="paragraph"
                        className="font-normal text-gray-600 mt-6"
                    >
                        {userProfile.bio}
                    </Typography>
                </CardBody>
            </Card>
            <Skills skills={userProfile.skills} showBorder={true} />
        </section>
    );
}

export default Profile;