import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const JoinArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ErrorBox = styled.span`
  color: red;
  display: block;
  font-size: 12px;
`;

const Join = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const navigate = useNavigate();

  const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    if (e.target.value === password) {
      console.log('같음');
    } else {
      console.log('다름');
    }
  };

  const Signup = async (e) => {
    e.preventDefault();
    if (email === '') {
      setEmailError('이메일을 입력해주세요');
      return;
    } else {
      setEmailError('');
    }

    if (regExp.test(email) === false) {
      setEmailError('이메일 형식이 올바르지 않습니다');
      return;
    } else {
      setEmailError('');
    }

    if (password.trim().length === 0) {
      setPasswordError('비밀번호를 입력해주세요');
      return;
    } else {
      setPasswordError('');
    }

    if (password.length < 8) {
      setPasswordError('비밀번호가 8자리 이하입니다');
      return;
    } else {
      setPasswordError('');
    }

    if (passwordConfirm !== password) {
      setPasswordConfirmError('비밀번호가 다릅니다');
      return;
    } else {
      setPasswordConfirmError('');
    }
    let body = { email, password, returnSecureToken: true };

    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
      body,
    );
    const data = await response.data;
    // const updateBody = {
    //   idToken: data.idToken,
    //   displayName: name,
    //   photoUrl: "",
    //   deleteAttribute: [],
    //   returnSecureToken: true,
    // };

    // const updateProfile = await axios.post(
    //   `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
    //   updateBody
    // );

    // const updateData = await updateProfile.data;
    // console.log(updateData);

    // submitLocalStorage(data.email, data.idToken, updateData.displayName);

    navigate('/successSignUp');
  };

  // const submitLocalStorage = (email, token, name) => {
  //   localStorage.setItem("email", JSON.stringify(email));
  //   localStorage.setItem("token", JSON.stringify(token));
  //   localStorage.setItem("name", JSON.stringify(name));
  // };
  return (
    <>
      <Header />
      <JoinArea>
        <div className="form-group">
          <label htmlFor="">이름</label>
          <input type="text" onChange={changeName} value={name} />
        </div>
        <div className="form-group">
          <label htmlFor="">이메일</label>
          <input type="email" onChange={changeEmail} value={email} />
          <ErrorBox>{emailError}</ErrorBox>
        </div>
        <div className="form-group">
          <label htmlFor="">비밀번호</label>
          <input type="password" onChange={changePassword} value={password} />
          <ErrorBox>{passwordError}</ErrorBox>
        </div>
        <div className="form-group">
          <label htmlFor="">비밀번호 확인</label>
          <input type="password" onChange={changePasswordConfirm} value={passwordConfirm} />
          <ErrorBox>{passwordConfirmError}</ErrorBox>
        </div>

        <button onClick={Signup}>회원가입</button>
        <Link to="/login">로그인</Link>
      </JoinArea>
    </>
  );
};

export default Join;
