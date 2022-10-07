import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Menu } from "../../component/Admin/Manu.admin";

const finalSpaceCharacters = [
    {
        id: 'gary',
        name: 'Gary Goodspeed',
        thumb: '/images/gary.png'
    },
    {
        id: 'cato',
        name: 'Little Cato',
        thumb: '/images/cato.png'
    },
    {
        id: 'kvn',
        name: 'KVN',
        thumb: '/images/kvn.png'
    },
    {
        id: 'mooncake',
        name: 'Mooncake',
        thumb: '/images/mooncake.png'
    },
    {
        id: 'quinn',
        name: 'Quinn Ergon',
        thumb: '/images/quinn.png'
    }
]
function DnD() {
    const [menu, setMenu] = useState(Menu)
    const [characters, updateCharacters] = useState(finalSpaceCharacters);

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;
        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateCharacters(items);
    }
    const handleOnDragMenuEnd = (event: any) => {
        if (!event.destination) return;
        const items = Array.from(characters);
        const [reorderedItem] = items.splice(event.source.index, 1);
        items.splice(event.destination.index, 0, reorderedItem);
        updateCharacters(items);
    }
    // console.log(characters)
    return (
        <>
            <div className="flex  bg-slate-400 h-16 w-full">
                <div className="flex p-4 items-center w-16 h-full">
                    kjhkj
                </div>
                <div className=" flex p-4 items-center justify-end w-full h-full ">
                    {
                        menu.map((item, index) => {
                            return (
                                <div className=" p-2 cursor-pointer" >
                                    <div>{item.name}</div>
                                </div>
                                // { item.sub ? <div>{item.name}</div> : "" }
                            )
                        })

                    }
                    {/* <div className="  p-2 cursor-pointer" >
                        <div className="relative" >Article
                            <div className=" hidden hover:block bg-slate-500  mt-5 absolute" >
                                <div className="">
                                    <div className=" py-1 px-4"> informasi</div>
                                    <div className=" py-1 px-4">berita</div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className=" flex justify-around h-screen items-center">
                <div className="rounded bg-gray-400 w-64 p-2">
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="characters">
                            {(provided) => (
                                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                    {characters.map((data, index) => {
                                        return (
                                            <Draggable key={data.id} draggableId={data.id} index={index}>
                                                {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                                                        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                                                            {data.name}
                                                        </div>
                                                    </li>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>


                {/* Menu */}
                {/* <div className=" flex justify-around h-screen items-center">
                    <div className="rounded bg-gray-400 w-64 p-2">
                        {
                            menu.map((item, index) => {
                                return (
                                    <div key={index} className="bg-white p-2 w-2/3 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                                        <h1>{item.name}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}

            </div>


        </>
    );
}

export default DnD;