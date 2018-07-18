import { createAction, handleAction } from 'redux-actions'

// Actions
// 액션 타입을 정의해줍니다.
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 모듈의 초기 상태를 정의합니다.
const initialState = {
    number: 0
};

// Reducer
// 리듀서를 만들어서 내보내줍니다. ( 상태 => 처리 => 상태 )
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {number:state.number+1};
        case DECREMENT:
            return {number:state.number-1};
        default:
            return state
    }
}
// handleAction 방식
// export default handleAction({
//     [INCREMENT]:(state=initialState,action) => {
//         return { number: state.number+1 }
//     },
//     [DECREMENT]:({ number }) => {
//         return {number:number-1}
//     }
// })


// Action Creators
// 액션 생성 함수를 만듭니다.
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
// export const increment = () => ({type: INCREMENT});
// export const decrement = () => ({type: DECREMENT});
// createAction 방식
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// side effects, only as applicable
// e.g. thunks, epics, etc
