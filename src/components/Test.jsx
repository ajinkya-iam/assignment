import React from 'react'

const Test = () => {
    return (
        <div
            className={`flex flex-col h-screen ${isCollapsed ? "w-20" : "w-64"
                } bg-gray-50 border-r transition-all duration-300`}
        >
            {/* Toggle Button */}
            <div className="flex items-center justify-between h-20 border-b px-4">
                {!isCollapsed && (
                    <img alt="Logo" className="h-8" />
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 rounded-md hover:bg-gray-200"
                >
                    <FiMenu className="text-gray-600" />
                </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-4 py-4 space-y-2">
                <a
                    href="#"
                    className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
                        } px-4 py-2 rounded-md hover:bg-gray-100 text-gray-600`}
                >
                    <RxDashboard />
                    {!isCollapsed && <span>Dashboard</span>}
                </a>
                <a
                    href="#"
                    className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
                        } px-4 py-2 rounded-md hover:bg-gray-100 text-gray-600`}
                >
                    <TbTriangle />
                    {!isCollapsed && <span>Lead Finder</span>}
                </a>
                <a
                    href="#"
                    className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
                        } px-4 py-2 rounded-md bg-orange-500 text-white`}
                >
                    <TbTriangle />
                    {!isCollapsed && <span>Suchverlauf</span>}
                </a>
                <a
                    href="#"
                    className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
                        } px-4 py-2 rounded-md hover:bg-gray-100 text-gray-600`}
                >
                    <RxDashboard />
                    {!isCollapsed && <span>Automatisierungen</span>}
                </a>
                <a
                    href="#"
                    className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
                        } px-4 py-2 rounded-md hover:bg-gray-100 text-gray-600`}
                >
                    <MdSupportAgent />
                    {!isCollapsed && <span>Support</span>}
                </a>
            </nav>

            {/* Footer Section */}
            <div className="px-4 py-6 border-t mt-auto">
                {!isCollapsed && (
                    <div className="text-center text-sm text-gray-500">
                        <p>© justgetleads Inc.</p>
                        <a
                            href="#"
                            className="text-gray-500 underline hover:text-gray-700"
                        >
                            Terms & Condition
                        </a>{" "}
                        |{" "}
                        <a
                            href="#"
                            className="text-gray-500 underline hover:text-gray-700"
                        >
                            Privacy
                        </a>
                    </div>
                )}

                <div
                    className={`mt-4 flex ${isCollapsed ? "justify-center" : "justify-around"
                        } items-center`}
                >
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
                        <GoSun />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
                        <BsMoon />
                    </button>
                </div>

                {!isCollapsed && (
                    <div className="mt-4 text-center text-xs text-gray-400">
                        <p>CET 10:33 - 19.07.2024</p>
                        <p>v1.1.10</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Test