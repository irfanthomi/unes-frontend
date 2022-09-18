import { useLocation } from 'react-router-dom';
type showAction = {
    showSidebar: any
    setShowSidebar: any
}
export default function AdminNavbar({ showSidebar, setShowSidebar }: showAction) {
    const location = useLocation().pathname;
    return (
        <nav className=" bg-slate-500 md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <button
                        onClick={() => setShowSidebar('left-0')}
                    >
                        hjll
                    </button>
                    <div
                        className={`absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-64' : '-left-64'
                            } z-50 transition-all duration-300`}
                    >
                        <button
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            ghjhgj
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
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
