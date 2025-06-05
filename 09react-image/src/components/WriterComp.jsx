import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { postAdd } from "../api/testImageApi";
import { useNavigate } from "react-router-dom";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const initState = {
  title: "",
  name: "",
  content: "",
};

function WriterComp() {
  const [testImageAdd, setTestImageAdd] = useState({ ...initState });
  const [state, setstate] = useState({
    center: { lat: 37.555946, lng: 126.972317 },
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // <validation>
    // if (title == "") {
    //   // alert("input title");
    //   toast.error("input title");
    //   document.querySelector("input[name='title']").focus();
    // }

    if (!testImageAdd.title.trim()) {
      toast.error("input title");
      document.querySelector("input[name='title']").focus();
      return;
    }
    if (!testImageAdd.name.trim()) {
      toast.error("input name");
      document.querySelector("input[name='name']").focus();
      return;
    }
    if (!testImageAdd.content.trim()) {
      toast.error("input content");
      document.querySelector("input[name='content']").focus();
      return;
    }
    // <validation-end>
    const formData = new FormData();
    formData.append("title", testImageAdd.title);
    formData.append("name", testImageAdd.name);
    formData.append("content", testImageAdd.content);
    if (testImageAdd.files) {
      formData.append("files", testImageAdd.files[0]);
    }
    // 자료 보내는 것은 다른 폴더/화일 만들어서 거기의 export기능 이용: testImageApi.js
    try {
      const result = await postAdd(formData);
      console.log(result);
      // 입력자료 보낸후, 다시 초기화
      setTestImageAdd({ ...initState });
      // 실행후 페이지 이동
      navigate("/");
    } catch (error) {}
  }
  // function handleTitle(e) {
  //   setTitle(e.target.value);
  // }
  // function handleName(e) {
  //   setName(e.target.value);
  // }
  function handleChange(e) {
    const { name, value } = e.target;
    console.log("data : " + name + "/ " + value);
    setTestImageAdd({
      ...testImageAdd,
      [name]: value,
    });
  }
  function handleFileChange(e) {
    setTestImageAdd({
      ...testImageAdd,
      files: e.target.files,
    });
  }
  return (
    <div className="px-4">
      <ToastContainer />
      <h3 className="text-hold border-b h-8 mb-4 text-lg">글작성하기</h3>
      <div
        className="mb-4"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Map // 지도를 표시할 Container
          id="map"
          center={state.center}
          style={{
            width: "100%",
            height: "350px",
          }}
          level={3} // 지도의 확대 레벨
          className="mb-3"
          onDragEnd={(e) => {
            setstate({
              center: {
                lat: e.getCemter().getLat(),
                lng: e.getCenter().getLng(),
              },
            });
          }}
        >
          <MapMarker position={{ lat: state.lat, lng: state.center.lng }} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 100,
              transform: "translate(-50%,-50%)",
            }}
          >
            +
          </div>
        </Map>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => {
            setstate({ center: { lat: 37.555946, lng: 126.972317 } });
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          서울역
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setstate({ center: { lat: 37.5031784, lng: 126.8820367 } });
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            구로역
          </button>
          <span>
            현재위치 : {state.center.lat} / {state.center.lng}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-3">
            <span className="text-red-500">*</span>
            제목
            {/* {title} */}
            {testImageAdd.title}
          </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className="border rounded w-full p-2"
            id="title"
            value={testImageAdd.title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-3">
            <span className="text-red-500">*</span>
            작성자
            {testImageAdd.name}
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="border rounded w-full p-2"
            id="name"
            value={testImageAdd.name}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-3">
            <span className="text-red-500">*</span>
            내용
            {testImageAdd.content}
          </label>
          <textarea
            name="content"
            onChange={handleChange}
            className="border rounded w-full p-2 h-[280px]"
            id="content"
            rows="5"
            value={testImageAdd.content}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="files" className="block mb-3">
            파일
          </label>
          {/* names = files : react DTO변수명과 동일 */}
          <input
            type="file"
            name="files"
            className="border rounded w-full p-2"
            id="files"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriterComp;
