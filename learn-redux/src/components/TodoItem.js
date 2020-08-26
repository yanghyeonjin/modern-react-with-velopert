import React from 'react';

function TodoItem({ todo, onToggle }) {
    const onClick = () => {
        onToggle(todo.id);
    };

    return (
        <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }} onClick={onClick}>
            {todo.text}
        </li>
    );
}

export default React.memo(TodoItem);
