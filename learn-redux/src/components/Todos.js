import React, { useState } from 'react';
import TodoListContainer from '../containers/TodoListContainer';

function Todos({ onCreate }) {
    // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아니다.
    const [text, setText] = useState('');
    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();

        onCreate(text);
        setText(''); // input 초기화
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} placeholder="할 일을 입력하세요..." onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <TodoListContainer />
        </div>
    );
}

export default Todos;
