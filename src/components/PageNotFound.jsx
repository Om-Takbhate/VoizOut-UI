import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0">
                <div className="absolute top-0 -z-10 h-full w-full bg-gray-200 [&>div]:absolute [&>div]:bottom-auto [&>div]:left-auto [&>div]:right-0 [&>div]:top-0 [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:-translate-x-[30%] [&>div]:translate-y-[20%] [&>div]:rounded-full [&>div]:bg-[rgba(200,110,225,0.75)] [&>div]:opacity-50 [&>div]:blur-[80px]">
                    <div></div>

                </div>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
                <div className="max-w-3xl text-center"></div>
                <div className='min-h-screen isolate'>

                    <main className="grid min-h-screen  place-items-center w-full backdrop-blur-sm px-6 py-24 sm:py-32 lg:px-8">
                        <div className="text-center">
                            <p className="text-base font-semibold text-indigo-600">404</p>
                            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                                Page not found
                            </h1>
                            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                Sorry, we couldn’t find the page you’re looking for.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/home"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Go back home
                                </Link>
                                <a href="#" className="text-sm font-semibold text-gray-900">
                                    Contact support <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
