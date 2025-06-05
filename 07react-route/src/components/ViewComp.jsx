import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentComp from "./CommentComp";

function ViewComp() {
  const { id } = useParams();
  const [view, setViewData] = useState({});
  const [loading, setLoaing] = useState(true);
  useEffect(() => {
    const resData = async () => {
      // try {} catch (error) {}finally {}
      try {
        // axios.get("url")
        // axios("https://jsonplaceholder.typicode.com/posts"+id)
        const res = await axios(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(res.data.title);
        const userNo = res.data.userId; //users에 userId정보가 없어서 posts자료에서 연동시킴
        const userData = await axios(
          `https://jsonplaceholder.typicode.com/users/${userNo}`
        );

        //   setViewData(res.data);
        const newData = {
          name: userData.data.name,
          email: userData.data.email,
          title: res.data.title,
          body: res.data.body,
        };
        setViewData(newData);
      } catch (error) {
        console.error("data failed" + error);
      } finally {
        setLoaing(false);
      }
    };
    resData();
  }, []);

  return (
    <>
      <NavComp />
      {/* {loading ? () :() } */}
      {loading ? (
        <p>Data is loading</p>
      ) : (
        <div className="container mx-auto">
          <hr />
          <h4 className="mb-3">글내용보기/{id}</h4>
          <div className="p-4">
            <p>Writer : {view.name}</p>
            <p>email : {view.email}</p>
            <p>Title : {view.title}</p>
            <p>Content : {view.body}</p>
          </div>
        </div>
      )}
      <CommentComp />
      <FooterComp />
    </>
  );
}

export default ViewComp;
