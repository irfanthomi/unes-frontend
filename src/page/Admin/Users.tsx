import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../../component/Admin/Sidebar";
import Table from "../../component/Admin/Users/Table";
const Users = () => {
    const [data, setData] = useState<any>({})
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit])

    const column = [
        'No',
        'Image',
        'Title',
        'Create At',
        'Update At',
        'Create By'
    ]
    const getData = async () => {
        await axios.get('api/admin?page=' + page + '&limit=' + limit).then((value: any) => {
            setData(value.data)
            console.log(value)
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
                        limitPage={limitPage}
                    />
                </div>
                {/* {Object.keys(data.meta)?.map((item: any) => {
                    return (
                        < h1 > sfd </h1>
                    )
                })} */}
            </div>
        </>
    );
}

export default Users;