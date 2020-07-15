import React, { memo, useEffect, useContext, useCallback } from 'react';
import './User.css';

// Context
import { UserDispatch } from '../App';

function User({ user }) {
    const dispatch = useContext(UserDispatch);
    const { id, username, email, active } = user;

    useEffect(() => {
        console.log('user 값이 설정됨.')
        console.log(user);

        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]);



    const onToggle = useCallback((id) => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        })
    }, [dispatch])

    const onRemove = useCallback((id) => {
        dispatch({
            type: 'REMOVE_USER',
            id
        })
    }, [dispatch])



    return (
        <div>
            <b className={active ? 'username active' : 'username'} onClick={() => onToggle(id)}>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

export default memo(User);