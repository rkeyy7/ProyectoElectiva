"use client";

function Header() {
    return (
        <header className=" sticky top-0 z-50">
            <nav className=" bg-gray-100 border-gray-300 shadow-md w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="/"
                        className="flex items-center space-x-6 rtl:space-x-reverse"
                    >
                        <img
                            src="/img/logo_negro.png"
                            alt="Logo ecoswap"
                            width={40}
                            height={40}
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-700">
                            Eco<span className="text-gray-800">Swap</span>
                        </span>
                    </a>


                    {/* Menu */}
                    <div className="flex-grow flex justify-center">
                        <ul className="flex space-x-8 lg:flex-row lg:space-x-8 lg:mt-">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 px-3 rounded md:p-0 text-gray-800 hover:text-green-700"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/aboutUs"
                                    className="block py-2 px-3 rounded md:p-0 text-gray-800 hover:text-green-700"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/ourTeam"
                                    className="block py-2 px-3 rounded md:p-0 text-gray-800 hover:text-green-700"
                                >
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/servicesProducts"
                                    className="block py-2 px-3 rounded md:p-0 text-gray-800 hover:text-green-700"
                                >
                                    Services & Products
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;
