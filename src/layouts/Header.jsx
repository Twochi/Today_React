import Login from "../pages/login/Login";
import logo from "../images/logo.png"
import style from "./Header.module.css"

function Header() {

    return(

        <>
        <div className={style.logo}>
            <img src={logo} alt="" />
        </div>
        </>
    )
}

export default Header;
