import { PLUS_ACTION, MINUS_ACTION } from "../actionTypes";

export const initialState = {
  count: 0,
};

const PostReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case PLUS_ACTION:
      state = { ...state, count: state.count + 1 };
      break;
    case MINUS_ACTION:
      state = { ...state, count: state.count - 1 };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostReducer;
