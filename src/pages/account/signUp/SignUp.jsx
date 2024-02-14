import "../../../layouts/Default.css";
import Note from "../../../layouts/Note";
import style from "./SignUp.module.css"
import images from "../../../images/logo.png"

function SignUp() {

    return (
        <>
        <div className={style.mainContainer}>

            <Note className={style.note}>
                
            </Note>

            
                <div className={style.memberDetails}>회원가입</div>

                <div className={style.image}>캐릭터 번경</div>


        </div>


        </>
    )

}

export default SignUp