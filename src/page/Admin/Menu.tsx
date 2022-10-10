import axios from "axios";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import MenuItems from "../../component/Admin/Menu/MenuItems";
import Sidebar from "../../component/Admin/Sidebar";

let test = {
   left: [{
      id: 10,
      name: "aaaaa"
   },
   {
      id: 20,
      name: "bbbbb"
   }
   ],
   right: [{
      id: 30,
      name: "ccccc"
   },
   {
      id: 40,
      name: "ddddd"
   }
   ]
}
function MenuSetting() {
   const [menu, setMenu] = useState<any[]>([])
   const [rtx, setRtx] = useState(test)


   const handleFuck = (e: any) => {
      if (!e.destination) return;
      const data = rtx
      console.log(e)
      const did = e.destination.droppableId
      console.log(did)
      const [reorderedItem] = data.left.splice(e.source.index, 1);

   }



   useEffect(() => {
      getMenu()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])


   const getMenu = async () => {
      await axios.get('api/menu').then((value: any) => {
         setMenu(value.data)
      })
   }

   const handleOnDragMenuEnd = (event: any) => {
      if (!event.destination) return;
      const items = Array.from(menu);
      const [reorderedItem] = items.splice(event.source.index, 1);
      items.splice(event.destination.index, 0, reorderedItem);
      setMenu(items);
   }
   return (
      <>
         <Sidebar />
         <div className=" bg-gray-100 overflow-x-auto md:ml-64">
            <div className=" p-2 md:m-6 m-2" >
               <div className=" flex justify-around h-auto min-h-screen ">
                  <div className="rounded   w-full p-2">
                     <DragDropContext onDragEnd={handleOnDragMenuEnd}>
                        <Droppable droppableId="droppable-1" type="PERSON">
                           {(provided) => (
                              <ul ref={provided.innerRef} {...provided.droppableProps}>
                                 {menu.map((data, index) => {
                                    return (
                                       <Draggable key={data.id} draggableId={data.menu} index={index} >
                                          {(provided) => {
                                             return (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} draggable="false">
                                                   <MenuItems data={data} hadler={handleOnDragMenuEnd} />
                                                </div>
                                             )
                                          }}
                                       </Draggable>
                                    )
                                 })}
                                 {provided.placeholder}
                              </ul>
                           )}
                        </Droppable>
                     </DragDropContext>
                  </div>
               </div>
               <div className=" p-2 md:m-6 m-2" >
                  <div className=" flex justify-around  h-screen ">
                     <DragDropContext onDragEnd={handleFuck}>
                        {
                           Object.values(rtx).map((r: any, i: any) => {
                              return (
                                 <div key={i} className=" w-full block px-5">
                                    <div className=" h-screen bg-slate-300">
                                       <Droppable droppableId={Object.keys(rtx)[i]} type="PERSON">
                                          {(provided) => (
                                             <ul ref={provided.innerRef} {...provided.droppableProps}>
                                                {r.map((s: any, index: any) => {
                                                   return (
                                                      <Draggable key={index} draggableId={s.name} index={index} >
                                                         {(provided) => {
                                                            return (
                                                               <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} draggable="false" className=" shadow-md p-4"  >
                                                                  <li>{s.name}</li>
                                                               </div>
                                                            )
                                                         }}
                                                      </Draggable>
                                                   )
                                                })}
                                                {provided.placeholder}
                                             </ul>
                                          )}
                                       </Droppable>

                                    </div>
                                 </div>
                              )
                           })
                        }
                        {/*  */}
                     </DragDropContext>

                  </div>
               </div>
            </div>
         </div >

      </>
   );
}

export default MenuSetting;