import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작할 때에는 error와 users를 초기화하고
                setError(null);
                setUsers(null);
                setLoading(true); // loading 상태를 true로 바꿉니다.

                const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
                setUsers(response.data); // 데이터는 response.data안에 들어있습니다.
            } catch (e) {
                setError(e);
            }

            setLoading(false);
        };

        fetchUsers();
    }, []);

    // 현재 상태에 따라 화면에 다르게 출력
    if (loading) {
        return <div>로딩중...</div>;
    }
    if (error) {
        return <div>에러가 발생했습니다.</div>;
    }
    if (!users) {
        return null;
    }

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
    );
}

export default Users;
