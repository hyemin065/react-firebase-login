import { useState } from 'react';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from './user/userSlice';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: 100px;
  height: 50px;
  background-color: pink;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  &:first-child {
    background-color: skyblue;
  }
`;

const Home = () => {
  const [loginState, setLoginState] = useState(false);
  const isUser = localStorage.getItem('idToken');
  const dispatch = useDispatch();

  //로그아웃
  const userLogout = () => {
    localStorage.removeItem('idToken');
    Navigate('/');
    dispatch(logout());
    alert('로그 아웃 되었습니다');
  };

  //구글 로그인
  const gooegleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const googleUser = auth.currentUser;

        //google login 했을때 user가 있으면 loginState변경
        if (googleUser) {
          setLoginState(true);
          localStorage.setItem('idToken', googleUser.accessToken);
        }

        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MainWrap>
        {isUser || loginState ? (
          <StyledLink to="/" onClick={userLogout}>
            로그아웃
          </StyledLink>
        ) : (
          <>
            <StyledLink to="/login">로그인</StyledLink>
            <StyledLink to="/join">회원가입</StyledLink>
            <button type="button" onClick={gooegleLogin}>
              구글로그인
            </button>
          </>
        )}
      </MainWrap>
    </>
  );
};

export default Home;
