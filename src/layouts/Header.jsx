
import logo from "../images/logo.png"
import style from "./Header.module.css"
import { useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    // logo 클릭시 메인페이지로 이동하는 함수 (임시 ==> 로그인 페이지)
    const onClickHome = () =>{
        navigate('/');
    }
    return (

        <>
            <div className={style.logo}>
                <img src={logo} alt="" />
            </div>
        </>
    )
}

export default Header;
