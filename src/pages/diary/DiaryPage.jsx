import style from "./DiaryPage.module.css";
import Note from "../../layouts/Note";
import "../../layouts/Default.css";
import diaryImage from "../../images/DiaryImage.jpg";
import diaryImage2 from "../../images/DiaryImage2.jpg";

function DiaryPage() {
  return (
    <>
      <div className={style.mainContainer}>
        <Note className={style.note}></Note>
        <img src={diaryImage} alt="Diary" className={style.diaryImage} />
        <img src={diaryImage2} alt="Diary" className={style.diaryImage2} />
      </div>
    </>
  );
}

export default DiaryPage;
