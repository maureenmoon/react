import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, loginPostAsync } from "../../slices/loginSlice";
import { loginPost } from "../../api/memberApi";

const init = {
  email: "",
  password: "",
};

function Login() {
  const [loginParam, setLoginParam] = useState({ ...init });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setLoginParam({ ...loginParam, [name]: value }); //existing data가져옴
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginParam);
    //로그인방법#0 store에 저장
    // dispatch(login(loginParam)); mockup 이용할때만 사용해라.
    // navigate("/");

    //로그인방법#1
    // loginPost(loginParam).then((res) => {
    //   console.log(res);
    // });

    //로그인방법#2 dispatch,action, loginPostAsync
    const action = await dispatch(loginPostAsync(loginParam));
  };

  return (
    <div className=" h-[calc(100vh-56px) flex justify-center items-center px-4">
      {/* h-full, h-screen w-[400px] */}

      <div className="w-full sm:w-100 bg-gray-200 px-6 py-8 rounded-2xl shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">login</h3>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            이메일 / {loginParam?.email}
          </legend>
          <input
            type="text"
            className="input w-full"
            placeholder="이메일 입력"
            name="email"
            // onChange={(e)=>{e.target.value}}
            // onChange={(e) => {
            //   console.log(e.target.value);
            // }}
            onChange={handleChange}
            value={loginParam?.email}
          />
        </fieldset>

        <fieldset className="fieldset  mb-4">
          <legend className="fieldset-legend">
            비밀번호 / {loginParam?.password}
          </legend>
          <input
            type="password"
            className="input w-full"
            placeholder="비밀번호 입력"
            name="password"
            onChange={handleChange}
            value={loginParam?.password}
          />
        </fieldset>
        <button className="btn btn-primary w-full mb-4" onClick={handleSubmit}>
          로그인
        </button>
        <div className="flex justify-between">
          <div className="text-sm text-gray-600">닉네임/비밀번호 찾기</div>
          <div className="text-sm text-gray-600">
            <Link to="/member/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
