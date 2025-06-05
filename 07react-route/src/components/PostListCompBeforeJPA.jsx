import React, { useEffect, useState } from "react";
import axios from "axios";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Link } from "react-router-dom";

function PostListComp() {
  const [postData, setPostData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const listCnt = 10;
  async function postListData() {
    // const res = await axios("http://*", { params: { AA: aa, BB: bb } });
    const resData = await axios("https://jsonplaceholder.typicode.com/posts", {
      // ?_page=1&_limit=5
      params: {
        _page: currentPage,
        _limit: listCnt,
      },
    });
    console.log(resData.data);
    console.log(resData.headers["x-total-count"]);
    const totalPages = Math.ceil(resData.headers["x-total-count"] / listCnt);
    setTotalPages(totalPages);
    setPostData(resData.data);
  }
  //데이터 가져오기
  useEffect(() => {
    postListData();
  }, [currentPage]);

  function renderPageNumber() {
    const pageNumbers = [];
    const pagerCnt = 5;
    let startPage = Math.floor((currentPage - 1) / pagerCnt) * pagerCnt + 1;
    let endPage = startPage + pagerCnt - 1;
    // console.log(startPage, endPage);
    for (let i = startPage; i <= endPage; i++) {
      // pageNumbers.push(i);
      pageNumbers.push(
        <span
          onClick={() => {
            setCurrentPage(i);
          }}
          className={`${
            i == currentPage ? "active" : ""
          } rounded-lg px-2 hover:bg-slate-100`}
          style={i == currentPage ? { background: "blue" } : {}}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  }

  return (
    <>
      <NavComp />
      <div className="container mx-auto">
        test - {currentPage} /{totalPages}
        <ul>
          {postData.map((item, i) => {
            return (
              <li key={i}>
                <Link to={`/view/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        {/* pagination */}
        <div className="pagination flex justify-center gap-4 py-4 items-center">
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            disabled={currentPage == 1}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-40"
          >
            prev
          </button>
          {renderPageNumber()}
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage == totalPages}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-40"
          >
            next
          </button>
        </div>
      </div>
      <FooterComp />
    </>
  );
}

export default PostListComp;
