import React, {useContext} from 'react'
import {TodoContext} from '../context/TodoContext'
import TodoDetails from './TodoDetails';

const TodoList = () => {
    const {todos} = useContext(TodoContext)
    return todos.length ? ( 
        <div className="todo-list">
            <ul>
                { todos.map(todo => (
                    <TodoDetails key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    ) : (
        <div className="empty"> No todos to work!</div>
    );
}
 
export default TodoList;