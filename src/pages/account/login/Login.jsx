import style from "./Login.module.css";
import "../../../layouts/Default.css";
import loginImg from "./images/loginImg.png";
import { useNavigate } from "react-router-dom/dist";
import { UseSelector, useSelector } from "react-redux";
import memberReducer from "../../../modules/MemberModule";



function Login() {


    const navigate = useNavigate();

    const checkAuthNum = useSelector(state => state.memberReducer.checkAuthNum)


    



    return (
        <>

            <div className={style.mainContainer}>
                <div className={style.loginForm}>
                    <div className={style.imageContainer}>

                        <img src={loginImg} className={style.bookImg} alt="이미지 없음" />
                        <input type="id" className={style.memberId}></input>
                        <input type="password" className={style.memberPwd} />


                        <button className={style.signUpButton} onClick={() => navigate("/signUp")}>회원가입   </button>

                        <button className={style.loginButton} onClick={() => navigate("/mainpage")}>로그인</button>
                    </div>


                </div>



            </div>

        </>

    )
}

export default Login;
