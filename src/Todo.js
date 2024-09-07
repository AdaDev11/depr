import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import './Todo.css';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [loader, setLoader] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(response => {
                setTodos(response.data);
                setLoader(false);
            })
            .catch(error => {
                console.error("Todos don't show", error);
                setLoader(false);
            })
    }, []);

    if (loader) {
        return <div>Loading...</div>
    };

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <div className="todoContainer">
                <h1>This is your todos</h1>
                <br />
                <input
                    type='text'
                    value={search}
                    placeholder='Search todos...'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <br />
                <div className="todoListsCountainer">
                    <ul>
                        {filteredTodos.map(todo => (
                            <li key={todo.id}>
                                <p>№: {todo.id}</p>
                                <p>title: {todo.title}</p>
                                <p>completed: {todo.completed ? 'Yes' : 'No'}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;