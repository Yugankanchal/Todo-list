import React, { useState } from 'react';
import TodoRow from './components/TodoRow';
import TodoTypes from './todo';
import todoService from './todoServices';
import Button from './components/Button';

function App() {
  // const [TodoList, setTodoList] = useState([])
  const [TodoList, setTodoList] = useState<TodoTypes[]>(todoService.getTodo());
  const [newTodoText, setNewTodoText] = useState<string>("")

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = todoService.addTodo(newTodoText);
      setTodoList((prevTodo) => [...prevTodo, newTodo]);
      setNewTodoText("");
    }
  }

  return (
    <>
      <div className='w-[39%] mx-auto my-[2rem] bg-white rounded-[.25rem] min-w-[350px] '>
        <p className='text-xl px-2 font-bold'>Your notes</p>
        <ul className='m-auto '>
          {
            TodoList.map((todo) => (
              <TodoRow id={todo.id} text={todo.text} size={'small'} children={'X'} setTodoList={setTodoList} todo={todo} />
            ))
          }
        </ul>
        <div className='flex justify-around m-auto p-[.3rem]'>
          <input type="text" placeholder='Add Task Here' value={newTodoText} className=' bg-gray-300 rounded-[.25rem] h-[2.5rem] w-[73%] text-center' onChange={(e) => {
            setNewTodoText(e.target.value);
          }} /> <Button size={'big'} children={'Add Task'} onclick={handleAddTodo}></Button>
        </div>
      </div>

    </>
  );
}

export default App;
