// module
import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

// css
import './TodoCreate.css';

function TodoCreate() {
    const [open, setOpen] = useState(false); // 투 두 생성 폼의 open 여부

    const onToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {open && (
                <div className="todo-create">
                    <form>
                        <input type="text" autoFocus placeholder="할 일 입력 후, Enter를 누르세요." />
                    </form>
                </div>
            )}
            <button onClick={onToggle} className={`btn-toggle-circle ${open && 'open'}`}>
                <MdAdd />
            </button>
        </>
    );
}

export default TodoCreate;
