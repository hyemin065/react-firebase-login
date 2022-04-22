import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const FindPassword = () => {
  const [email, setEmail] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const sendPasswordResetEmailHandler = async () => {
    const body = { email, requestType: 'PASSWORD_RESET' };
    try {
      const reponse = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );
      alert('입력된 이메일로 비밀번호 재설정 메일이 발송되었습니다');
      setEmail('');
    } catch (error) {
      console.log('없는 아이디입니다');
    }
  };
  return (
    <div>
      <h2>비밀번호 재설정 메일 발송</h2>
      <div className="form-group">
        <label htmlFor="">이메일</label>
        <input type="email" onChange={changeEmail} value={email} />
        <button onClick={sendPasswordResetEmailHandler}>확인</button>
      </div>
    </div>
  );
};

export default FindPassword;
