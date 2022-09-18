import { FC, useRef } from "react"

type Props = {
    column: any
    data: any
    nextPage: () => void
    prevPage: () => void
    limitPage(event: any): any
    chichildren?: JSX.Element | JSX.Element[];
}


const Table: FC<Props> = (props) => {
    const row = props.data.items
    const meta = props.data.meta
    const pageRef = useRef<HTMLDivElement>(null)
    console.log(row)

    return (<div className="min-w-screen min-h-screen flex justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full">
            <div className="bg-white shadow-md rounded m-6 overflow-scroll ">

                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            {props.column.map((item: any, index: any) => (
                                <th key={index} className="py-3 px-6 text-center">{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {row?.map((item: any, index: any) => {
                            return (
                                <tr key={index} title={item.nama} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">

                                            <span className="font-medium">{index + 1}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                    width="24" height="24"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                                </svg>
                                            </div>
                                            <span className="font-medium">{item.nama} </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img alt="fdg" className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                            </div>
                                            <span>{item.email} </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            <img alt="fs" className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                            <img alt="fs" className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg" />
                                            <img alt="fh" className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg" />
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </div>
                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
            <div className=" min-w-max  mx-6 flex md:justify-end justify-center">

                <div className="md:flex block  h-full">
                    <div className="  p-1">
                        <nav aria-label="Page h-full  navigation example">
                            <div className="h-full">
                                <select onChange={props.limitPage} className="py-2 px-3 leading-tight text-gray-500 rounded border border-gray-300 h-full">
                                    <option value="10">10</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                        </nav>
                    </div>
                    <div className="p-1 ">

                        <nav aria-label="Page   navigation example">
                            <ul className="inline-flex -space-x-px">
                                <li>
                                    <div className={" cursor-pointer py-2 px-3 ml-0 leading-tight text-gray-500  rounded-l border border-gray-300  " + (meta?.currentPage > 1 ? 'bg-white hover:bg-gray-100' : 'bg-gray-200  ')} onClick={props.prevPage}>Previous</div>
                                </li>
                                {(() => {
                                    let li = [];
                                    for (let i = 1; i <= 5; i++) {
                                        // if (i === meta?.currentPage) {
                                        //     pageRef.current?.classList.toggle('bg-red')
                                        // }
                                        // console.log(pageRef.current?.outerText + " " + meta?.currentPage)

                                        li.push(
                                            <li key={i}>
                                                <div ref={pageRef} className={"cursor-pointer py-2 px-3 leading-tight text-gray-500 border border-gray-300 " + (meta?.currentPage === i ? 'bg-gray-600 text-white ' : 'bg-white')}>{i}</div>
                                            </li>
                                        );
                                    }
                                    return li;
                                })()}
                                <li >
                                    <div className={"cursor-pointer py-2 px-3 leading-tight text-gray-500 border border-gray-300 " + (meta?.currentPage === meta?.totalPages ? 'bg-gray-600 text-white ' : 'bg-white')}>{meta?.totalPages}</div>
                                </li>
                                <li>
                                    <div className={" cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white rounded-r border border-gray-300 " + (meta?.currentPage >= meta?.totalPages ? 'bg-gray-200  ' : 'bg-white hover:bg-gray-100')} onClick={props.nextPage}>Next</div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    </div >);
}

export default Table;