import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../component/Admin/Element/Button";
import Modal from "../../component/Admin/Element/Modal";
import Sidebar from "../../component/Admin/Sidebar";
import FormRegister from "../../component/Admin/Users/FormRegister";
import Table from "../../component/Admin/Users/Table";

const Users = () => {
    const [data, setData] = useState<any>({})
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [show, setShow] = useState(false)



    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit])

    const column = [
        'No',
        'Username',
        'Nama',
        'Email',
        'Level',
        'Status',
        'Action'
    ]

    const getData = async () => {
        await axios.get('api/admin?page=' + page + '&limit=' + limit).then((value: any) => {
            setData(value.data)
        })
    }
    const selectPage = async (value: any) => {
        await setPage(value)
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
            <div className=" relative">
                <Sidebar />
                <div className=" bg-gray-100 overflow-x-auto md:ml-64">
                    <div className=" p-2 md:m-6 m-2" >

                        <Button action={() => setShow(true)} nama="Add User +" icon="<FaPlus/>" />
                        <Table
                            column={column}
                            data={data}
                            nextPage={nextPage.bind(this)}
                            prevPage={prevPage.bind(this)}
                            limitPage={limitPage.bind(this)}
                            selectPage={selectPage.bind(this)}
                        />
                    </div>
                </div>
                <Modal show={show} close={() => setShow(false)} >
                    <FormRegister close={() => setShow(false)}>
                        <h1>Add User</h1>
                    </FormRegister>
                </Modal>

            </div>
        </>
    );
}

export default Users;