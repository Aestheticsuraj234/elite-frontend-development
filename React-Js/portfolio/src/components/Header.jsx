import { useGithubStore } from "@/store";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const userId = 123;
    const { githubUser , resetGithubUser} = useGithubStore()

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">

                       {
                            githubUser ? (
                                <>
                                 <div className="flex items-center ml-4 gap-2">
                                      <img
                                        src={githubUser?.avatar_url}
                                        alt="profile"
                                        className="w-8 h-8 rounded-full"
                                      />
                                      <p className="text-gray-800 text-sm font-medium ml-2">
                                        {githubUser?.login}
                                      </p>
                                 </div>
                                 <Link
                            to="#"
                            onClick={()=>resetGithubUser()}
                            className="mx-4 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Reset
                        </Link>
                                 
                                 </>
                            ):(
                                <Link
                                    to="#"
                                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Log in
                                </Link>
                            )
                       }
                        
                        <Link
                            to="#"
                            className="mx-4 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to=""
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive && "text-orange-700"} `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive && "text-orange-700"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive && "text-orange-700"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive && "text-orange-700"}`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={`/user/${userId}`}
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive && "text-orange-700"}`
                                    }
                                >
                                    User
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
