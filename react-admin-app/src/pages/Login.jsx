import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../recoil.jsx";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import loginImg from "../assets/login.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // 기본 제출 동작 방지

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      // console.log("Login success:", response.data);
      setAccessToken(response.data.accessToken);
      // console.log("RECOIL accessToken ", accessToken);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // 로그인 실패 처리
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
        <div className="max-w-[400px] w-full mx-auto bg-white p-8 rounded-md">
          <h2 className="text-4xl font-bold text-center py-4">
            <p>한화정밀기계</p>
            <p className="mt-2">LOGIN</p>
          </h2>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col mb-4">
              <label>E-mail</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-8 rounded-md bg-black hover:text-stone-400 relative text-white"
            >
              LOGIN
            </button>
          </form>
          <Link to="/signup">
            <button className="w-full py-3 mt-2 rounded-md bg-black hover:text-stone-400 relative text-white">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
