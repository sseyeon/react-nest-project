// Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import SM485P from "../assets/SM485P.jpg";
import SelectBox from "../components/SelectBox";
import DoughnutChart from "../components/chartjs/DoughnutChart";
import LineChart from "../components/chartjs/LineChart";

export default function Dashboard() {
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
          {/* <PageTitle title="DASHBOARD" /> */}

          <div className="container mx-auto px-6 py-2">
            {/* SelectBox */}
            <SelectBox options={locations} />
            <SelectBox options={equipments} />

            {/* 대시보드 내용 */}
            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[30px] max-w-sm mx-auto md:max-w-none mx-0">
              {/* card 1 */}
              <Card title="SM485P" content={SM485P} />
              {/* card 2 */}
              {/* Render the PieChart component */}
              <Card title="전체 공정률" content={<DoughnutChart />} />
            </div>
            {/* grid */}
            <div className="grid grid-cols-1 gap-[30px] max-w-sm mx-auto md:max-w-none mx-0">
              {/* card 3 */}
              <Card title="일별 공정률" content={<LineChart />} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
