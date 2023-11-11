import React from "react";
import { Link } from "react-router-dom";
import { IoPersonCircle, IoListSharp } from "react-icons/io5";

// 드롭다운 메뉴 생성 함수
const DropdownMenu = ({ items }) => {
  return (
    <div className="dropdown-box absolute right-0 mt-2 w-48 bg-white border rounded-md p-2 hidden group-hover:block">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="block text-gray-800 hover:bg-gray-200 px-4 py-2"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const Topbar = () => {
  const profileMenuItems = [
    { to: "/profile", label: "프로필" },
    { to: "/settings", label: "설정" },
    { to: "/logout", label: "로그아웃" },
  ];

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      {/* 왼쪽 로고 */}
      <div className="text-white font-bold text-lg">
        <button className="text-black focus:outline-none group">
          {/* 관리자 아이콘 */}
          <IoListSharp className="h-6 w-6" />
        </button>
      </div>

      {/* 오른쪽 드롭다운 박스 */}
      <div className="relative group">
        <button className="text-black focus:outline-none group">
          {/* 관리자 아이콘 */}
          <IoPersonCircle className="h-6 w-6 fill-current" />
        </button>

        {/* 드롭다운 박스 */}
        <DropdownMenu items={profileMenuItems} />
      </div>
    </div>
  );
};

export default Topbar;
