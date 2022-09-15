import axios from "axios";
import { useState } from "react";
import Sidebar from "../../component/Admin/Sidebar";
import Table from "../../component/Admin/Table";

function Article() {
    const [data, setData] = useState('')
    const column = [
        'No',
        'Image',
        'Title',
        'Create At',
        'Update At',
        'Create By'
    ]
    const getData = () => {
        axios.get('api').then((value: any) => {
            setData(value)
        })
    }



    return (
        <>
            <Sidebar />
            <div className="overflow-x-auto md:ml-64">
                <Table column={column} data={data} />
            </div>
        </>
    );
}

export default Article;