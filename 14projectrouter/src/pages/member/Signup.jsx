import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const init = {
  email: "",
  nickname: "",
  password: "",
  password2: "",
  name: "",
};

function Signup() {
  const [form, setForm] = useState({ ...init });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sign up data", form);

    //simulate signup -> assume success
    dispatch(login({ email: form.email, nickname: form.nickname }));

    //navigate to home
    navigate("/");
  };

  return (
    <div className=" h-[calc(100vh-56px) flex justify-center items-center px-4">
      <div className="w-full sm:w-100 bg-gray-200 px-6 py-8 rounded-2xl shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">회원가입</h3>
        {import.meta.env.VITE_API_URL}
        <fieldset className="fieldset  mb-4">
          <legend className="fieldset-legend">이메일</legend>
          <input
            type="email"
            className="input w-full"
            placeholder="email 입력"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </fieldset>
        <fieldset className="fieldset  mb-4">
          <legend className="fieldset-legend">닉네임</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="닉네임 입력"
            name="nickname"
            onChange={handleChange}
            value={form.nickname}
          />
        </fieldset>
      </div>
    </div>
  );
}
export default Signup;
