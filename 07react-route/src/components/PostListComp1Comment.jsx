import React, { useEffect, useState } from "react";
import axios from "axios";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Link } from "react-router-dom";

function PostListComp() {
  const [postData, setPostData] = useState([]);
  // const [contentData, setContentData] = useState([]);

  useEffect(() => {
    async function dataFetch() {
      const res = await axios("https://jsonplaceholder.typicode.com/posts"); //모든데이터를 한방에 가져와서 useState로 씀
      setPostData(res.data);
    }
    dataFetch();
  }, []); //defendency array

  return (
    <>
      <NavComp />
      <div className="container m-auto">
        <h3>Title</h3>
        <ul>
          {postData.map((item, i) => {
            return (
              <li key={i} className="flex justify-between">
                <Link to={`/view/${item.id}`}>{item.title}</Link>
                <div>
                  <Link to={`/view/${item.id}/comment`}>댓글보기</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <FooterComp />
    </>
  );
}

export default PostListComp;
