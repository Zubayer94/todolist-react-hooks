import React, {useContext} from 'react'
import { TodoContext } from '../context/TodoContext';

const Navbar = () => {
    const {todos} = useContext(TodoContext);
    const countIncompleteTodo = () => {
        let inComplete = todos.filter(todo => {
            return !todo.completed
        })
        return inComplete.length;
    }
    return ( 
        <div className="navbar">
            <h1>To-DO List</h1>
            <p>Currently you have {countIncompleteTodo()} todos to go through...</p>
        </div>
    );
}
 
export default Navbar;