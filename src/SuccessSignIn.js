import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserData } from './Function';
import { login, logout } from './user/userSlice';

const SuccessSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const idToken = localStorage.getItem('idToken');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const idToken = localStorage.getItem('idToken');

    let body = {
      idToken: idToken,
    };

    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );
      return response;
    } catch (e) {
      console.log('error');
    }
  };

  const userLogout = () => {
    localStorage.removeItem('idToken');
    navigate('/');
    dispatch(logout());
    alert('로그 아웃 되었습니다');
  };

  const deleteUserInfo = async () => {
    const body = {
      idToken: idToken,
    };
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );
      localStorage.removeItem('idToken');
      alert('회원 탈퇴 완료했습니다');
      navigate('/');
    } catch (e) {
      console.log('fail');
    }
  };

  return (
    <>
      <div>{user.displayName}님, 로그인 되었습니다</div>
      <button onClick={userLogout}>로그아웃</button>
      <Link to="/changePassword">비밀번호 변경</Link>
      <button onClick={deleteUserInfo}>회원탈퇴</button>
    </>
  );
};

export default SuccessSignUp;
