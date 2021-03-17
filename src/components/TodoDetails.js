import React, {useContext} from 'react'
import { TodoContext } from '../context/TodoContext'
import axios from 'axios';

function TodoDetails({todo}) {
    const {dispatch} = useContext(TodoContext);
    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        // borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }
    const getStyle = () => {
        return {
            opacity: todo.completed ? '0.5' : '0.7',
            textDecoration: todo.completed ? 'line-through' : 'none'
        }
    }
    const handleMarkComplete = () => {
        dispatch({type: 'MARK_COMPLETE', value: {completed: !todo.completed, id: todo.id}})
    }
    const handleDelete = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
        .then(res => dispatch({type: 'REMOVE_TODO', id: todo.id}))
        .catch(err => console.log(err))
    }
    return (
        <li style={getStyle()}>
            <div className="title">
                <span onClick={handleMarkComplete}>{todo.title}</span>
                <button onClick={handleDelete} style={btnStyle}>X</button>
            </div>
        </li>
    )
}

export default TodoDetails
