import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  return (
    <MainWrap>
      <StyledLink to="">구글로그인</StyledLink>
      <StyledLink to="/login">로그인</StyledLink>
      <StyledLink to="/join">회원가입</StyledLink>
    </MainWrap>
  );
};

export default Home;
