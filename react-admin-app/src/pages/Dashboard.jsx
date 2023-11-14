// Dashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import Table from "../components/Table";

import SM485P from "../assets/SM485P.jpg";
import SelectBox from "../components/SelectBox";
import DoughnutChart from "../components/chartjs/DoughnutChart";
import LineChart from "../components/chartjs/LineChart";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const equipments = ["SM485P", "SP1-C", "SCM1-DP", "HM520W MF"];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          // 토큰이 없으면 console.log
          console.error("JWT token not found. Redirect to login page.");
          return;
        }

        const response = await axios.get("http://localhost:3000/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDashboardData(response.data.returnData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          <div className="container mx-auto px-6 py-2">
            {/* <SelectBox options={locations} />
            <SelectBox options={equipments} /> */}
            {/* 대시보드 내용 */}
            {dashboardData ? (
              <SelectBox
                options={dashboardData.factory.map(
                  (factory) => factory.factoryName
                )}
              />
            ) : (
              <SelectBox options={equipments} />
            )}

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[30px] max-w-sm md:max-w-none mx-auto">
              <Card title="SM485P" content={SM485P} />
              <Card
                title="전체 공정률"
                content={<DoughnutChart />}
                height={"h-[250px]"}
              />
            </div>

            {/* Check if dashboardData is not null before rendering the Table */}
            {dashboardData && (
              <Table
                data={dashboardData.factory}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange}
                theadData={[
                  "ID",
                  "장비 이름",
                  "공장",
                  "부족부품수량",
                  "총부품수량",
                  "공정률",
                ]}
              />
            )}

            <div className="grid grid-cols-1 gap-[30px] max-w-sm mx-auto md:max-w-none">
              <Card title="일별 공정률" content={<LineChart />} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
