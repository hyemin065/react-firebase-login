import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from './user/userSlice';

const SuccessSignUp = () => {
  return (
    <>
      <div> 회원가입이 완료되었습니다</div>
      <Link to="/login">로그인하러가기</Link>
    </>
  );
};

export default SuccessSignUp;
