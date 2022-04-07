import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header";
// import { firestore } from "./firebase";
import { useEffect } from "react";
import GlobalStyles from "./GlobalStyles";

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

function App() {
  // useEffect(() => {
  //   const user = firestore.collection("user");
  //   user
  //     .doc("user_item")
  //     .get()
  //     .then((doc) => {
  //       console.log(doc.data());
  //     });
  //   console.log(user);
  // });
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <MainWrap>
        <StyledLink to="/login">로그인</StyledLink>
        <StyledLink to="/join">회원가입</StyledLink>
      </MainWrap>
    </div>
  );
}

export default App;
