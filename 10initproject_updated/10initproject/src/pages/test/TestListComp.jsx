import React, { useEffect, useState } from "react";
import { getList } from "../../api/testApi";
import { Link, useNavigate } from "react-router-dom";

const initState = {
  content: [], //data가져온다
  number: 0, //initial page
  size: 0,
};

function TestListComp() {
  const [serverData, setServerData] = useState({ ...initState });

  const navigate = useNavigate();
  //list and pagination
  useEffect(() => {
    getList().then((res) => {
      //.then: promise방식, res is a parameter 매개변수(아무단어 사용해도 됨)
      console.log(res);
      setServerData({ ...res.data });
    });
  }, []);
  return (
    <>
      <h3 className="text-2xl font-bold py-4 border-b-2 border-gray-300">
        글 리스트
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 기본:한개, 모바일:2개,  pc화면:4개 */}
        {/* grid 바둑판형식으로 표기 */}
        {serverData.content &&
          serverData.content.map((item, i) => {
            return (
              <>
                <div
                  className="bg-green-200 rounded shadow-lg border-2 border-blue-300"
                  onClick={() => {
                    // navigate(`/test/view/${item.id}/comment/${item.title}`);
                    navigate(`/test/view/${item.id}`);
                  }}
                >
                  <div className="w-full h-[200px] md:h-[100px] bg-blue-300 flex justify-center items-center">
                    test
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <h4 className="text-gray-700 text-sm">{item.name}</h4>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="flex justify-end gap-3 mt-3 mb-3">
        <button className="bg-blue-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-blue=600">
          <Link to="/test/write">글쓰기</Link>
        </button>
      </div>
    </>
  );
}

export default TestListComp;
