// module
import React, { useState } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
// css
import './TodoItem.css';

function TodoItem({ id, done, text }) {
    const [removeActive, setRemoveActive] = useState(false);

    // 마우스 hover 시, 삭제 버튼 다루기
    const showRemove = () => {
        setRemoveActive(true);
    };
    const hideRemove = () => {
        setRemoveActive(false);
    };

    return (
        <div className="todo-item" onMouseEnter={showRemove} onMouseLeave={hideRemove}>
            <div className={`check-circle ${done && 'done'}`}>{done && <MdDone />}</div>
            <div className={`text ${done && 'done'}`}>{text}</div>
            <div className={`remove ${removeActive && 'show'}`}>
                <MdDelete />
            </div>
        </div>
    );
}

export default TodoItem;
