import { useReducer, useEffect } from 'react';

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

// callback: API 요청을 시작하는 함수
// useEffect의 deps로 사용할 목적
function useAsync(callback, deps = []) {
    const [state, dispatch] = useReducer(reducer, { loading: false, data: null, error: null });

    // user 목록 불러오는 API
    const fetchData = async () => {
        // 요청이 시작할 때에는 error와 users를 초기화하고 loading 상태를 true로 바꿉니다.
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data }); // 데이터는 response.data안에 들어있습니다.
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        fetchData();
    }, deps);

    return [state, fetchData];
}

export default useAsync;
