//rfcs

import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function List({ todoData, setTodoDate }) {
  const handleCompleteChane = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoDate(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoDate(newTodoData);
  };

  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="todo">
        {todoData.map((data) => (
            <Draggable>
          <div key={data.id}>
            <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
              <div>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onChange={() => handleCompleteChane(data.id)}
                />
                {""}
                <span className={data.completed ? "line-through" : undefined}>
                  {data.title}
                </span>
              </div>
              <div className="items-center">
                <button
                  className="px-4 py-2 float-right"
                  onClick={() => handleClick(data.id)}
                >
                  x
                </button>
              </div>
            </div>
          </div>
          </Draggable>
        ))}
        </Draggable>
      </DragDropContext>
    </div>
  );
}
