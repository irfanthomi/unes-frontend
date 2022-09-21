import axios from "axios";
import { useState } from "react"
import { FaPlus, FaUser } from "react-icons/fa"
import swal from "sweetalert";

type Porps = {
    children: React.ReactNode;
    close: () => void
}

const FormRegister = (porps: Porps) => {
    const [register, setRegister] = useState({
        username: '',
        nama: '',
        email: '',
        password: '',
        level: ''
    })
    const registerHeandler = async (e: any) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })

    }

    const submitHeandler = async (event: any) => {
        event.preventDefault()
        await axios.post('api/admin', register).then(e => {
            console.log(register)

            porps.close()
            swal("Success..", "Data Ditambahkan", "success");
        }).catch(err => {
            alert(err)
        })
    }


    return (
        <form onSubmit={submitHeandler.bind(this)} action="#">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div className="w-full  text-xl flex justify-start items-center text-gray-600 mb-3">
                    <FaPlus />  <FaUser /> <span className=" px-4 ">Add User</span>
                </div>
                <label htmlFor="username" className="flex mt-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">  Username</label>
                <input value={register.username} onChange={registerHeandler} id="username" name="username" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Username" />

                <label htmlFor="nama" className="flex mt-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">  Nama</label>
                <input value={register.nama} onChange={registerHeandler} id="nama" name="nama" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Nama" />

                <label htmlFor="email" className="flex mt-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">  Email</label>
                <input value={register.email} onChange={registerHeandler} id="email" name="email" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Email" />

                <label htmlFor="password" className="flex mt-2 text-gray-800 text-sm font-bold leading-tight tracking-normal">  Password</label>
                <input value={register.password} onChange={registerHeandler} id="password" name="password" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Password" />


                <label htmlFor="expiry" className=" flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Birth </label>
                <div className="relative mb-5 mt-2">
                    <input type="date" name="birth" className="p-3 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                </div>

                <label htmlFor="expiry" className=" flex text-gray-800 text-sm font-bold leading-tight tracking-normal">Role </label>
                <div className="flex mb-5 mt-2 justify-around ">
                    <label className="inline-flex items-center">
                        <input checked={register.level === "admin"} onChange={registerHeandler} name="level" value="admin" type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
                        <span className="ml-2 text-gray-700">Administrator</span>
                    </label>

                    <label className="inline-flex items-center ">
                        <input checked={register.level === "staf"} onChange={registerHeandler} name="level" value="staf" type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                        <span className="ml-2 text-gray-700">Staf</span>
                    </label>
                </div>

                <div className="flex items-center justify-start w-full">
                    <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
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
    )
}

export default FormRegister;