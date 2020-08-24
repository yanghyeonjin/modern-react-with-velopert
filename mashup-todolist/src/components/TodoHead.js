// module
import React from 'react';

// css
import './TodoHead.css';

// Context API 사용
import { useTodoState } from '../TodoContext';

function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter((todo) => !todo.done); // 할 일 몇 개 남았는지

    // 현재 날짜 표시
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const dayName = today.toLocaleDateString('ko-KR', {
        weekday: 'long',
    });

    return (
        <div className="todo-head">
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </div>
    );
}

export default TodoHead;
