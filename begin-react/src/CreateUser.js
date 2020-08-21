// module
import React, { useRef, useContext, useCallback } from 'react';

// custom hook
import useInputs from './hooks/useInputs';

// context api
import { UserDispatch } from './App';

function CreateUser() {
    const [{ username, email }, onChange, onReset] = useInputs({
        username: '',
        email: '',
    });

    const nextId = useRef(4);

    const dispatch = useContext(UserDispatch);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            },
        });
        onReset();
        nextId.current += 1;
    }, [username, email, onReset, dispatch]);

    return (
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username} />
            <input name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);
