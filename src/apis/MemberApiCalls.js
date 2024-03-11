import { POST_MEMBEREMAIL } from "../modules/MemberModule";

const FAST_SERVER_IP = `${process.env.REACT_APP_FAST_APP_SERVER_IP}`;
const FAST_SERVER_PORT = `${process.env.REACT_APP_FAST_APP_SERVER_PORT}`;

const SPRING_SERVER_IP = `${process.env.REACT_APP_SPRING_APP_SERVER_IP}`;
const SPRING_SERVER_PORT = `${process.env.REACT_APP_SPRING_APP_SERVER_PORT}`;

const FAST_PRE_URL =`http://${FAST_SERVER_IP}:${FAST_SERVER_PORT}`
const SPRING_PRE_URL = `http://${SPRING_SERVER_IP}:${SPRING_SERVER_PORT}/auth`

export const callEmailAuthAPI = ( memberEmail ) => {

    const requestURL = `${SPRING_PRE_URL}/email`;

    console.log('email' , memberEmail);
    
    

    return async (dispatch, getState) => {

        
        const result = await fetch(requestURL, {
            method: "post",
            headers: {
                "Accept": "*/*",
                "Content-type" : "application/json"
            },
            body: JSON.stringify(memberEmail)
        })
            .then(response => response.json());

        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);

        dispatch({ type: POST_MEMBEREMAIL, payload: result });

    };
}