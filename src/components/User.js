import React, { memo } from 'react';
import './User.css';
import { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    const { id, username, email, active } = user;

    useEffect(() => {
        console.log('user 값이 설정됨.')
        console.log(user);

        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]);

    return (
        <div>
            <b className={active ? 'username active' : 'username'} onClick={() => onToggle(id)}>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

export default memo(User);