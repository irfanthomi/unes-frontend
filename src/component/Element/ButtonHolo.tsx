type Props = {
    children: JSX.Element,
};
const ButtonHolo = ({ children }: Props) => {
    return (
        <div className="  p-2 ">
            <button className=" tombol tombol-holo">{children}</button>
        </div>
    )
}
export default ButtonHolo