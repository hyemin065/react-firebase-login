import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

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
  const [joinError, setJoinError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //이메일 정규표현식
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
  };

  //회원가입
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

    try {
      let body = { email, password, returnSecureToken: true };

      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );

      await updateProfile(response.data);
      navigate('/successSignUp');
    } catch (e) {
      setJoinError('이미 사용중인 아이디입니다');
    }
  };

  //프로필 업데이트
  const updateProfile = async (data) => {
    let body = {
      idToken: data.idToken,
      displayName: name,
      photoUrl: '',
      deleteAttribute: [],
      returnSecureToken: true,
    };

    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );

      return response.data;
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <>
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
        <ErrorBox>{joinError}</ErrorBox>
        <button onClick={Signup}>회원가입</button>
        <Link to="/login">로그인</Link>
      </JoinArea>
    </>
  );
};

export default Join;
