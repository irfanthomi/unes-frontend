import { FaThLarge, FaChevronLeft } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

type showAction = {
    showSidebar: any
    setShowSidebar: any
}
export default function AdminNavbar({ showSidebar, setShowSidebar }: showAction) {
    const location = useLocation().pathname;
    return (
        <nav className=" bg-slate-500 md:ml-64 py-3 md:py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden  ">
                    {/* <button
                        onClick={() => setShowSidebar('left-0')}
                    >
                    </button> */}
                    <button onClick={() => setShowSidebar('left-0')} className=" text-lg hover:text-gray-200 py-2 px-4 bg-white rounded">
                        <FaThLarge />

                    </button>
                    <div
                        className={`absolute top-4 md:hidden ${showSidebar === 'left-0' ? 'left-52' : '-left-52'
                            } z-50 transition-all duration-300`}
                    >
                        <button className=" text-lg text-white py-2 px-2 bg-gray-400 rounded"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <FaChevronLeft />
                        </button>
                    </div>
                </div>
                <div className="flex  justify-between items-center w-full">
                    <h4 className="p-3 uppercase text-white text-md tracking-wider mt-1">
                        {location === '/admin'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>
                    <div className="flex text-white">
                        profile
                    </div>
                </div>
            </div>
        </nav>
    );
}
