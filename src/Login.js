import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './user/userSlice';

const ErrorBox = styled.span`
  color: red;
  display: block;
  font-size: 12px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const isUser = localStorage.getItem('idToken');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isUser) {
      alert('로그인상태입니다');
      navigate('/successSignIn');
    }
  });

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const getUserData = async (idToken) => {
    let body = {
      idToken: idToken,
    };
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );
      const data = await response.data;
      return data;
    } catch (error) {
      alert('데이터불러오기 실패.');
    }
  };

  const loginHandler = async () => {
    const body = { email, password, returnSecureToken: true };

    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );

      const userInfo = await getUserData(response.data.idToken);
      console.log(userInfo.users[0]);
      dispatch(login(userInfo.users[0]));
      localStorage.setItem('idToken', response.data.idToken);
      navigate('/successSignIn');
    } catch (error) {
      setLoginError('로그인에 실패했습니다');
    }
  };
  return (
    <>
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
        <Link to="/join">회원가입</Link>
      </div>
    </>
  );
};

export default Login;
