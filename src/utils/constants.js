
export const testimonials = [
    {
        name: "Prem Kumar",
        message: "I almost fell for a fake internship asking for ₹1500. Thanks to this platform, I saw multiple reviews about the same company and saved myself from being scammed. It's like a safety net for job seekers!",
        photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQFjNJXdQosolA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701187082928?e=2147483647&v=beta&t=M46NxTEMl-xOFcaiQgs9Bs37IIcpfpMnHE6lBJniwZM",
        role: "Student"
    },
    {
        name: "Ajay Rai",
        message: "Finally, a space where we can talk openly about our interview experiences. I found honest reviews that helped me prepare better for my dream company's interview.",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtXSQgqZKqctlw7vw19fL0FIrhnEndBWifA&s",
        role: "Software Engineer 2 | Microsoft"
    },
    {
        name: "Aarav Mehta",
        role: "Frontend Developer at TCS",
        photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        message: "The platform helped me avoid a fake internship offer. Real user reviews gave me clarity before applying."
    },
    {
        name: "Ishita Rao",
        role: "Software Engineer at Accenture",
        photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
        message: "I shared my interview experience and it felt great knowing it could help someone else make a better choice."
    },
    {
        name: "Karan Joshi",
        role: "Backend Developer at Infosys",
        photoUrl: "https://randomuser.me/api/portraits/men/58.jpg",
        message: "Found genuine opportunities and avoided shady ones. A must-use for freshers and job seekers!"
    },
    {
        name: "Priya Nair",
        role: "UI/UX Designer at Zensar",
        photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
        message: "The transparency this platform brings to hiring is unmatched. It truly empowers applicants."
    },
    {
        name: "Rohan Desai",
        role: "DevOps Engineer at Capgemini",
        photoUrl: "https://randomuser.me/api/portraits/men/76.jpg",
        message: "I wish I had this when I was applying for internships. Helps you skip all the fake listings."
    },
    {
        name: "Sneha Kulkarni",
        role: "Product Manager at Mindtree",
        photoUrl: "https://randomuser.me/api/portraits/women/29.jpg",
        message: "This is more than a job portal — it's a community where real voices matter. Brilliant work!"
    }
]

export const userNavigation = [
    {
        name: "Profile",
        href: "/profile",
    },
    {
        name: "My Applied",
        href: "/applied",
    },
    {
        name: "Share experience",
        href: "/experiences/new",
    },
    {
        name: "Edit Profile",
        href: "/profile/edit",
    },
]

export const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Jobs', href: '/opportunities/job' },
    { name: 'Internships', href: '/opportunities/internship' },
    { name: 'Experiences', href: '/experiences' },
]

export const dateStringFunction = (givenDate) => new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}).format(givenDate);



export const validExperienceTypes = ["interview", "company", "scam", "college"]


export const BASE_URL = "https://voizout.onrender.com"
// export const BASE_URL = "http://localhost:3000"

export const DEFAULT_USER_IMAGE = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"


export const PAGE_NOT_FOUND_DESCRIPTION = "Sorry, we couldn’t find the page you’re looking for."

export const protectedRoutes = ["/profile/edit", "/opportunities/job", "/opportunities/internship"]