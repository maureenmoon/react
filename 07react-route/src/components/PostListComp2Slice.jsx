import React, { useEffect, useState } from "react";
import axios from "axios";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Link } from "react-router-dom";

function PostListComp() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  // pagination var
  const [currentPage, setCurrentPage] = useState(1);
  const listCnt = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios("https://jsonplaceholder.typicode.com/posts"); //모든데이터를 한방에 가져와서 useState로 씀
        console.log(res.data);
        setPostData(res.data);
        // skeleton
        setTimeout(() => {
          setLoading(false);
        }, 1000); //callback함수:뒷부분에 표기된 1000초 지난 후 실행
      } catch (error) {
        console.error("data failed" + error);
      }
      // finally {setLoading(false)}
    }
    fetchData();
  }, []); //defendency array
  // pagination
  const lastItem = currentPage * listCnt; //10
  const firstItem = lastItem - listCnt; //0
  const currentItem = postData.slice(firstItem, lastItem);
  const totalPages = Math.ceil(postData.length / listCnt);
  console.log(firstItem, lastItem, currentItem, totalPages);
  function gotoPage(page) {
    // alert(page);
    if (page <= totalPages && page >= 1) {
      //page 변화되는 수
      setCurrentPage(page);
    }
  }
  return (
    <>
      <NavComp />
      <div className="container m-auto">
        <h3>Title</h3>
        {/* skeleton */}
        {/* {loading ? (<></>) : (<></>)} */}
        {loading ? (
          <ul>
            {currentItem.map((_, i) => {
              return (
                <li key={i} className="pb-2 px-4 animate-plus">
                  <div className="bg-gray-300 h-4 rounded"></div>
                </li>
              );
            })}
          </ul>
        ) : (
          <>
            <ul>
              {currentItem.map((item, i) => {
                return (
                  <li key={i} className="flex justify-between px-4">
                    <Link to={`/view/${item.id}`}>{item.title}</Link>
                    {/* <div><Link to={`/view/${item.id}/comment`}>댓글보기</Link>
                    </div> */}
                  </li>
                );
              })}
            </ul>
            {/* pagination */}
            <div className="flex justify-center items-center gap-3 py-4">
              <button
                onClick={() => {
                  gotoPage(currentPage - 1);
                }}
                disabled={currentPage == 1}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-40"
              >
                prev
              </button>
              <span>
                page {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => {
                  gotoPage(currentPage + 1);
                }}
                disabled={currentPage == totalPages}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-40"
              >
                next
              </button>
            </div>
          </>
        )}
      </div>
      <FooterComp />
    </>
  );
}

export default PostListComp;
