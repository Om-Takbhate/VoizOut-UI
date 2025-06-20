import UserCard from './UserCard'
const TeamMembers = () => {

    const people = [
        {
            name: 'Om Takbhate',
            role: 'Innovator',
            imageUrl:
                'https://avatars.githubusercontent.com/u/191254100?v=4',
        },
        {
            name: 'Sumit Takbhate',
            role: "Co-Innovator",
            imageUrl:
                'https://i.pinimg.com/280x280_RS/5e/e9/40/5ee940eb43090ba5ae6400c16a65803a.jpg'
        },
        {
            name: 'Ganesh Shinde',
            role: "Co-Innovator",
            imageUrl:
                'https://img.freepik.com/premium-photo/tech-savvy-cartoon-boy-content-producer-s-journey_1000124-402.jpg'
        }
    ]

    return (
        <div className=" isolate  py-15 sm:py-32 min-h-screen bg-gray-100">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
            </div>
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                        Meet our leadership
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <UserCard key={person.name} person={person} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TeamMembers