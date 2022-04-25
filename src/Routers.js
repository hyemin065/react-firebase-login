import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Join from './Join';
import Home from './Home';
import SuccessSignUp from './SuccessSignUp';
import SuccessSignIn from './SuccessSignIn';
import FindPassword from './FindPasswordEmail';
import SendPasswordEmail from './SendPassword';
import ChangePassword from './ChangePassword';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/successSignUp" element={<SuccessSignUp />} />
      <Route path="/successSignIn" element={<SuccessSignIn />} />
      <Route path="/findPassword" element={<FindPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/sendPasswordEmail" element={<SendPasswordEmail />} />
    </Routes>
  );
};
export default Routers;
