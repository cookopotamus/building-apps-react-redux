import { createStore } from "redux";
import rootReducer from "../../src/redux/reducers";
import initialState from "../../src/redux/reducers/initialState";
import * as courseActions from "../../src/redux/actions/courseActions";

it("should handle creating courses", () => {
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code"
  };

  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);

  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
