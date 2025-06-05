import React, { useState } from "react";
import { data, Link, useNavigate, useParams } from "react-router-dom";
import { getOne, putOne } from "../../api/testApi";
// import ToastContainer, { toast } from "react-toastify";

const init = {
  title: "",
  name: "",
  content: "",
};

function TestModiComp() {
  const [form, setForm] = useState({ ...init });
  const [fileName, setFileName] = useState("uploading images");
  const [images, setImages] = useState([]); //image 담을 공간
  const [imagePreviews, setImagePreviews] = useState([]);
  const [originalImageNames, setOriginalImageNames] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { testid } = useParams(); //deconstructure 문법 : 여러배열중 testid만 뽑아쓰겠다

  // 기존 데이터 불러오기

  // useEffect(() => {
  //   getOne(testid).then((data) => {
  //     console.log(data);
  //     setForm({
  //     title: data.title,
  //     name: data.name,
  //     content: data.content,
  //   });
  // });

  // const handleChange = () => {}; 먼저 만들어 return내용 작성후 상세 function만들자

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getOne(testid);
        console.log(data);
        setForm({
          title: data.view.title,
          name: data.view.name,
          content: data.view.content,
        });
        //기존 이미지 있다면 imagePreview에 추가
        if (data.view.image) {
          setImagePreview(data.view.image); //thumbnail preview
          setOriginalImageNames(data.view.image); //save a file name
        }
      } catch (e) {
        toast.error("no data");
      }
    }
    fetchData();
  }, [testid]);

  //input change
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  //file upload = write
  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    const newImages = [...images, ...files];
    if (newImages.length > 5) {
      alert("img upto 5 files");
      return;
    }
    setImages(newImages);
    const newPreviews = [
      ...imagePreviews,
      ...files.map((file) => URL.createObjectURL(file)),
    ];
    setImagePreviews(newPreviews);
    setFileName(
      newImages.length > 0
        ? `${newImages.length} selected`
        : "uploading img file"
    );
    e.target.value = "";
  }
  //delete
  function handleRemoveImage(idx) {
    const newPreviews = imagePreviews.filter((_, i) => i !== idx);
    if (
      !imagePreviews[idx].startsWith("data:") &&
      !imagePreviews[idx].startsWith("blob")
    ) {
      setOriginalImageNames(originalImageNames.filter((_, i) => i !== idx));
    } else {
      setImages(images.filter((_, i) => i !== idx - originalImageNames.length));
    }
    setImagePreviews(newPreviews);
    setFileName(
      newPreviews.length > 0
        ? `${newPreviews.length} selected`
        : "uploading img file"
    );
  }

  //write
  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;
    if (!form.title.trim()) {
      toast.error("input title");
      return;
    }
    if (!form.name.trim()) {
      toast.error("input name");
      return;
    }
    if (!form.content.trim()) {
      toast.error("input content");
      return;
    }
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("name", form.name);
    formData.append("content", form.content);
    originalImageNames.forEach((fileName) => {
      formData.append("updatedFileNames", fileName);
    });
    images.forEach((file) => {
      formData.append("files", file);
    });
    try {
      const result = await putOne(testid, formData);
      if (result.result == "success") {
        toast.success("update completed");
        setTimeout(() => {
          navigate("/test/list");
        }, 2000);
      }
    } catch (error) {
      toast.error("update failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* <ToastContainer /> */}
      <h3 className="text-2xl font-bold py-4 border-b-2 border-gray-300">
        글수정
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
              value={form.title}
            />
          </div>
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
              value={form.name}
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
              value={form.content}
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
              className="bg-green-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-green-600"
            >
              수정완료
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded text-white font-bold text-xl hover:bg-blue-600">
              <Link to="/test/list">글리스트</Link>
            </button>
          </div>
          {/* button-end */}
        </form>
      </div>
      {/* </div> */}
    </>
  );
}
export default TestModiComp;
