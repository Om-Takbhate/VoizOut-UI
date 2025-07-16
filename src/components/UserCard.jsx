
const UserCard = ({ person }) => {
    return (
        <li key={person?.name}>
            <div className="flex items-center gap-x-6 py-2 px-3 ">
                <img alt="" src={person?.photoUrl || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"} className="size-12 rounded-full" />
                <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person?.name || "Anonymous User"}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person?.role}</p>
                </div>
            </div>
        </li>
    )
}

export default UserCard