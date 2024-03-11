import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const POST_MEMBEREMAIL     = 'member/POST_MEMBEREMAIL';


const actions = createActions({
    [POST_MEMBEREMAIL]: () => {},
    
});

/* 리듀서 */
const memberReducer = handleActions(
    {
        [POST_MEMBEREMAIL]: (state, { payload }) => {
            
            return payload;
        },

    },
    initialState
);

export default memberReducer;