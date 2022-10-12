import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "./App.css";

const PictureList = [
  {
    id: 1,
    url:
      "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vD36qJsInLtK1kHtazl8T3Z8UX5tnCN7YW8gbEt2HA&s",
  },
  {
    id: 3,
    url:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
  },
];

function DragDrop() {
  const [board, setBoard] = useState<any>([]);
  const [board2, setBoard2] = useState<any>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item: any) => addImageToBoard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id: any) => {
    const pictureList: any = PictureList.filter((picture: any) => id === picture.id);
    setBoard((board: any) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture: any) => {
          return (
            <>
              <Picture url={picture.url} id={picture.id} />
              <div className="Board2" ref={drop}>
                {board.map((picture: any) => {
                  return <Picture url={picture.url} id={picture.id} />;
                })}
              </div>

            </>


          );
        })}
      </div>

    </>
  );
}

export default DragDrop;