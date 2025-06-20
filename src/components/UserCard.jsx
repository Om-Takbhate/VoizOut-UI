
const UserCard = ({ person }) => {
    return (
        <li key={person.name}>
            <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"} className="size-16 rounded-full" />
                <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
            </div>
        </li>
    )
}

export default UserCard