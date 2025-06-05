import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postAdd } from "../../api/testApi";

const init = {
  title: "",
  name: "",
  content: "",
};

function TestWriteComp() {
  const [testImageAdd, setTestImageAdd] = useState({ ...init }); //글자입력시 여기 이용
  const [fileName, setFileName] = useState("uploading images");
  const [images, setImages] = useState([]); //image 담을 공간
  const [imagePreview, setImagePreview] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // alert("글작성");
    e.preventDefault(); //글작성완료후 페이지 이동 안하게

    if (!testImageAdd.title.trim()) {
      alert("input title");
      document.querySelector("input[name='title']").focus(); //input[] : attribute
      return;
    }
    if (!testImageAdd.name.trim()) {
      alert("input name");
      document.querySelector("input[name='name']").focus();
      return;
    }
    if (!testImageAdd.content.trim()) {
      alert("input content");
      document.querySelector("input[name='content']").focus();
      return;
    }

    const formData = new FormData(); //img
    formData.append("title", testImageAdd.title);
    formData.append("name", testImageAdd.name);
    formData.append("content", testImageAdd.content);

    images.forEach((file) => {
      //forEach는 화일 여러개이므로
      formData.append("files", file);
    });

    const result = await postAdd(formData);
    //자료 보내면 메시지 보내는 것
    console.log(result);

    if (result.result == "success") {
      alert("write is completed");
      setTestImageAdd({ ...init });
      setImages([]);
      setFileName("img file uploaded");
      setImagePreview([]);

      navigate("/test/list");
    } else {
      alert("글작성 미완성");
    }
  };

  //create
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("data : " + name + "/" + value);
    setTestImageAdd({ ...testImageAdd, [name]: value });
  };

  //update
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); //files[]이렇게 안 하는 이유는 여러개라서
    const newImages = [...images, ...files]; //existing and new files을 newImages에 넣어라
    setImages(newImages);
    console.log(newImages);

    //preview from local
    const newPreviews = [
      ...imagePreview,
      ...files.map((file) => {
        return URL.createObjectURL(file);
      }),
    ];

    console.log(newPreviews);
    setImagePreview(newPreviews);
    // setFileName(newImages.length > 0 ? "image seleted" : "img file uploaded"); //업로딩화일이름 변경
    setFileName(
      newImages.length > 0
        ? `${newImages.length}개의 이미지 선택됨`
        : "img file uploaded"
    ); //화일업로딩시 확인메시지
    e.target.value = "";

    // //blob: binary large object
    // const reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    // reader.onload = () => {
    //   console.log(reader.result);
    // };
  };

  const handleRemoveImage = (idx) => {
    alert(idx);
    // const newFiles = images.filter((_, i) => {return i !== idx;});
    //idx와 같지 않은 것들만
    const newFiles = images.filter((_, i) => i !== idx); //(_,i)는 변수를 안쓴다는 의미
    const newPreviews = imagePreview.filter((_, i) => i !== idx);

    setImages(newFiles);
    setImagePreview(newPreviews);

    setFileName(
      newFiles.length > 0
        ? `${newFiles.length}개의 이미지 선택됨`
        : "img file uploaded"
    ); //화일업로딩시 확인메시지
  };

  return (
    <div>
      <h3 className="text-2xl font-bold py-4 border-b-2 border-gray-300 mb-3">
        글작성
      </h3>

      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-3">
            <label htmlFor="title" className="w-[100px]">
              <span className="text-red-500">*</span> 제목
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              id="title"
              className="border rounded-sm p-2 w-full"
              value={testImageAdd.title}
            />
          </div>
          <div>{testImageAdd.title}</div>
          <div className="flex items-center mb-3">
            <label htmlFor="name" className="w-[100px]">
              <span className="text-red-500">*</span> 이름
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              id="name"
              className="border rounded-sm p-2 w-full"
              value={testImageAdd.name}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="content" className="w-[100px]">
              <span className="text-red-500">*</span> 내용
            </label>
            <textarea
              name="content"
              id="content"
              onChange={handleChange}
              className="border rounded w-full h-[200px]"
              value={testImageAdd.content}
            ></textarea>
          </div>
          {/* <div>
            <label htmlFor="files" className="w-[100px]">
              첨부화일
            </label>
            <input type="file" id="files" name="files" />
          </div> */}
          <div
            className="flex items-center justify-center h-[150px] border
          border-gray-300 rounded-md bg-gray-200 hover:bg-gray-400 relative mb-3"
          >
            {fileName}
            <input
              type="file"
              name="files"
              className="absolute w-full h-full bg-blue-300 opacity-0"
              onChange={handleFileChange}
              multiple
              accept="image/*"
            />
            {/* opacity-0 화면에 안보이게 함 */}
          </div>

          {/* preview-start */}
          <div className="flex gap-3 mb-4 flex=wrap">
            {imagePreview.map((item, i) => {
              return (
                <div className="w-[100px] h-[100px] relative">
                  <img
                    src={item}
                    alt=""
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-2"
                    onClick={() => {
                      handleRemoveImage(i);
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          {/* preview-end */}

          {/* button-start */}
          <div className="flex justify-end gap-3 mb-3">
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-green-600"
            >
              작성완료
            </button>
            <button
              type="button"
              className="bg-blue-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-blue-600"
            >
              <Link to="/test/list">글리스트</Link>
            </button>
          </div>
          {/* button-end */}
        </form>
      </div>
    </div>
  );
}
export default TestWriteComp;
