import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "increment") {
    return {
      // 바뀌는 값들만 바꿔주고, 나머지 값들은 ...state 처리해서 기존 state 값을 가져오기
      ...state,
      counter: state.counter + 1,
      //   showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount,
      //   showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
      //   showCounter: state.showCounter,
    };
  }

  // toggle counter
  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
