import axios from 'axios';
import { useState } from 'react';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const idToken = localStorage.getItem('idToken');

  const changeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  console.log(newPassword);
  const changePasswordHandler = async () => {
    let body = {
      idToken: idToken,
      password: newPassword,
      returnSecureToken: true,
    };
    console.log(body);

    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
        body,
      );
      console.log(response);
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <div>
      <label>비밀번호</label>
      <input type="password" value={newPassword} onChange={changeNewPassword} />
      <button onClick={changePasswordHandler}>변경하기</button>
    </div>
  );
};

export default ChangePassword;
