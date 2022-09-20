import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus, FaUser } from "react-icons/fa";
import Button from "../../component/Admin/Element/Button";
import Modal from "../../component/Admin/Element/Modal";
import Sidebar from "../../component/Admin/Sidebar";
import Table from "../../component/Admin/Users/Table";

const Users = () => {
    const [data, setData] = useState<any>({})
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [show, setShow] = useState(false)


    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit])

    const column = [
        'No',
        'Username',
        'Nama',
        'Email',
        'Level',
        'Status',
        'Action'
    ]
    const getData = async () => {
        await axios.get('api/admin?page=' + page + '&limit=' + limit).then((value: any) => {
            console.log('axi')
            setData(value.data)
        })
    }
    const selectPage = async (value: any) => {
        await setPage(value)
    }
    const nextPage = async () => {
        await setPage(page + 1)
    }
    const prevPage = async () => {
        await setPage(page <= 1 ? page : page - 1)
    }
    const limitPage = async (event: any) => {
        await setLimit(event.target.value)
    }
    return (
        <>
            <div className=" relative">
                <Sidebar />
                <div className=" bg-gray-100 overflow-x-auto md:ml-64">
                    <div className=" p-2 md:m-6 m-2" >

                        <Button action={() => setShow(true)} nama="Add User +" icon="<FaPlus/>" />
                        <Table
                            column={column}
                            data={data}
                            nextPage={nextPage.bind(this)}
                            prevPage={prevPage.bind(this)}
                            limitPage={limitPage.bind(this)}
                            selectPage={selectPage.bind(this)}
                        />
                    </div>
                </div>
                <Modal show={show} close={() => setShow(false)} >
                    <form action="">
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                            <div className="w-full  text-xl flex justify-start items-center text-gray-600 mb-3">
                                <FaPlus />  <FaUser /> <span className=" px-4 ">Add User</span>
                            </div>
                            <label htmlFor="name" className="flex mt-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">Owner Name</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            <label htmlFor="email2" className="flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Card Number</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute text-gray-600 flex items-center px-3 border-r h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="3" y="5" width="18" height="14" rx="3" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                        <line x1="7" y1="15" x2="7.01" y2="15" />
                                        <line x1="11" y1="15" x2="13" y2="15" />
                                    </svg>
                                </div>
                                <input id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XXXX - XXXX" />
                            </div>
                            <label htmlFor="expiry" className=" flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Expiry Date</label>
                            <div className="relative mb-5 mt-2">
                                <input type="date" className="p-3 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                            </div>
                            <label htmlFor="cvc" className="flex text-gray-800 text-sm font-bold leading-tight tracking-normal">CVC</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                        <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                    </svg>
                                </div>
                                <input id="cvc" className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                            </div>
                            <div className="w-full text-xl flex justify-start items-center text-gray-600 mb-3">
                                <FaPlus />  <FaUser /> <span className=" px-4 ">Add User</span>
                            </div>
                            <label htmlFor="name" className="flex mt-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">Owner Name</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            <label htmlFor="email2" className="flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Card Number</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute text-gray-600 flex items-center px-3 border-r h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="3" y="5" width="18" height="14" rx="3" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                        <line x1="7" y1="15" x2="7.01" y2="15" />
                                        <line x1="11" y1="15" x2="13" y2="15" />
                                    </svg>
                                </div>
                                <input id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XXXX - XXXX" />
                            </div>
                            <label htmlFor="expiry" className=" flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Expiry Date</label>
                            <div className="relative mb-5 mt-2">
                                <input type="date" className="p-3 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                            </div>
                            <label htmlFor="cvc" className="flex text-gray-800 text-sm font-bold leading-tight tracking-normal">CVC</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                        <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                    </svg>
                                </div>
                                <input id="cvc" className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                            </div>
                            <div className="w-full text-xl flex justify-start items-center text-gray-600 mb-3">
                                <FaPlus />  <FaUser /> <span className=" px-4 ">Add User</span>
                            </div>
                            <label htmlFor="name" className="flex mt-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">Owner Name</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            <label htmlFor="email2" className="flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Card Number</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute text-gray-600 flex items-center px-3 border-r h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="3" y="5" width="18" height="14" rx="3" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                        <line x1="7" y1="15" x2="7.01" y2="15" />
                                        <line x1="11" y1="15" x2="13" y2="15" />
                                    </svg>
                                </div>
                                <input id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XXXX - XXXX" />
                            </div>
                            <label htmlFor="expiry" className=" flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Expiry Date</label>
                            <div className="relative mb-5 mt-2">
                                <input type="date" className="p-3 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                            </div>
                            <label htmlFor="cvc" className="flex text-gray-800 text-sm font-bold leading-tight tracking-normal">CVC</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                        <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                    </svg>
                                </div>
                                <input id="cvc" className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                            </div>
                            <div className="w-full text-xl flex justify-start items-center text-gray-600 mb-3">
                                <FaPlus />  <FaUser /> <span className=" px-4 ">Add User</span>
                            </div>
                            <label htmlFor="name" className="flex mt-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">Owner Name</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            <label htmlFor="email2" className="flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Card Number</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute text-gray-600 flex items-center px-3 border-r h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="3" y="5" width="18" height="14" rx="3" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                        <line x1="7" y1="15" x2="7.01" y2="15" />
                                        <line x1="11" y1="15" x2="13" y2="15" />
                                    </svg>
                                </div>
                                <input id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XXXX - XXXX" />
                            </div>
                            <label htmlFor="expiry" className=" flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Expiry Date</label>
                            <div className="relative mb-5 mt-2">
                                <input type="date" className="p-3 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                            </div>
                            <label htmlFor="cvc" className="flex text-gray-800 text-sm font-bold leading-tight tracking-normal">CVC</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                        <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                    </svg>
                                </div>
                                <input id="cvc" className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                            </div>
                            <div className="flex items-center justify-start w-full">
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3  bg-gray-100 transition-all duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"  >Cancel</button>
                            </div>
                            <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </>
    );
}

export default Users;