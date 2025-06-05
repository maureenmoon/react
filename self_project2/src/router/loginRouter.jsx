import Login from "../pages/login/Login";
import MyPage from "../pages/login/MyPage";

const loginRouter = () => {
  return [
    {
      path: "",
      element: <Login />,
    },
    {
      path: "mypage",
      element: <MyPage />,
    },
  ];
};

export default loginRouter;
