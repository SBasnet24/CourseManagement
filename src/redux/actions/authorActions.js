import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthersSuccess(authors) {
  return { type: types.LOAD_AUTHER_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthersSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
