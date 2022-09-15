import Card from "./Card";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className=" h-screen  justify-center items-center flex w-full ">
                <Card>
                    <div className="  p-20 text-black  justify-center items-center flex w-full  text-2xl">
                        <div>
                            <div className="text-center">
                                KRU TIDAK DITEMUKAN
                            </div>
                            <div className=" text-xs text-gray-600"><i>Mohon Periksa Kelengkapan Persyaratan Ujian</i></div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
export default NotFound;