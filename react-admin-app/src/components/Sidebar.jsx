import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoHomeOutline,
  IoClipboardOutline,
  IoPeopleOutline,
  IoConstructOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import loginImg from "../assets/login.jpg";

const Sidebar = () => {
  const navigate = useNavigate();

  // 메뉴 아이템을 렌더링하는 함수
  const renderMenuItem = (to, icon, text) => (
    <Link
      to={to}
      className={`${
        text === "한화정밀기계" ? "" : "hover:bg-gray-700 rounded-md "
      } flex items-center p-3`}
    >
      {icon}
      <span className="hidden md:inline">{text}</span>
    </Link>
  );
  // 로그아웃 함수
  const handleLogout = () => {
    // 여기에서 서버에 로그아웃 요청을 보낼 수 있습니다.
    // 서버에서는 세션, 쿠키, 또는 토큰을 제거하고 클라이언트를 로그인 페이지로 이동시킵니다.

    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem("accessToken");

    // 로그인 페이지로 이동
    navigate("/");
  };
  return (
    <div className="bg-zinc-800 text-sm text-white h-full p-4">
      <div className="text-lg mb-2">
        {renderMenuItem(
          "/dashboard",
          <IoConstructOutline className="h-6 w-6 mr-2" />,
          "한화정밀기계"
        )}
      </div>

      {/* 메뉴 항목 */}
      {renderMenuItem(
        "/dashboard",
        <IoHomeOutline className="h-6 w-6 mr-2" />,
        "DASHBOARD"
      )}
      {renderMenuItem(
        "/inventory",
        <IoClipboardOutline className="h-6 w-6 mr-2" />,
        "재고관리"
      )}
      {renderMenuItem(
        "/employee",
        <IoPeopleOutline className="h-6 w-6 mr-2" />,
        "직원관리"
      )}
      {/* 로그아웃 버튼 */}
      <button
        onClick={handleLogout}
        className="hover:bg-gray-700 rounded-md flex items-center p-3"
      >
        <IoLogOutOutline className="h-6 w-6 mr-2" />
        <span className="hidden md:inline">로그아웃</span>
      </button>
      {/* 사용자 정보 */}
      <div className="mt-8">
        <div className="flex items-center p-3 border-t border-gray-700">
          <img
            src={loginImg}
            alt="User"
            className="h-8 w-8 rounded-full mr-2"
          />
          <div className="hidden md:inline">
            <p className="font-semibold">USER NAME</p>
            <p className="text-gray-500 text-sm">admin@hanhwa.co.kr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
