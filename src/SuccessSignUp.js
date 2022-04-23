import { Link, useLocation } from 'react-router-dom';

const SuccessSignUp = () => {
  const { state } = useLocation();
  return (
    <>
      <div>{`${state} 님의 회원가입이 완료되었습니다`} </div>
      <Link to="/login">로그인하러가기</Link>
    </>
  );
};

export default SuccessSignUp;
