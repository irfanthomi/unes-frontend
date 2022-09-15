
import { useRef, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { removeLocalStorage } from '../../helper/auth';
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo-header.png";
import { List } from '../Menu/List';
import { FaAngleDown } from 'react-icons/fa';
function Navbar(props: any) {
    const nav = useNavigate();
    const [menu, setMenu] = useState(false);
    const handleLogout = () => {
        removeLocalStorage("user");
        nav("/login");
    }
    const navRef = useRef<HTMLDivElement>(null);
    const showNav = () => {
        if (menu) {
            setMenu(!menu);
            navRef.current?.classList.toggle('hidden')
        } else {
            setMenu(true);
            navRef.current?.classList.remove('hidden')
        }
        console.log(menu);
    }
    return (
        <>
            <nav className="   w-full z-10 bg-yellow-300 shadow">
                <div className=" grid grid-cols-12 relative  h-16">
                    <div className=' md:flex col-span-2 px-2  hidden  h-full items-center shadow shadow-gray-500  bg-yellow-500 '>
                        <div className=" w-full  ">
                            <img className='' src={logo} alt="" />
                        </div>


                    </div>

                    <div onClick={showNav} className=" md:hidden btn-mobile block bg-yellow-500  p-6 w-16 z-50 ">
                        <svg className=" Path_796" viewBox="2.5 2.5 19 19">
                            <path id="Path_796" d="M 7 11.5 C 4.514718532562256 11.5 2.5 9.485280990600586 2.5 7 C 2.5 4.514718532562256 4.514719009399414 2.5 7 2.5 C 9.485280990600586 2.5 11.5 4.514719009399414 11.5 7 C 11.5 9.485280990600586 9.485280990600586 11.5 7 11.5 Z M 7 21.5 C 4.514718532562256 21.5 2.5 19.48528099060059 2.5 17 C 2.5 14.51471900939941 4.514719009399414 12.5 7 12.5 C 9.485280990600586 12.5 11.5 14.51471900939941 11.5 17 C 11.5 19.48528099060059 9.485280990600586 21.5 7 21.5 Z M 17 11.5 C 14.51471900939941 11.5 12.5 9.485280990600586 12.5 7 C 12.5 4.514718532562256 14.51471900939941 2.5 17 2.5 C 19.48528099060059 2.5 21.5 4.514719009399414 21.5 7 C 21.5 9.485280990600586 19.48528099060059 11.5 17 11.5 Z M 17 21.5 C 14.51471900939941 21.5 12.5 19.48528099060059 12.5 17 C 12.5 14.51471900939941 14.51471900939941 12.5 17 12.5 C 19.48528099060059 12.5 21.5 14.51471900939941 21.5 17 C 21.5 19.48528099060059 19.48528099060059 21.5 17 21.5 Z">
                            </path>
                        </svg>
                    </div>
                    <div className=" col-span-10 flex-1 flex  md:px-2 px-0 justify-end">
                        <div onClick={handleLogout} className=' cursor-pointer flex justify-center items-center '>
                            <div className=' text-2xl'> <FiLogOut /></div>
                            <div className=' px-1'> <b>Logout</b></div>
                        </div>
                    </div>

                </div >
            </nav >
            <div className=" grid grid-cols-12  relative" aria-label="Sidebar">
                <div ref={navRef} className=" hidden md:block transition-all shadow shadow-gray-500  duration-1000     md:col-span-2 md:relative md:top-0  absolute  bg-yellow-500  ">
                    <ul className=" mt-2">
                        {List.map((item, index) => {
                            if (item.sub) {
                                return (
                                    <li key={index} className=' hover:h-full h-10 overflow-hidden'>
                                        <div className="flex justify-between items-center px-4 py-2 text-base font-normal  text-white hover:bg-[#3838380f]"    >
                                            <div className='flex'>
                                                <span className="ml-3">{item.icon}</span>
                                                <span className="ml-3">{item.name}</span>
                                            </div>
                                            <span className="ml-3"><FaAngleDown /></span>
                                        </div>
                                        <ul className="  pl-10">
                                            {
                                                item.sub.map((sub, index) => {
                                                    return (
                                                        <li key={index} >
                                                            <NavLink to={sub.link} className=" px-4 py-2 flex   text-white  items-center  hover:bg-[#3838380f]" >
                                                                <span className="ml-3">{sub.name}</span>
                                                            </NavLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={index}>
                                        <NavLink className={({ isActive }) => isActive ? "flex sideActive items-center px-4 py-2 text-base font-normal  text-white" : "flex items-center px-4 py-2 text-base font-normal  text-white hover:bg-[#3838380f]"} to={item.link}   >
                                            <span className="ml-3">{item.icon}</span>
                                            <span className="ml-3">{item.name}</span>
                                        </NavLink>
                                    </li>


                                );
                            }

                        })}

                    </ul>
                </div>
                <div className=" md:col-span-10 col-span-12">
                    {props.children}
                </div>
            </div>

        </>
    );
}
export default Navbar;