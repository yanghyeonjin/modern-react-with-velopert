// 액션 타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// thunk 함수
export const increaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(increase()), 1000); // 액션이 dispatch 되는 것을 1초 딜레이
};
export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(decrease()), 1000);
};

// 초깃값
const initialState = 0;

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}
