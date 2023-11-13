import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImg from "../assets/login.jpg";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user/register", {
        username: formData.name,
        email: formData.email,
        password: formData.password,
      });

      window.alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      window.alert("회원가입에 실패했습니다.");
      console.error("등록에 실패했습니다:", error);
    }
  };

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
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>비밀번호</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>비밀번호 확인</label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full py-3 mt-8 rounded-md bg-black hover:text-stone-400 relative text-white"
            onClick={handleSubmit}
          >
            회원가입
          </button>
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
