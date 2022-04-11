import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Join from "./Join";
import App from "./App";
import SuccessSignUp from "./SuccessSignUp";
import SuccessSignIn from "./SuccessSignIn";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/successSignUp" element={<SuccessSignUp />} />
      <Route path="/successSignIn" element={<SuccessSignIn />} />
    </Routes>
  );
};
export default Routers;
