const initState = {
  value: 1,
  title: "comments",
};

const reducer = (state = initState, action) => {
  console.log(state.value);

  if (action.type == "add") {
    // alert('test')
    return {
      ...state,
      value: state.value + action.payload,
    };
  }
  if (action.type == "deduct") {
    // alert('test')
    return {
      ...state,
      value: state.value - action.payload,
    };
  }
  return state;
};

export default reducer;
