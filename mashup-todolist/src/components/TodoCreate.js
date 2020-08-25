// module
import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

// css
import './TodoCreate.css';

function TodoCreate() {
    const [open, setOpen] = useState(false); // 투 두 생성 폼의 open 여부
    const [value, setValue] = useState(''); // input 관리

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    // open/close 토클
    const onToggle = () => {
        setOpen(!open);
    };

    // input change
    const onChange = (e) => {
        setValue(e.target.value);
    };

    // 새 할 일 저장
    const onSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지

        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            },
        });

        setValue(''); // input 값 초기화
        setOpen(false); // 다시 닫기
        nextId.current += 1; // 다음 todo id 증가
    };

    return (
        <>
            {open && (
                <div className="todo-create">
                    <form onSubmit={onSubmit}>
                        <input type="text" autoFocus placeholder="할 일 입력 후, Enter를 누르세요." onChange={onChange} value={value} />
                    </form>
                </div>
            )}
            <button onClick={onToggle} className={`btn-toggle-circle ${open && 'open'}`}>
                <MdAdd />
            </button>
        </>
    );
}

export default React.memo(TodoCreate);
