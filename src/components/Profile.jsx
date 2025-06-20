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

function Profile() {

    const user = useSelector(store => store.user.user)
    const params = useParams()

    console.log(params)

    if (user == null) return;
    return (
        <section className="container mx-auto px-4 sm:px-8 py-20 min-h-screen">
            <Card
                shadow={false}
                className="border border-gray-300 rounded-2xl"
            >
                <CardHeader shadow={false} className="h-60 !rounded-lg">
                    <img
                        src="https://marketplace.canva.com/EAGCv5CFLkI/1/0/1600w/canva-grey-and-black-simple-marketing-manager-linkedin-banner-b6Jvyrdp9RE.jpg"
                        alt="dark"
                        height={1024}
                        width={1024}
                        className="w-full h-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
                        <div className="flex flex-col sm:flex-row mx-auto sm:mx-0 sm:justify-end items-center gap-3">
                            <Avatar src={user?.photoUrl || "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc="} alt="avatar" className="rounded" variant="rounded" />
                            <div>
                                <Typography color="amber" className="text-center sm:text-start font-bold sm:text-xl" variant="h6">
                                    {user?.name}
                                </Typography>
                                <Typography
                                    variant="small"
                                    className="font-normal text-gray-600"
                                >
                                    {user.emailId}
                                </Typography>
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
                        variant="small"
                        className="font-normal text-gray-600 mt-6"
                    >
                        {user.bio}
                    </Typography>
                </CardBody>
            </Card>
            <Skills />
        </section>
    );
}

export default Profile;