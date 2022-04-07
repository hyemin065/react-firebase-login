import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <section className="">
        <div className="form-group">
          <label htmlFor="">이메일</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="">비밀번호</label>
          <input type="password" />
        </div>
        <button>로그인</button>
      </section>
      <div>
        <Link to="">비밀번호 찾기</Link>
        <Link to="">아이디 찾기</Link>
        <Link to="/join">회원가입</Link>
      </div>
    </>
  );
};

export default Login;
