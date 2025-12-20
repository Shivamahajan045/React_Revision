import { useState } from "react";
import "./Pagination.css";
import { useEffect } from "react";
import axios from "axios";

const Pagination = () => {
  const [tableData, setTableData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems =
    tableData?.users?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = Math.ceil(tableData?.total / rowsPerPage);

  const handlePreviousClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (pageNo) => {
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=0")
      .then((res) => {
        setTableData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((value, index) => (
            <tr key={index}>
              <td>{value.firstName}</td>
              <td>{value.email}</td>
              <td>{value.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousClick} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={currentPage === index + 1 ? "active" : ""}
            key={index}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
