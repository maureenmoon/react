import axios from "axios";

const URL = import.meta.env.VIEE_API_URL || "http://localhost:8080";

// const loginPost = ()=>{}
const loginPost = async (loginParam) => {
  const header = {
    headers: {
      "Content-Type": "x-www-form-urlencoded",
    },
  };

  const formData = new FormData(); //첨부화일 넣을 때 사용명령어
  formData.append("username", loginParam.email); //'username' db postman에 쓰는 확정된 단어
  formData.append("password", loginParam.password);

  const response = await axios.post(
    URL + "/api/member/login",
    formData,
    header
  );

  return response.data;
};

export { loginPost };
