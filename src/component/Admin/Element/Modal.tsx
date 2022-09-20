import React, { useRef } from 'react';

type modal = {
    show: boolean
    close: () => void
    children: React.ReactNode;
}
const Modal = (props: modal) => {
    const animRef = useRef<HTMLDivElement>(null)

    if (!props.show) {
        return null
    }



    setTimeout(() => {
        if (animRef.current)
            animRef.current.style.cssText = "top:0px;"
    }, 1);
    console.log(animRef.current?.style.cssText)
    return (
        <>
            <div ref={animRef} className="py-12 transition-all bg-slate-500 delay-150 duration-700 z-10  absolute  right-0 bottom-0 left-0 " style={{ top: '-568px' }} id="modal">
                <div className=" relative">
                    <div onClick={props.close} className=" absolute w-full h-full">
                    </div>
                    <div className=' w-full h-full bg-slate-500'>
                        <div role="alert" className="  container mx-auto w-11/12 md:w-2/3 max-w-lg">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;