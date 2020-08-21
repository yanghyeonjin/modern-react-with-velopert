// module
import React from 'react';

// css
import './TodoHead.css';

function TodoHead() {
    return (
        <div className="todo-head">
            <h1>2019년 7월 10일</h1>
            <div className="day">수요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </div>
    );
}

export default TodoHead;
