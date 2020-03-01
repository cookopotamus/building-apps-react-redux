import * as actionTypes from "../constants/actionTypes";

export function beginApiCall() {
  return { type: actionTypes.BEGIN_API_CALL };
}

export function endApiCall() {
  return { type: actionTypes.END_API_CALL };
}
