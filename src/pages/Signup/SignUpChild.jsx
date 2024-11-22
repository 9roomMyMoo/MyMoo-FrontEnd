import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/img/Signin/logo.png";

const Signupchild = () => {
    const [name, setName] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [isEmail, setIsEmail] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');
    const navigate = useNavigate();

    const onChangeName = (e) => {
        setName(e.target.value);
        console.log(`이름 작성: ${e.target.value}`);
    };

    const onChangeBirthDate = (e) => {
        setBirthDate(e.target.value);
        console.log(`생년월일 작성: ${e.target.value}`);
      };
    

      const onChangeEmail = (e) => {
        const emailRegex =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);
        if (!emailRegex.test(emailCurrent)) {
          setEmailMessage('이메일 형식을 다시 확인해주세요');
          setIsEmail(false);
        } else {
          setEmailMessage('');
          setIsEmail(true);
          console.log(`이메일 작성: ${e.target.value}`);
        }
      };

      const handleChangeNewPassword = ({ target: { value } }) => {
        setPassword(value);
        setValidateNewPassword(validatePassword(value));
        setValidateConfirmPassword(value === password);
      };
    
      const handleChangeConfirmPassword = ({ target: { value } }) => {
        setConfirmPassword(value);
        setValidateConfirmPassword(value === password);
      };

      const onChangePhoneNumber = (e) => {
        const phoneRegex =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
        const phoneCurrent = e.target.value;
        setPhone(phoneCurrent);
        if (!phoneRegex.test(phoneCurrent)) {
          setPhoneMessage('이메일 형식을 다시 확인해주세요');
          setIsPhone(false);
        } else {
          setPhoneMessage('');
          setIsPhone(true);
          console.log(`전화번호 작성: ${e.target.value}`);
        }
    };


     // const onSubmit = (e) => {
     //   e.preventDefault();
     //  };
    
      const tohome = () => {
        navigate('/');
      };
    
      
    const onApply = () => {
        if (
            name &&
            year &&
            month &&
            date &&
            isCertify &&
            selectedSex &&
            email &&
            password &&
            confirmPassword &&
            validateConfirmPassword
            ) {
            onRegisterUserInfo();
            navigate('/sign-up/success');
            } else {
            createToast('입력값을 확인해주세요.');
            }
        };

        const onRegisterUserInfo = async () => {
            try {
            const response = (
                await joinAPI({
                name: name,
                email: email,
                password: password,
                check_password: confirmPassword,
                birth_date: [year, month, date].join('-'),
                gender: selectedSex === '미표기' ? null : selectedSex,
                phone_number: phonenumber,
                })
            ).data;
            console.log(response);
            } catch (err) {
            console.log(err);
            }
        };

    const onSubmit = (e) => {
        e.preventDefault();
        if (isEmail && password === confirmPassword) {
        console.log('회원가입 완료');
        navigate('/signin');
        } else {
        console.log('입력값 확인 필요');
        }
    }; 

    return (
        <div className="signupchild-page">
        <header className="signup-header">
        <img className="back-button" src={back} alt="뒤로가기" onClick={handleBtnClick} />
        <h1>회원가입</h1>
        </header>
        <img className="line" src={line} alt="line" />
        <div className="main-section">
            <form onSubmit={onSubmit}>
            <label>
                이름
                <input
                className="input-box"
                type="text"
                value={name}
                onChange={onChangeName}
                placeholder="ex) 마이무"
                />
            </label>
            <label>
                생년월일
                <input
                className="input-box"
                type="text"
                value={birthdate}
                onChange={onChangeBirthDate}
                placeholder="ex) 20001021"
                />
            </label>
            <label>
                이메일
                <input
                className="input-box"
                type="text"
                value={email}
                onChange={onChangeEmail}
                placeholder="mymoo1234@naver.com"
                />
                <p>{emailMessage}</p>
            </label>
            <label>
                비밀번호
                <input
                className="input-box"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="영문/특수문자/숫자 포함 8자리 이상"
                />
            </label>
            <label>
                비밀번호 확인
                <input
                className="input-box"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="비밀번호를 확인해주세요."
                />
            </label>
            <label>
                전화번호
                <input
                className="input-box"
                type="phonenumber"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                placeholder="010-0000-0000"
                />
            </label>
            <div className="button-section">
                <button
                className={isEmail && password === confirmPassword ? 'suc-button' : 'button'}
                type="submit"
                >
                회원가입
                </button>
            </div>
            </form>
        </div>
        </div>
    );
    };

export default Signupchild;