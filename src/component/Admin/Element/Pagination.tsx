import { FC, useRef } from "react"

type pagination = {
    currentPage: number
    totalPages: number
    selectPage(value: any): any
    limitPage(event: any): () => void
    nextPage: () => void
    prevPage: () => void
}
const Pagination: FC<pagination> = (props) => {
    // function Pagination({ currentPage, props.totalPages, props.selectPage, props.limitPage, props.nextPage, props.prevPage }: pagination) {
    const pageRef = useRef<HTMLDivElement>(null)

    return (
        <div className=" min-w-max  mx-6 flex md:justify-end justify-center">

            <div className="md:flex block  h-full">
                <div className="  p-1">
                    <nav aria-label="Page h-full  navigation example">
                        <div className="  h-full">
                            <select onChange={props.limitPage} className="py-2 px-3 w-full leading-tight text-gray-500 rounded border border-gray-300 h-full">
                                <option value="10">10</option>
                                <option value="25">25</option>
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
                                <div className={" cursor-pointer py-2 px-3 ml-0 leading-tight text-gray-500  rounded-l border border-gray-300  " + (props.currentPage > 1 ? 'bg-white hover:bg-gray-100' : 'bg-gray-200  ')} onClick={props.prevPage}>Previous</div>
                            </li>
                            {(() => {
                                if (props.currentPage > 6) {
                                    return (
                                        <li >
                                            <div className={"cursor-pointer py-2 px-3 leading-tight text-gray-500 border bg-white border-gray-300 "}>1..</div>
                                        </li>
                                    )
                                }
                            })()}
                            {(() => {
                                let li = [];
                                let limitPage = 3
                                let start = props.currentPage > limitPage ? (props.currentPage - limitPage) : 1
                                let end = props.currentPage < (props.totalPages - limitPage) ? props.currentPage + limitPage : props.totalPages

                                for (start; start <= end; start++) {
                                    li.push(
                                        <li key={start}>
                                            <div ref={pageRef} onClick={props.selectPage.bind(this, start)} className={"cursor-pointer py-2 px-3 leading-tight text-gray-500 border border-gray-300 " + (props.currentPage === start ? 'bg-gray-600 text-white ' : 'bg-white')}>{start}</div>
                                        </li>
                                    );
                                }

                                return li;

                            })()}
                            {(() => {
                                if (props.currentPage < (props.totalPages - 3)) {
                                    return (
                                        <li >
                                            <div className={"cursor-pointer py-2 px-3 leading-tight text-gray-500 border border-gray-300 " + (props.currentPage === props.totalPages ? 'bg-gray-600 text-white ' : 'bg-white')}>..{props.totalPages}</div>
                                        </li>
                                    )
                                }
                            })()}
                            <li>
                                <div className={" cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white rounded-r border border-gray-300 " + (props.currentPage >= props.totalPages ? 'bg-gray-200  ' : 'bg-white hover:bg-gray-100')} onClick={props.nextPage}>Next</div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Pagination;