import { SEARCH_CALL } from "../constants";

const initialState = {
  items: [],
};

const app = function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_CALL: {
      const { data = [] } = action;
      return {
        ...state,
        items: data,
      };
    }

    default: {
      return state;
    }
  }
};

export default app;
