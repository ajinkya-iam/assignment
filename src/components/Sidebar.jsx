// import React, { useState } from "react";
// import { BsMoon } from "react-icons/bs";
// import { GoSun } from "react-icons/go";
// import { MdSupportAgent } from "react-icons/md";
// import { RxDashboard } from "react-icons/rx";
// import { TbTriangle } from "react-icons/tb";
// import { FiMenu } from "react-icons/fi";

// const Sidebar = () => {
//     const [isCollapsed, setIsCollapsed] = useState(false);

//     return (
//         <div className="flex h-screen">
//             {/* Sidebar */}
//             <div
//                 className={`flex flex-col ${isCollapsed ? "w-20" : "w-64"
//                     } bg-gray-50 border-r transition-all duration-300`}
//             >
//                 {/* Toggle Button */}
//                 <div className="flex items-center justify-between h-20 border-b px-4">
//                     {!isCollapsed && (
//                         <img
//                             alt="Logo"
//                             className="h-8"
//                             src="https://via.placeholder.com/120x40" // Replace with your logo
//                         />
//                     )}
//                     <button
//                         onClick={() => setIsCollapsed(!isCollapsed)}
//                         className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200 transition-all duration-200"
//                     >
//                         {isCollapsed ? (
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6 text-gray-600"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M15 19l-7-7 7-7"
//                                 />
//                             </svg>
//                         ) : (
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-6 w-6 text-gray-600"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M9 5l7 7-7 7"
//                                 />
//                             </svg>
//                         )}
//                     </button>
//                 </div>

//                 {/* Menu Items */}
//                 <nav className="flex-1 px-4 py-4 space-y-2">
//                     <a
//                         href="#"
//                         className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
//                             } px-4 py-2 rounded-md hover:bg-gray-100 text-gray-600`}
//                     >
//                         <RxDashboard />
//                         {!isCollapsed && <span>Dashboard</span>}
//                     </a>
//                     <a
//                         href="#"
//                         className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
//                             } px-4 py-2 rounded-md hover:bg-gray-100 text-gray-600`}
//                     >
//                         <TbTriangle />
//                         {!isCollapsed && <span>Lead Finder</span>}
//                     </a>
//                     <a
//                         href="#"
//                         className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
//                             } px-4 py-2 rounded-md bg-orange-500 text-white`}
//                     >
//                         <TbTriangle />
//                         {!isCollapsed && <span>Suchverlauf</span>}
//                     </a>
//                     <a
//                         href="#"
//                         className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
//                             } px-4 py-2 rounded-md hover:bg-gray-100 text-gray-600`}
//                     >
//                         <RxDashboard />
//                         {!isCollapsed && <span>Automatisierungen</span>}
//                     </a>
//                     <a
//                         href="#"
//                         className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
//                             } px-4 py-2 rounded-md hover:bg-gray-100 text-gray-600`}
//                     >
//                         <MdSupportAgent />
//                         {!isCollapsed && <span>Support</span>}
//                     </a>
//                 </nav>

//                 {/* Footer Section */}
//                 <div className="px-4 py-6 border-t mt-auto">
//                     {!isCollapsed && (
//                         <div className="text-center text-sm text-gray-500">
//                             <p>© justgetleads Inc.</p>
//                             <a
//                                 href="#"
//                                 className="text-gray-500 underline hover:text-gray-700"
//                             >
//                                 Terms & Condition
//                             </a>{" "}
//                             |{" "}
//                             <a
//                                 href="#"
//                                 className="text-gray-500 underline hover:text-gray-700"
//                             >
//                                 Privacy
//                             </a>
//                         </div>
//                     )}

//                     <div
//                         className={`mt-4 flex ${isCollapsed ? "justify-center" : "justify-around"
//                             } items-center`}
//                     >
//                         <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
//                             <GoSun />
//                         </button>
//                         <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
//                             <BsMoon />
//                         </button>
//                     </div>

//                     {!isCollapsed && (
//                         <div className="mt-4 text-center text-xs text-gray-400">
//                             <p>CET 10:33 - 19.07.2024</p>
//                             <p>v1.1.10</p>
//                         </div>
//                     )}
//                 </div>

//             </div>

//             {/* Main Content Area */}
//             <div className="flex flex-col flex-1">
//                 {/* Navbar */}
//                 <div className="flex items-center justify-between h-20 px-4 bg-white border-b">
//                     <p className="text-lg font-semibold">Navigation / Top Bar</p>
//                     <div className="flex items-center space-x-4">
//                         <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
//                             {/* Example Notification Icon */}
//                             <MdSupportAgent className="text-gray-600 w-6 h-6" />
//                         </button>
//                         <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">
//                             SA
//                         </div>
//                     </div>
//                 </div>

//                 {/* Main Content */}
//                 <div className="flex-1 p-6 bg-gray-100">
//                     <h1 className="text-2xl font-bold">Dashboard</h1>
//                     <p className="mt-2 text-gray-600">
//                         This is the main content area.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;


