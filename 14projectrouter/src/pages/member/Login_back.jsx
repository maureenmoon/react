import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../slices/loginSlice";

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
    setLoginParam({ ...loginParam, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginParam);
    dispatch(login(loginParam));
    navigate("/");
  };

  return (
    <div className=" h-[calc(100vh-56px)] flex justify-center items-center px-4">
      <div className="w-full sm:w-100 bg-gray-200 px-6 py-8 rounded-2xl shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">Login</h3>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            이메일 / {loginParam?.email}
          </legend>
          <input
            type="text"
            className="input w-full"
            placeholder="이메일입력"
            name="email"
            // onChange={(e) => {
            //   console.log(e.target.value);
            // }}

            onChange={handleChange}
            value={loginParam?.email}
          />
        </fieldset>

        <fieldset className="fieldset mb-4">
          <legend className="fieldset-legend">
            패스워드 / {loginParam?.password}
          </legend>
          <input
            type="password"
            className="input w-full"
            placeholder="패스워드입력"
            name="password"
            onChange={handleChange}
            value={loginParam?.password}
          />
        </fieldset>

        <button className="btn btn-primary w-full mb-4" onClick={handleSubmit}>
          로그인
        </button>

        <div className="flex justify-between">
          <div className="text-sm text-gray-600">아이디/비밀번호찾기</div>
          <div className="text-sm text-gray-600">
            <Link to="/member/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
