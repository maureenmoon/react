import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";
//axios에 쓸 경로명

export const getPostList = async () => {
  const res = await axios.get(url);
  return res.data.slice(0, 30);
};
