import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import { accessTokenState } from "./recoil";
import axios from "axios";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Employee from "./pages/Employee";
import Password from "./pages/Password";

const removeLocalstorage = () => {
  localStorage.removeItem("accessToken");
  window.alert("[Token Expired] 로그인 페이지로 이동합니다.");
  window.location.href = "/";
};

// JWT 토큰 확인 함수
const checkToken = async (accessToken) => {
  if (accessToken) {
    try {
      const response = await axios.get(
        "http://localhost:3000/auth/check-token",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 200) {
        // 토큰이 유효한 경우
        return true;
      } else {
        localStorage.removeItem("accessToken");

        // 다른 이유로 에러가 발생했지만, 토큰은 유효한 경우
        return true;
      }
    } catch (error) {
      removeLocalstorage();
      // 에러 처리
      console.error("Error checking token:", error);
      return false;
    }
  }
};
const PrivateRoute = ({ element, path }) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAndNavigate = async () => {
      if (accessToken && checkToken(accessToken)) {
        // 토큰이 유효한 경우
        // 토큰 시간을 연장 시켜주는 API 호출
        return;
      } else {
        // 토큰이 유효하지 않은 경우
        localStorage.removeItem("accessToken");
        setAccessToken(""); // 로컬 스토리지와 Recoil 상태 초기화
        removeLocalstorage();
      }
    };

    checkAndNavigate();
  }, [accessToken, navigate, localStorage.getItem("accessToken")]);

  return checkToken() ? element : null;
};
export default function Router() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* PrivateRoute로 감싸어 로그인이 필요한 페이지로 설정 */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route
            path="/inventory"
            element={<PrivateRoute element={<Inventory />} />}
          />
          <Route
            path="/employee"
            element={<PrivateRoute element={<Employee />} />}
          />
          <Route
            path="/password"
            element={<PrivateRoute element={<Password />} />}
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
