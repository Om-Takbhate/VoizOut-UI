import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Skills = () => {

    const user = useSelector(store => store.user.user)

    if(user == null) return;
    return (
        <Card
            shadow={true}
            className="border border-gray-300 rounded-2xl mt-5"
        >
            <CardBody>
                <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div>
                            <Typography color="amber" variant="h4">
                                Skills
                            </Typography>
                            <div className="flex gap-4 flex-wrap">
                                {
                                    user.skills.map(skill => (
                                        <Button
                                            key={skill}
                                            className="border-gray-300 flex items-center gap-2 hover:bg-indigo-500 hover:text-white cursor-pointer" >
                                            {skill}
                                        </Button>
                                    ))
                                }
                            </div>
                        </div>
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
    )
}

export default Skills