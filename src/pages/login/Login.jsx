import style from "./Login.module.css"
import "../../layouts/Default.css"
import loginImg from "./images/loginImg.png"

function Login() {

    console.log("ㅎㅇㅎㅇ");



    return (
        <>

            <div className={style.mainContainer}>
                <div className={style.loginForm}>
                    <div className={style.imageContainer}>

                        <img src={loginImg} className={style.bookImg} alt="이미지 없음" />
                        <input type="id" className={style.memberId}></input>
                        <input type="password" className={style.memberPwd} />


                        <button className={style.signUpButton}>회원가입</button>

                        <button className={style.loginButton}>로그인</button>
                    </div>


                </div>



            </div>

        </>

    )
}

export default Login;