import React, { useState, Dispatch, SetStateAction } from 'react'
import CustomCheckBox from './CustomCheckBox';
import Button from './Button';
import todoService from '../todoServices';
import TodoTypes from '../todo';

interface Props {
  text: String;
  id: number;
  size: string;
  children: string; // Assuming children is a string
  setTodoList: React.Dispatch<React.SetStateAction<TodoTypes[]>>;
  todo: TodoTypes
}
function TodoRow({ text, id, size, children, setTodoList, todo }: Props) {

  const [editingTodoId, setEditingTodoId] = useState<Number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<String>("")

  // function for handling actions
  const handleDeleteTodo = (id: number): void => {
    todoService.deleteTodo(id);
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  return (

    <>
      <li className='w-[97%] flex justify-between m-auto' key={id}>
        <div className=' p-[.5rem] w-[76%]'><CustomCheckBox todo={todo} /><span className='mx-3'>{text}</span> </div> <div className='p-[.5rem] my-auto'><Button size={'small'} children={'x'} onclick={() => { handleDeleteTodo(id) }} id={id}></Button></div>
      </li>
    </>
  )
}

export default TodoRow