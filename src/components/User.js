import React from 'react';
import './User.css';

function User({ user: { id, username, email, active }, onRemove, onToggle }) {
    return (
        <div>
            <b className={active ? 'username active' : 'username'} onClick={() => onToggle(id)}>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

export default User;