import { useNavigate } from "react-router-dom";

const SuccessSignUp = () => {
  const navigate = useNavigate();
  const removeLocalStorage = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div>{localStorage.getItem("name")}님, 로그인 되었습니다</div>
      <button onClick={removeLocalStorage}>로그아웃</button>
    </>
  );
};

export default SuccessSignUp;
