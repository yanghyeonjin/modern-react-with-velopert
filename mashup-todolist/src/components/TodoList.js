// module
import React from 'react';

// css
import './TodoList.css';

// component
import TodoItem from './TodoItem';

// Context API 사용
import { useTodoState } from '../TodoContext';

function TodoList() {
    const todos = useTodoState();

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
            ))}
        </div>
    );
}

export default TodoList;
