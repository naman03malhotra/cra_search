import { apiEndPoint, SEARCH_CALL } from "../constants";

function searchCall(param) {
  return function (dispatch) {
    return fetch(`${apiEndPoint}&q=${param}`).then(async (response) => {
      const results = await response.text();

      dispatch({
        type: SEARCH_CALL,
        data: JSON.parse(results).items,
      });
    });
  };
}

export { searchCall };
