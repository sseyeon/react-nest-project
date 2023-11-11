// Signup.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // 추가된 부분
import loginImg from "../assets/login.jpg";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded-md">
          <h2 className="text-4xl font-bold text-center py-4">회원가입</h2>
          <div className="flex flex-col mb-4">
            <label>이름</label>
            <input className="border relative bg-gray-100 p-2" type="text" />
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input className="border relative bg-gray-100 p-2" type="text" />
          </div>
          <div className="flex flex-col mb-4">
            <label>비밀번호</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>비밀번호 확인</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          <Link to="/signup">
            <button className="w-full py-3 mt-8 rounded-md bg-black hover:text-stone-400 relative text-white">
              회원가입
            </button>
          </Link>
          <Link to="/">
            <button className="w-full py-3 mt-2 rounded-md bg-black hover:text-stone-400 relative text-white">
              이미 계정이 있습니다
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
