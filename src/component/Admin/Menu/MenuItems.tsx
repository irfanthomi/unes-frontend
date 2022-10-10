import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function MenuItems({ data, hadler, index }: any) {
    return (
        <li className=" ml-10 shadow-md"  >
            <div className="bg-white p-2 flex items-center rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                <div className=" px-4">:::</div>
                <div className=" px-4">{data.menu}</div>
            </div>
            <DragDropContext onDragEnd={hadler}>
                <Droppable droppableId="droppable-2" type="PERSON">
                    {(provided) => (
                        <ul ref={provided.innerRef} {...provided.droppableProps}>
                            {data.sub.map((s: any, i: any) => {
                                return (
                                    <Draggable key={i} draggableId={s.menu} index={i} >
                                        {(provided) => {
                                            return (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} draggable="false" className=" shadow-md fghf"  >
                                                    <MenuItems data={s} hadler={hadler} />
                                                </div>
                                            )
                                        }}
                                    </Draggable>)
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>

            </DragDropContext>
        </li>

    )

}