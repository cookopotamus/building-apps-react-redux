import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === actionTypes.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    actionTypeEndsInSuccess(action.type) ||
    action.type === actionTypes.END_API_CALL
  ) {
    return state - 1;
  }

  return state;
}
