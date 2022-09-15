import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import AdminNavbar from './AdminNavbar';
import { Menu } from "./Manu.admin";
export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <div


                        className="mt-2 text-center w-full inline-block"
                    >
                        <div color="gray">Material Tailwind</div>
                    </div>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            {Menu.map((item, index) => {
                                return (
                                    <li key={index} className="rounded-lg mb-4">
                                        <NavLink
                                            to={item.url}

                                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        >
                                            {/* <Icon name={item.icon} size="2xl" /> */}
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
