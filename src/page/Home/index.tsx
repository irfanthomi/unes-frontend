import { isAuth } from "../../helper/auth";
import { Navigate } from "react-router-dom";
import Main from "../../component/Navbar/Main";
function Home() {
    return (

        <>
            {isAuth() ? null : <Navigate to="/login" />}
            <Main>
                <div>
                    <div className=" text-black h-screen justify-center items-center flex w-full font-bold text-5xl">
                    </div>
                </div>
            </Main>
        </>
    );
}

export default Home;