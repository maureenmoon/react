import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../api/testImageApi";
import dayjs from "dayjs";

function ListComp() {
  const [testData, setTestData] = useState([]);
  const size = 5;
  const [page, setPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    // async function listData() {
    //   const listDataView = await axios.get(
    //     `http://localhost:8080/test?page=${page}&size=${size}`
    //   );
    //   console.log(listDataView.data);
    //   setTestData(listDataView.data.content);
    // }
    // listData();

    //Promise().then()
    getList({ page, size }).then((data) => {
      console.log(data);
      setTestData(data.content);
      setTotalElements(data.totalElements);
      setTotalPage(data.totalPages);
    });
  }, [page]);

  function handlePageChange(newPage) {
    setPage(newPage);
  }

  return (
    <div>
      <h3>글리스트</h3>
      <ul>
        <li className="flex justify-between py-4 border-b px-4 mb-3">
          <div className="flex gap-3">
            <span className="w-4">n</span>
            <span>제목</span>
          </div>
          <div className="flex gap-3">
            <span>작성자</span>
            <span className="w-[85px] text-end">날짜</span>
          </div>
        </li>
        {testData.map((item, i) => {
          return (
            <li
              key={i}
              className="flex justify-between py-4 hover:bg-gray-100 px-4 border rounderd mb-3"
            >
              <div className="flex gap-3">
                <span className="w-4">{totalElements - (page * size + i)}</span>
                <span>
                  {item.imageFileNames && (
                    <img
                      src={`http://localhost:8080/images/thumb_${item.imageFileNames}`}
                      alt=""
                    />
                  )}
                </span>
                <span>{item.title}</span>
              </div>
              <div className="flex gap-3">
                <span>{item.name}</span>
                {/* <span>{item.startdate}</span>*/}
                <span>{dayjs(item.startdata).format("YYYY-MM-DD")}</span>
              </div>
            </li>
          );
        })}
      </ul>
      {/* pagination */}
      <div className="flex gap-3 justify-center">
        <button
          className="px-2 py-1 bg-purple-400 rounded text-white text-sm"
          onClick={() => {
            handlePageChange(page - 1);
          }}
          disabled={page == 0}
        >
          Prev
        </button>
        <div>
          {page + 1} / {totalPage}
        </div>
        <button
          className="px-2 py-1 bg-purple-400 rounded text-white text-sm"
          onClick={() => {
            handlePageChange(page + 1);
          }}
          disabled={page + 1 >= totalPage}
        >
          Next
        </button>
      </div>
      <div className="flex justify-end">
        <Link
          to="/write"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          글작성
        </Link>
      </div>
    </div>
  );
  <Link to="/"></Link>;
}

export default ListComp;
