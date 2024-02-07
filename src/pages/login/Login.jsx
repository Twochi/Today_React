import style from "./Login.module.css";
import "../../layouts/Default.css";

function Login() {
  console.log("완냐");

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.loginForm}>
          <div>회원가입</div>
        </div>
      </div>
    </>
  );
}

export default Login;
