import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const ErrorBox = styled.span`
  color: red;
  display: block;
  font-size: 12px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async () => {
    const body = { email, password, returnSecureToken: true };

    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );
      console.log(response.data);
      navigate('/successSignIn');
    } catch (error) {
      setLoginError('로그인에 실패했습니다');
    }
  };
  return (
    <>
      <Header />
      <section className="">
        <div className="form-group">
          <label htmlFor="">이메일</label>
          <input type="text" onChange={changeEmail} value={email} />
        </div>
        <div className="form-group">
          <label htmlFor="">비밀번호</label>
          <input type="password" onChange={changePassword} value={password} />
        </div>
        <button onClick={loginHandler}>로그인</button>
        <ErrorBox>{loginError}</ErrorBox>
      </section>
      <div>
        <Link to="/findPassword">비밀번호 찾기</Link>
        <Link to="">아이디 찾기</Link>
        <Link to="/join">회원가입</Link>
      </div>
    </>
  );
};

export default Login;
