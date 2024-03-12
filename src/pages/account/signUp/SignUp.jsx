// SignUp.js

import React, { useState, useRef } from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import "../../../layouts/Default.css";
import Note from "../../../layouts/Note";
import style from "./SignUp.module.css"
import baseImg from "../../../images/baseImg.jpg"
import downArrow from "../../../images/downArrowImg.png"
import { callEmailAuthAPI ,callAuthNumCheckAPI} from '../../../apis/MemberApiCalls';
import { set } from 'lodash';
import { useSelector } from 'react-redux';


function SignUp() {
    const [gender, setGender] = useState('');
    const [customEmail, setCustomEmail] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [imagePreview, setImagePreview] = useState(''); // 추가된 부분
    const [changeImg , setChangeImg] = useState('');
    const selectFile = useRef("");
    const [frontEmail, setFrontEmail] = useState('');
    const dispatch = useDispatch();
    const [authNum , setAuthNum] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // 새로운 state 추가
    

    const checkAuthNum = useSelector(state => state.memberReducer?.postCheckAuthNum)
    



    const openFileInput = () => {
        selectFile.current.click();
    };

    

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);

        
        // "직접 입력"이 선택되면 customEmail 값을 초기화
        if (event.target.value === "직접 입력") {
            setCustomEmail('');
        }
    };

    const handleCustomEmailChange = (event) => {
        setCustomEmail(event.target.value);

        
        
    };

    

    const handleImageChange = (event) => {

        console.log(event.target.files[0]);
        

        const file = event.target.files[0];

        // 이미지 미리보기를 위한 작업
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handlerEmailChange = (e) => {

        setFrontEmail(e.target.value)

    }

    const onClickAuthEmailHandler = () => {

        let email = "";

        if(selectedOption === '직접 입력') {
            

            email = frontEmail + '@' + customEmail 
        }else{

            email = frontEmail + '@' + selectedOption 
        }

        alert("인증번호 전송 완료")

        dispatch(callEmailAuthAPI({

            memberEmail : email
        }))
        
    }

    const onClickAuthNumHandler = () => {

        let email = "";

        if(selectedOption === '직접 입력') {
            

            email = frontEmail + '@' + customEmail 
        }else{

            email = frontEmail + '@' + selectedOption 
        }

        dispatch(callAuthNumCheckAPI({

            authNum : authNum,
            email  : email,
            
        }))

    console.log(checkAuthNum.data);
    
    }

    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const onChangeAuthNumHandler = (e) => {

        setAuthNum(e.target.value)
    }


    const handleConfirmPasswordChange = (e) => {


        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

    }

    const checkPasswordMatch = () => {
        // 비밀번호와 확인 비밀번호가 같은지 확인
        const passwordsMatch = password === confirmPassword;

        // 비밀번호와 확인 비밀번호가 일치하면서 특수문자가 포함되어 있는지 확인
        const containsSpecialChar = /[!@#$%^&*]/.test(password);

        if (password === '') {
            return "비밀번호를 입력해주세요.";
        }

        if (!passwordsMatch) {
            return "비밀번호가 일치하지 않습니다.";
        } else if (!containsSpecialChar) {
            return "비밀번호에 특수문자가 하나 이상 포함되어야 합니다.";
        } else {
            return "사용가능한 비밀번호 입니다.";
        }
    };

    

    return (
        <>
            <div className={style.mainContainer}>
                <Note></Note>
                <div className={style.signUpTitle}>회원가입</div>

                <div className={style.memberInfo}>

                    <div>
                        이름 : <input type="text" className={style.memberName} />
                    </div>

                    <div className={style.memberGender}>
                        성별 :
                        <label style={{marginLeft: "10px"}}>
                            남 <input type="radio" value="male" checked={gender === 'female'} onChange={() => setGender('female')} />
                        </label>
                        <label>
                            여 <input type="radio" value="female" checked={gender === 'male'} onChange={() => setGender('male')} />
                        </label>
                    </div>

                    <div>
                        나이 : <input type="text" className={style.memberAge} />
                    </div>

                    <div className='wrapper'>
                        <div>
                            전화번호 : <input type="text" className={style.memberPhone}/>
                            
                            
                        
                        </div>

                        <div style={{color: "gray" , fontSize: "15px"}}> - 없이 입력해 주세요.</div>

                        
                    </div>

                    

                    <div className={style.IdContainer}>
                        아이디 : <input type="text" className={style.memberId}/>
                        <button className={style.iDuplcationButton}>중복확인</button>
                    </div>


                    <div className='wrapper'>
                        
                        비밀 번호 : <input type="password" className={style.memberPwd} onChange={onChangePasswordHandler} />
                        
                        
                    </div>
                    
                    <div className='wrapper'>
                        <div style={{display : "flex", alignItems : "center"}}>
                            비밀 번호 확인 : <input type="password" className={style.memberPwd} onChange={handleConfirmPasswordChange} />
                            <p className={style.checkPwd}>
                            {checkPasswordMatch()}
                        </p>
                        </div>
                    </div>
                    <div style={{color:"gray" , fontSize:"15px"}} className='wrapper'>
                        비밀 번호 입력시 특수문자 !@#$%^&* 하나 이상이 포함되어야 합니다.
                    </div>
                    
                    

                    <div >
                        이메일 : 

                        <input type="text" className={style.memberEmail} onChange={handlerEmailChange}/>
                        {selectedOption !== "직접 입력" && (
                            <>
                                @
                                <select value={selectedOption} onChange={handleSelectChange}  className={style.memberEmail}>
                                    <option value="" disabled>이메일을 선택해주세요.</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="outlook.com">outlook.com</option>
                                    <option value="icloud.com">icloud.com</option>
                                    <option value="직접 입력">직접 입력</option>
                                </select>
                            </>
                        )}
                        {selectedOption === "직접 입력" && (
                            <>
                                @
                                <input 
                                    type="text" 
                                    value={customEmail} 
                                    onChange={handleCustomEmailChange} 
                                    placeholder="직접 입력"
                                    className={style.memberEmail}
                                />
                            </>
                        )}

                        <button className={style.checkButton} onClick={onClickAuthEmailHandler}>인증번호 발송</button>
                    </div>

                    <div>
                        이메일 인증번호 : <input type="text" className={style.authentication} onChange={onChangeAuthNumHandler}/>

                        <button className={style.checkButton} onClick={onClickAuthNumHandler}> 확인하기</button>
                    </div>
                </div>


                <div className={style.memberImg}>

                        <div>
                            
                            <div className={style.changeImgTitle}>이미지 변환하기</div>

                        </div>

                        <div className={style.memberImgBefore}>
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className={style.imgInput}
                                ref={selectFile}
                                accept=".jpg, .jpeg, .png"
                            />

                            <img
                                src={imagePreview || baseImg}
                                alt={baseImg}
                                className={style.previewImage}
                                onClick={openFileInput} 
                            />

                        <button  className={style.selectButton}>
                            이미지 변환
                        </button>

                        <img src={downArrow} alt="" className={style.downArrowImg} />
                        
                </div>

                        <div className={style.memberImgAfter}>

                            <img src={changeImg || baseImg} alt={baseImg} className={style.previewImage} />

                        </div>

                </div>

                <div className={style.successButtonContainer}>

                    <button className={style.successButton}>완료</button>
                </div>
                
            </div>
        </>
    )
}

export default SignUp;
