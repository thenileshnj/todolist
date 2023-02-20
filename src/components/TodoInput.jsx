import React, { useState } from 'react'
import { GoDiffAdded } from "react-icons/go"

const TodoInput = (props) => {

  


    const [inputText, setInputText] = useState('');
  
  
    return (
    <div className='pt-12 pb-8 flex justify-center gap-4'>
        <input className='p-1 bg-white rounded-2xl border-solid border-2 border-indigo-600 w-3/4' placeholder='Enter ToDo' type="text" value={inputText} onChange={e => {setInputText(e.target.value)}} />
        <button className='p-4 bg-white  rounded-xl font-black text-xl' onClick={() => {props.addList(inputText)
        setInputText('')}}> <GoDiffAdded /> </button>
        
    </div>
  )
}

export default TodoInput;