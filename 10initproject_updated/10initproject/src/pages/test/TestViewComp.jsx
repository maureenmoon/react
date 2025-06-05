import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOne } from "../../api/testApi";

function TestViewComp() {
  // const testid =  useParams() //여러개 올 수 있다
  //   const { testid, commentid } = useParams();
  const [viewData, setViewData] = useState();
  const { testid } = useParams();

  useEffect(() => {
    getOne(testid).then((res) => {
      console.log(res);
      setViewData(res.view);
    });
  }, [testid]);

  return (
    <>
      <h3 className="text-2xl font-bold py-4 border-b-2 border-gray-300">
        글보기
      </h3>
      <div className="flex justify-end gap-3 mb-3">
        <button className="bg-blue-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-blue-600">
          <Link to="/test/list">글리스트</Link>
        </button>
        <button className="bg-pink-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-pink-600">
          <Link to={`/test/modi/${testid}`}>글수정</Link>
          {/* <Link to="/test/modify"> </Link> */}
        </button>
      </div>
      <div>
        <div className="text-2xl">글제목 : {viewData?.title}</div>
        <div className="text-sm">이름 : {viewData?.name}</div>
        <div className="text-xl">내용 : {viewData?.content}</div>
      </div>
    </>
  );
}

export default TestViewComp;
