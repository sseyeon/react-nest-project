import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import EmployeeTable from "../components/EmployeeTable";
import SelectBox from "../components/SelectBox";

export default function Employee() {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then((response) => response.json())
      .then((result) => setEmployeeData(result))
      .catch((error) => console.log("error".error));
  }, []);

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const locations = ["본사", "양산점", "창원점"];
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />
        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-3">
            {/* SelectBox */}
            <SelectBox options={locations} />
            {/* grid */}
            <div className="grid grid-cols-1 gap-[30px] max-w-sm mx-auto md:max-w-none mx-0">
              {/* Table */}
              <EmployeeTable
                data={employeeData}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange}
                theadData={[
                  "닉네임",
                  "이름",
                  "부서",
                  "이메일",
                  "전화번호",
                  "거주지",
                ]}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
