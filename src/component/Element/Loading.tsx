
import ReactLoading from "react-loading";

const Loading = () => (
    <div className="flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-gray-700 opacity-50" >
        <div className="flex flex-wrap content-center justify-center w-10 h-100 bg-blue`;">
            <ReactLoading type="spin" color="#ffffff" />
        </div>
    </div >
);

export default Loading;
