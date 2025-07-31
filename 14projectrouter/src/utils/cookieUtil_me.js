import { Cookies } from "react-cookie";

const cookies = new Cookies();

//CRUD
//export 외부에서 중괄호 가져와 씀
export const setCookie = (name, value, days) => {
  const expired = new Date();
  expires.setUTCDate(expired.getUTCDate() + days);
  return cookies.set(name, value, { path: "/", expires: expired });
};
export const getCookie = () => {
  return cookies.get(name);
};
//아이디 바로 삭제하지말고, true false로만 관리
//path default = '/'
export const removeCookie = (name, path = "/") => {
  cookies.remove(name, { path });
};
