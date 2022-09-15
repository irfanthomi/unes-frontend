type Props = {
    children: JSX.Element,
};
const Card = ({ children }: Props) => {
    return (
        <div className=" m-5 flex justify-center ">
            <div className="  bg-white px-5 shadow-lg md:flex md:justify-between rounded-md w-auto" >
                <div className="  ">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Card