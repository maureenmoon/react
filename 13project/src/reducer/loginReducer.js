const init = {
  value: 0,
  email: "",
  nickname: "",
};

const loginReducer = (state = init, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "login":
      return {
        ...state,
        email: action.payload.email,
        nickname: action.payload.nickname,
      };
    default:
      return state;
  }
  return state;
};

export default loginReducer;
