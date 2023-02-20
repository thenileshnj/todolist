import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoLists from "./components/TodoLists";


function App() {

  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if(inputText){
      setListTodo([...listTodo, inputText]);
    }
  }

  const deleteListItem = (key) => {
    const newListTodo= [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  }

  return (
    <>
      <div className="max-h-full" >
        <TodoInput addList={addList} />
        <div className="w-full m-auto flex justify-center text-2xl font-[1000]" >
        <h1 >ToDo List </h1>

        </div>
        <hr className="" />
        {listTodo.map((listItem, i)=> {
          return (
            <TodoLists key={i} index={i} item={listItem} deleteItem= {deleteListItem} />
          )
        })}
      </div>
    </>
    
  );
}

export default App;
