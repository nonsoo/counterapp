// store the increment and decreament strings in a variable so that if spelling mistake it can be caught
const INCREMENT = "increatment";
const DECREMENT = "decrement";
const RESET = "reset";

export const increment = () => ({
  //This is what is going to get called when func is called
  type: INCREMENT,
});

export const decrement = () => ({
  //This is what is going to get called when func is called
  type: DECREMENT,
});

export const reset = () => ({
  //This is what is going to get called when func is called
  type: RESET,
});

const initialState = {
  //setting the initial state of the variable
  count: 0,
};

export default function counter(state = initialState, action) {
  //controls what happens based on which action is called
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
