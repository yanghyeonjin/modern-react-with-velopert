// module
import React, { useState } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

// css
import './TodoItem.css';

function TodoItem({ id, done, text }) {
    const [removeActive, setRemoveActive] = useState(false);
    const dispatch = useTodoDispatch();

    // 마우스 hover 시, 삭제 버튼 다루기
    const showRemove = () => {
        setRemoveActive(true);
    };
    const hideRemove = () => {
        setRemoveActive(false);
    };

    // todo 토클
    const onToggle = () => {
        dispatch({ type: 'TOGGLE', id });
    };

    // todo 삭제
    const onRemove = () => {
        dispatch({ type: 'REMOVE', id });
    };

    return (
        <div className="todo-item" onMouseEnter={showRemove} onMouseLeave={hideRemove}>
            <div className={`check-circle ${done && 'done'}`} onClick={onToggle}>
                {done && <MdDone />}
            </div>
            <div className={`text ${done && 'done'}`}>{text}</div>
            <div className={`remove ${removeActive && 'show'}`} onClick={onRemove}>
                <MdDelete />
            </div>
        </div>
    );
}

export default React.memo(TodoItem);
