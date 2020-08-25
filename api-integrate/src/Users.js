import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function Users() {
    const [state, dispatch] = useReducer(reducer, { loading: false, data: null, error: null });

    // user 목록 불러오는 API
    const fetchUsers = async () => {
        // 요청이 시작할 때에는 error와 users를 초기화하고 loading 상태를 true로 바꿉니다.
        dispatch({ type: 'LOADING' });
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({ type: 'SUCCESS', data: response.data }); // 데이터는 response.data안에 들어있습니다.
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const { loading, data: users, error } = state; // state.data를 users 키워드로 조회

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
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
}

export default Users;
