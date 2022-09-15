type Props = {
    children: JSX.Element,
    action: (e: any) => void
};
const ButtonYellow = ({ children, action }: Props) => {
    return (
        <div className="  p-2 ">
            <button onClick={action} className=" tombol tombol-kuning">{children}</button>
        </div>
    )
}
export default ButtonYellow