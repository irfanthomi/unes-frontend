type Props = {
    link?: string

}

const Frame = ({ link }: Props) => {
    return (
        <div>
            <div className=" text-black h-screen justify-center items-center flex w-full font-bold text-5xl">
                <iframe title='frame' className=" w-full h-full" src={link} frameBorder="0" allowFullScreen></iframe> </div>
        </div>
    )
}
export default Frame;
