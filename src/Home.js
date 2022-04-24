import styled from 'styled-components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from './user/userSlice';
import { useEffect } from 'react';

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
  const isUser = localStorage.getItem('idToken');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.removeItem('idToken');
    Navigate('/');
    dispatch(logout());
    alert('로그 아웃 되었습니다');
  };

  useEffect(() => {
    if (isUser) {
      navigate('/successSignIn');
    }
  });
  return (
    <>
      {isUser ? (
        <MainWrap>
          <StyledLink to="/" onClick={userLogout}>
            로그아웃
          </StyledLink>
        </MainWrap>
      ) : (
        <MainWrap>
          <StyledLink to="">구글로그인</StyledLink>
          <StyledLink to="/login">로그인</StyledLink>
          <StyledLink to="/join">회원가입</StyledLink>
        </MainWrap>
      )}
    </>
  );
};

export default Home;
