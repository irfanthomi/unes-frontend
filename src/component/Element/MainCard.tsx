type Props = {
    children: JSX.Element,
};
const MainCard = ({ children }: Props) => {
    return (
        <div className=" m-5  flex justify-center ">
            <div className=" p-5 bg-white  shadow-lg md:flex md:justify-between rounded-sm w-full" >
                <div className=" my-2 w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default MainCard