import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
export default function Password() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangePassword = () => {
    // 간단한 유효성 검사
    if (!currentPassword || !newPassword || !confirmPassword) {
      setErrorMessage("모든 필드를 입력하세요.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
      return;
    }

    // 여기에서 실제 패스워드 변경 로직을 추가할 수 있습니다.
    // 패스워드 변경 성공 또는 실패에 따라 상태를 업데이트할 수 있습니다.

    // 임시로 성공 메시지를 설정합니다.
    setErrorMessage("");
    alert("패스워드가 성공적으로 변경되었습니다.");
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="flex justify-center items-center h-full">
            <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded-md border border-[#e4e4e5]">
              <h2 className="text-4xl font-bold text-center py-4">
                비밀번호 변경
              </h2>
              <div className="flex flex-col mb-4">
                <label>현재 비밀번호</label>
                <input
                  className="border relative bg-gray-100 p-2"
                  type="text"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label>새 비밀번호</label>
                <input
                  className="border relative bg-gray-100 p-2"
                  type="password"
                />
              </div>
              <div className="flex flex-col ">
                <label>새 비밀번호 확인</label>
                <input
                  className="border relative bg-gray-100 p-2"
                  type="password"
                />
              </div>
              <button className="w-full py-3 mt-8 rounded-md bg-black hover:text-stone-400	relative text-white">
                변경하기
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
