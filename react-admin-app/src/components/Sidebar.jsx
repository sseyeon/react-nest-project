import React from "react";
import { Link } from "react-router-dom";
import {
  IoHomeOutline,
  IoClipboardOutline,
  IoPeopleOutline,
  IoConstructOutline,
  IoKeyOutline,
} from "react-icons/io5";
import loginImg from "../assets/login.jpg";

const Sidebar = () => {
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
      {renderMenuItem(
        "/password",
        <IoKeyOutline className="h-6 w-6 mr-2" />,
        "비밀번호 변경"
      )}

      {/* 사용자 정보 */}
      <div className="mt-8">
        <div className="flex items-center p-3 border-t border-gray-700">
          <img
            src={loginImg} // 사용자 이미지 URL을 적절히 변경하세요.
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
