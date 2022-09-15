import logo from "../assets/img/logo.png";
import ButtonYellow from "../component/Element/ButtonYellow";
import Card from "../component/Element/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import md5 from "md5";
import axios from "axios";
import { allowUser } from "../helper/auth";
import swal from "sweetalert";
import Loading from "../component/Element/Loading";
function Login() {

    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
    const loginHandler = (e: any) => {
        setLoading(true);
        e.preventDefault();
        axios.post('api/v1/user/login', {
            'userid': username,
            'password': md5(password)
        }, {
            withCredentials: false, headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then((response) => {
                if (allowUser(response.data)) {
                    nav("/");
                } else {
                    swal("Gagal", "Dilarang Akses", "error");
                    setLoading(false);
                }
            })
            .catch((error) => {
                swal("Gagal", "Username atau Password salah!", "error");
                setLoading(false);
            })
    }
    return (
        <div className="flex bg-gray-100 h-screen justify-center items-center">
            <div className=" md:w-2/3">
                {loading ? <Loading /> : null}
                <Card>
                    <div className=" p-3">
                        <div className=" p-10 text-black justify-center items-center flex w-full font-bold text-5xl">
                            <div className=" w-2/5 "><img src={logo} alt="" /></div><br />

                        </div>
                        <div className=" text-lg "><b> UNIVERSITAS EKASAKTI</b></div>
                        <div className=" text-sm "><i> Google Data Studio </i></div>
                        <div className=" md:py-3 text-left" >
                            <form onSubmit={loginHandler} >
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-500 ">Username</label>
                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-500 ">Password</label>
                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <div className=" text-center"><ButtonYellow action={loginHandler} ><i>Sign In</i></ButtonYellow> </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Login;