import TodoTypes from "./todo";


const LOCAL_STORAGE_KEY = 'todo';


const todoService = {

    // get Todos
    getTodo: (): TodoTypes[] => {
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todoStr ? JSON.parse(todoStr) : [];
    },
    addTodo: (text: String): TodoTypes => {
        const todos = todoService.getTodo();
        const id = (todos.length + 1);
        const newTodo: TodoTypes = { id: id, text: text, Done: false }
        todos.push(newTodo);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        return newTodo;
    },
    updateTodo: (todo: TodoTypes): TodoTypes => {
        const todos = todoService.getTodo();
        const updateTodos = todos.map((t) => t.id === todo.id ? todo : t);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return todo;
    },
    deleteTodo: (id: number): void => {
        const todos = todoService.getTodo();
        const updateTodos = todos.filter((todo) => todo.id !== id)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    }
}

export default todoService;