import React, { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbTriangle } from "react-icons/tb";
import CompanyProfile from "../page/CompanyProfile";
import { Popover, Switch } from "antd";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    const renderContent = () => {
        switch (activeMenu) {
            case "Dashboard":
                return <p>Welcome to the Dashboard! Here is your overview.</p>;
            case "Lead Finder":
                return <p>Discover new leads with our advanced tools!</p>;
            case "Suchverlauf":
                return <CompanyProfile />;
            case "Automatisierungen":
                return <p>Automate your tasks and workflows here.</p>;
            case "Support":
                return <p>Need help? Contact our support team.</p>;
            default:
                return <p>Select a menu item to see its content.</p>;
        }
    };

    const text = <span>Title</span>;
    const content = (
        <div>
            {[
                { name: "Dashboard", icon: <RxDashboard /> },
                { name: "Lead Finder", icon: <TbTriangle /> },
                { name: "Suchverlauf", icon: <TbTriangle /> },
                { name: "Automatisierungen", icon: <RxDashboard /> },
                { name: "Support", icon: <MdSupportAgent /> },
            ].map((menu) => (
                <a
                    key={menu.name}
                    href="#"
                    className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
                        } px-4 py-2 rounded-md ${activeMenu === menu.name
                            ? "bg-orange-500 text-white"
                            : "hover:bg-gray-100 text-gray-600"
                        }`}
                    onClick={() => setActiveMenu(menu.name)}
                >
                    {menu.icon}
                    {!isCollapsed && <span>{menu.name}</span>}
                </a>
            ))}
        </div>
    );

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`flex flex-col ${isCollapsed ? "w-20" : "w-64"} bg-gray-50 border-r transition-all duration-300`}
            >
                {/* Toggle Button */}
                <div className="flex items-center justify-between h-20 border-b px-4">
                    {!isCollapsed && (
                        <img
                            alt="Logo"
                            className="h-8"
                            src="https://via.placeholder.com/120x40" // Replace with your logo
                        />
                    )}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-200 transition-all duration-200"
                    >
                        {isCollapsed ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 px-4 py-4 space-y-2">
                    {[
                        { name: "Dashboard", icon: <RxDashboard /> },
                        { name: "Lead Finder", icon: <TbTriangle /> },
                        { name: "Suchverlauf", icon: <TbTriangle /> },
                        { name: "Automatisierungen", icon: <RxDashboard /> },
                        { name: "Support", icon: <MdSupportAgent /> },
                    ].map((menu) => (
                        <a
                            key={menu.name}
                            href="#"
                            className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"
                                } px-4 py-2 rounded-md ${activeMenu === menu.name
                                    ? "bg-orange-500 text-white"
                                    : "hover:bg-gray-100 text-gray-600"
                                }`}
                            onClick={() => setActiveMenu(menu.name)}
                        >
                            {menu.icon}
                            {!isCollapsed && <span>{menu.name}</span>}
                        </a>
                    ))}
                </nav>

                {/* <div
                    className={`m-6 bg-gray-700 p-2 rounded-2xl flex ${isCollapsed ? "justify-center" : "justify-around"
                        } items-center`}
                >
                    <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300">
                        <GoSun color="white" />
                    </button>
                    {isCollapsed || <Switch defaultChecked />}
                    <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300">
                        <BsMoon color="white" />
                    </button>
                </div> */}

                <div
                    className={`m-6 bg-gray-700 p-2 rounded-2xl flex 
        ${isCollapsed ? "justify-center" : "justify-around"} 
        items-center`}
                >
                    {/* Light Mode Button */}
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-600 md:hover:bg-gray-300 transition-all duration-200"
                    >
                        <GoSun className="text-white" />
                    </button>

                    {/* Theme Switch */}
                    {!isCollapsed && (
                        <div className="hidden sm:block">
                            <Switch defaultChecked className="md:scale-125" />
                        </div>
                    )}

                    {/* Dark Mode Button */}
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-600 md:hover:bg-gray-300 transition-all duration-200"
                    >
                        <BsMoon className="text-white" />
                    </button>
                </div>



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

                    {!isCollapsed && (
                        <div className="mt-4 text-center text-xs text-gray-400">
                            <p>CET 10:33 - 19.07.2024</p>
                            <p>v1.1.10</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                {/* Navbar */}
                <div className="flex items-center justify-between h-20 px-4 bg-white border-b">
                    <p className="text-lg font-semibold"></p>
                    <div className="flex items-center space-x-4">
                        <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
                            {/* Example Notification Icon */}
                            <MdSupportAgent className="text-gray-600 w-6 h-6" />
                        </button>
                        <Popover placement="bottom" title={text} content={content}>
                            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                                SA
                            </div>
                        </Popover>

                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-gray-100">
                    <div className="mt-2 text-gray-600">{renderContent()}</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
