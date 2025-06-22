import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'

const Skills = ({ skills }) => {
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
                            <div className="flex gap-4 mt-4 flex-wrap">
                                {
                                    skills?.map(skill => (
                                        <button
                                            key={skill}
                                            className="bg-black flex items-center gap-2 cursor-pointer py-1 px-3 text-white rounded-md"  >
                                            {skill}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default Skills