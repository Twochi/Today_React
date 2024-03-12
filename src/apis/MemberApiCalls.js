import { POST_MEMBEREMAIL , POST_CHECKAUTHNUM } from "../modules/MemberModule";

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

        if(result.status !== 201) {
            alert("인증번호 전송 실패 다시시도해주세요.")
        }

        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);

        dispatch({ type: POST_MEMBEREMAIL, payload: result });

    };
}


export const callAuthNumCheckAPI = ( authNum ) => {

    const requestURL = `${SPRING_PRE_URL}/authNumCheck`;

    console.log('"안뇽' , authNum);

    
    return async (dispatch, getState) => {

        
        const result = await fetch(requestURL, {
            method: "post",
            headers:{
                "Content-Type" : "application/json",
                "Accept": "*/*",
            },

            body: JSON.stringify(authNum)
        })
            .then(response => response.json());

        if(result.data == true) {
            alert("인증이 완료되었습니다.")
        }else {
            alert("인증번호를 다시 입력해주세요.")
        }

        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);

        dispatch({ type: POST_CHECKAUTHNUM, payload: result });

    };
}