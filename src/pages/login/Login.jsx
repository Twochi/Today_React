import style from "./Login.module.css";
import "../../layouts/Default.css";
import loginImg from "./images/loginImg.png";

function Login() {
  console.log("완냐");

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.loginForm}>
          <div className={style.imageContainer}>
            <img src={loginImg} alt="이미지 없음" />
            <input type="text" className={style.textAboveImage}></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
