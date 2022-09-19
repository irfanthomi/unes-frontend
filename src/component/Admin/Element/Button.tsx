type tombol = {
    nama: string
    icon: string
    action: () => void

}
const Button = (props: tombol) => {
    return (
        <button onClick={props.action.bind(this)} type='button'
            className='flex break-inside bg-black rounded-3xl px-8 py-4 mb-4 w-full dark:bg-slate-800 dark:text-white'>
            <div className='flex items-center justify-between flex-1'>
                <span className='text-lg  text-white'>{props.nama}</span>
                {props.icon}
            </div>
        </button>
    );
}
export default Button;