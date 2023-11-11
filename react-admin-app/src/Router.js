import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Employee from "./pages/Employee";
import Password from "./pages/Password";

// 가상의 JWT 토큰 확인 함수 (실제로는 서버에서 토큰을 확인해야 함)
const checkToken = () => {
  const token = localStorage.getItem("jwtToken");
  return token !== null;
};

const PrivateRoute = ({ element, path }) => {
  if (checkToken()) {
    return element;
  } else {
    return element;
    // // 로그인이 필요한 페이지에 대한 리디렉션
    // return <Navigate to="/" />;
  }
};

export default function Router() {
  return (
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
  );
}
