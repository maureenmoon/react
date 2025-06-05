import axios from "axios";

// const API_SERVER_HOST = import.meta.env.VITE_API_SERVER_HOST;
const API_SERVER_HOST = "http://localhost:8080";
//

const prefix = `${API_SERVER_HOST}/api/test/`;
// 공통루트

export const postAdd = async (formData) => {
  //data add
  const res = await axios.post(prefix, formData);
  return res.data;
};

//list
export const getList = async () => {
  const res = await axios.get(prefix);
  return res.data;
};

//view one data
export const getOne = async (testid) => {
  const res = await axios.get(`${prefix}view/${testid}`);
  return res.data;
};

export const putOne = () => {};
