import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './user/userSlice';

const SuccessSignUp = () => {
  const isUser = localStorage.getItem('loginToken');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogout = () => {
    localStorage.removeItem('loginToken');
    navigate('/');
    dispatch(logout());
    alert('로그 아웃 되었습니다');
  };

  const deleteUserInfo = async () => {
    const body = {
      idToken: isUser,
    };
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );
      console.log(response);
      localStorage.removeItem('loginToken');
      alert('회원 탈퇴 완료했습니다');
      navigate('/');
    } catch (e) {
      console.log('fail');
    }
  };

  return (
    <>
      <div>{localStorage.getItem('name')}님, 로그인 되었습니다</div>
      <button onClick={userLogout}>로그아웃</button>
      <button onClick={userLogout}>비밀번호 변경</button>
      <button onClick={deleteUserInfo}>회원탈퇴</button>
    </>
  );
};

export default SuccessSignUp;
