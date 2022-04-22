import { Link } from 'react-router-dom';

const SuccessSignUp = () => {
  return (
    <>
      <div> 회원가입이 완료되었습니다</div>
      <Link to="/">home</Link>
    </>
  );
};

export default SuccessSignUp;
