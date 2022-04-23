import { Link } from 'react-router-dom';

const SendPasswordEmail = () => {
  return (
    <div>
      <p>입력된 이메일로 비밀번호 재설정 메일이 발송되었습니다</p>
      <Link to="/login">로그인 하러 가기</Link>
    </div>
  );
};

export default SendPasswordEmail;
