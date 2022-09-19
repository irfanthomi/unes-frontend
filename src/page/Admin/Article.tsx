import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../../component/Admin/Sidebar";
import Table from "../../component/Admin/Article/Table";
const Article = () => {
    const [data, setData] = useState<any>({})
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit])

    // console.log('sd')
    const column = [
        'No',
        'Title',
        'Category',
        'Create At',
        'Create By',
        'Action'
    ]
    const getData = async () => {
        await axios.get('api/artikel?page=' + page + '&limit=' + limit).then((value: any) => {
            console.log('gh')
            setData(value.data)
        })
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
            <Sidebar />
            <div className="overflow-x-auto md:ml-64">
                <div >
                    <Table
                        column={column}
                        data={data}
                        nextPage={nextPage.bind(this)}
                        prevPage={prevPage.bind(this)}
                        limitPage={limitPage.bind(this)}
                    />
                </div>
            </div>
        </>
    );
}

export default Article;