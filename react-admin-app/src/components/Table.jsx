import React, { useEffect, useState } from "react";

const Table = ({
  data,
  currentPage,
  itemsPerPage,
  handlePageChange,
  theadData,
}) => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // 데이터가 변경될 때마다 검색어에 따라 필터링
    const filtered = data.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredData.slice(firstItemIndex, lastItemIndex);

  return (
    <div>
      {/* Search input */}
      <div className="grid justify-items-end mb-4">
        <input
          type="text"
          placeholder="Search All Fields"
          className="border relative bg-white p-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
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
          {currentItems.length === 0 ? (
            <tr>
              <td colSpan={theadData.length} className="py-2 px-4 text-center">
                검색된 데이터가 없습니다.
              </td>
            </tr>
          ) : (
            currentItems.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.equipmentName}</td>
                <td className="py-2 px-4 border-b">{item.factoryName}</td>
                <td className="py-2 px-4 border-b">
                  {item.shortagePartsQuantity}
                </td>
                <td className="py-2 px-4 border-b">{item.allPartsQuantity}</td>
                <td className="py-2 px-4 border-b">{item.progress} %</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 mb-4 flex justify-end">
        <nav>
          <ul className="flex items-center">
            {Array.from({
              length: Math.ceil(filteredData.length / itemsPerPage),
            }).map((page, index) => (
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
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Table;
