import style from "./DiaryPage.module.css";
import Note from "../../Note";
import "../../layouts/Default.css";
import diaryImage from "../../images/DiaryImage.jpg";

function DiaryPage() {
  return (
    <div className={style.diaryPage}>
      <Note>
        <div className={style.diaryBase}>
          <img src={diaryImage} alt="Diary" className="diaryBase" />
        </div>
      </Note>
    </div>
  );
}

export default DiaryPage;
