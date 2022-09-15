
function Footer() {
    return (
        <footer className=" mt-auto w-full text-gray-600 body-font">
            <div className="  bg-yellow-300">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 PAGE —
                        <span className="text-gray-600 ml-1" >UNIVERSITAS EKASAKTI</span>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <label className="text-gray-500">
                            Jl. Veteran No. 26B Purus, Kec. Padang Barat Ekasakti
                        </label>
                    </span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;