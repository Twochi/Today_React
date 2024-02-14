import "../../../layouts/Default.css";
import Note from "../../../layouts/Note";
import style from "./SignUp.module.css"
import images from "../../../images/logo.png"

function SignUp() {

    return (
        <>
        <div className={style.mainContainer}>

            <Note>
                
            </Note>

            <div className={style.signUpTitle}>회원가입</div>

            <div className={style.memberInfo}>
                <div>이름</div>
            </div>


        </div>


        </>
    )

}

export default SignUp