import style from "./MainPage.module.css";
import Note from "../../layouts/Note";
import { Square, CheckSquare, PlusSquare, MinusSquare  } from "lucide-react";
import {useState} from "react";

function MainPage(){

    const [check, setCheck] = useState(false);

    const onClick = () =>{
        setCheck(prev => !prev)
    }

    return (
        <>
            <div className={style.mainContainer}>
                <Note className={style.note}/>
                <div className={style.title}>
                    오늘 하루
                </div>
                <div className={style.weather}>
                    오늘의 날씨
                </div>
                <div className={style.weatherDetail}>
                    오늘의 날씨는 비가오네요
                    <br/>
                    우산 꼭 챙기세요
                </div>
                <div className={style.todoList}>
                    <div className={style.todoListHeader}>
                        <div>
                            TodoList
                        </div>
                        <div className={style.button}>
                            <PlusSquare className={style.plusButton} />
                            <MinusSquare className={style.minusButton} />
                        </div>
                    </div>
                    <div className={style.todoListContent}>
                        {check ?
                            <CheckSquare onClick={onClick} className={style.checkbox} />
                            :
                            <Square onClick={onClick} className={style.checkbox} />
                        }
                        <div>
                            일정 1번 입니다.
                        </div>
                    </div>
                    <div className={style.todoListContent}>
                        <CheckSquare className={style.checkbox}/>
                        <div>
                            일정 2번 입니다.
                        </div>
                    </div>
                    <div className={style.todoListContent}>
                        <Square className={style.checkbox}/>
                        <div>
                            일정 3번 입니다.
                        </div>
                    </div>
                    <div className={style.todoListContent}>
                        <CheckSquare className={style.checkbox}/>
                        <div>
                            일정 4번 입니다.
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MainPage;