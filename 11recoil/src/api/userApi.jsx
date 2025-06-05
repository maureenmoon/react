import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";
//axios에 쓸 경로명

export const getUserList = async () => {
  const res = await axios.get(url);
  return res.data;
};
