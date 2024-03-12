import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const POST_MEMBEREMAIL     = 'member/POST_MEMBEREMAIL';
export const POST_CHECKAUTHNUM     = 'member/POST_CHECKAUTHNUM';



const actions = createActions({
    [POST_MEMBEREMAIL]: () => {},
    [POST_CHECKAUTHNUM]: () => {},
    
});

/* 리듀서 */
const memberReducer = handleActions(
    {
        [POST_MEMBEREMAIL]: (state, { payload }) => ({postMemberMail : payload}),

        [POST_CHECKAUTHNUM]: (state, { payload }) => ({postCheckAuthNum : payload}),

    },
    initialState
);

export default memberReducer;