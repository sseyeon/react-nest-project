import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import Table from "../components/Table";
import SelectBox from "../components/SelectBox";
const Inventory = () => {
  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    quantity: Math.floor(Math.random() * 100),
  }));

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const locations = ["본사", "양산점", "창원점"];
  const equipments = ["SM485P", "SP1-C", "SCM1-DP", "HM520W MF"];
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
            <SelectBox options={equipments} />
            {/* 대시보드 내용 */}
            {/* grid */}
            <div className="grid grid-cols-1 gap-[30px] max-w-sm mx-auto md:max-w-none">
              {/* card 3 */}
              <Card title="부품 소모량" content="This is some text content." />

              {/* Table */}
              <Table
                data={data}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange}
                theadData={["ID", "Name", "Quantity"]}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;
