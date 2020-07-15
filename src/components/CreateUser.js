import React, { memo, useContext, useCallback, useRef } from 'react';
import useInput from '../hooks/useInput';
import { UserDispatch } from '../App';

function CreateUser() {
    const [form, onChange, reset] = useInput({
        username: '',
        email: ''
    });
    const { username, email } = form;
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            id: nextId.current,
            username,
            email
        })

        reset();
        nextId.current += 1;
    }, [email, username, reset, dispatch]);

    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default memo(CreateUser);