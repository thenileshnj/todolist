import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const TodoLists = (props) => {
  return (
    <div className="flex text-3xl rounded-2xl border-solid border-2 border-indigo-600 p-4 mt-5 m-auto w-9/12">
      <span
        onClick={(e) => {
          props.deleteItem(props.index);
        }}
      >
        <AiFillCheckCircle className="text-green-600 ml-2 mr-4" />
      </span>
      <li>{props.item}</li>
    </div>
  );
};

export default TodoLists;
