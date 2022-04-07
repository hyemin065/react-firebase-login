import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const JoinArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const Signup = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해주세요");
      return;
    }
    if (password.trim().length === 0) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    let body = { email, password, returnSecureToken: true };
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
      body
    );
    const data = response.data;
    console.log(data);

    navigate("/successSignUp");
  };

  // const SignUpHandler = () => {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };

  return (
    <>
      <Header />
      <JoinArea>
        <div className="form-group">
          <label htmlFor="">이메일</label>
          <input type="email" onChange={changeEmail} value={email} />
          <button>중복확인</button>
        </div>
        <div className="form-group">
          <label htmlFor="">비밀번호</label>
          <input type="password" onChange={changePassword} value={password} />
        </div>
        <div className="form-group">
          <label htmlFor="">비밀번호 확인</label>
          <input type="password" />
        </div>

        <button onClick={Signup}>회원가입</button>
        <Link to="/login">로그인</Link>
      </JoinArea>
    </>
  );
};

export default Join;
