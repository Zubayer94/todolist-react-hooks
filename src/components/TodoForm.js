import React, {useState, useContext} from 'react'
import { TodoContext } from '../context/TodoContext'
import axios from 'axios'

const TodoForm = () => {
    const {dispatch} = useContext(TodoContext)
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
            })
            .then( res => dispatch({ type: 'ADD_TODO', todo: res.data}));
            setTitle('');
        }
    }
    return (  
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => {setTitle(e.target.value)}} type="text" value={title} placeholder="todo title" />
            <input type="submit" value="add todo"/>
        </form>
    );
}
 
export default TodoForm;