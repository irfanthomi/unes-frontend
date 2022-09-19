import React from 'react';

type modal = {
    show: boolean
    close: () => void
    children: React.ReactNode;
}
const Modal = (props: modal) => {
    if (!props.show) {
        return null
    }
    return (
        <>
            <div className="py-12 bg-gray-600 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
                <div className=" relative">
                    <div onClick={props.close} className=" absolute w-full h-full">
                    </div>
                    <div role="alert" className="  container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        {props.children}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;