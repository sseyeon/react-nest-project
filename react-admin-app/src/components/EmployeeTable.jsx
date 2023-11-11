// Table.jsx

import React from "react";

const Table = ({
  data,
  currentPage,
  itemsPerPage,
  handlePageChange,
  theadData,
}) => {
  // 페이지네이션 상태를 계산합니다.
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);
  return (
    <div>
      {/* 테이블 헤더 */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {theadData.map((header, index) => (
              <th key={index} className="py-2 px-4 border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* 테이블 바디 */}
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.username}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.company.bs}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
              <td className="py-2 px-4 border-b">{item.phone}</td>
              <td className="py-2 px-4 border-b">{item.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <div className="mt-4 flex justify-end">
        <nav>
          <ul className="flex items-center">
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
              (_, index) => (
                <li key={index}>
                  <button
                    className={`${
                      currentPage === index + 1
                        ? "bg-zinc-800 text-white"
                        : "hover:bg-gray-200 "
                    } rounded-full py-2 px-4 mx-1`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Table;
