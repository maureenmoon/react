import axios from "axios";

const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/test`;

//여러개 사용할때는 export, 하나만 사용할때는 export default
//구조분해할당
export const getList = async (params) => {
  const { page, size } = params;
  //   console.log(page, size);

  const res = await axios.get(prefix, {
    params: { page: page, size: size },
  });
  return res.data;
};

export const postAdd = async (formData) => {
  const res = await axios.post(prefix, formData);
  return res.data;
};
