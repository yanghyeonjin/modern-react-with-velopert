import React from 'react';

function User({ user: { username, email } }) {
    return (
        <div>
            <b>{username}</b> <span>({email})</span>
        </div>
    )
}

export default User;