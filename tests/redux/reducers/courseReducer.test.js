import courseReducer from "../../../src/redux/reducers/courseReducer";
import * as actions from "../../../src/redux/actions/courseActions";

it("should add course when passed CREATE_COURSE_SUCCESS", () => {
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" }
  ];
  const newCourse = { id: 3, title: "C" };
  const updatedState = [...initialState, newCourse];

  const action = actions.createCourseSuccess(newCourse);

  expect(courseReducer(initialState, action)).toEqual(updatedState);
});

it("should add course when passed UPDATE_COURSE_SUCCESS", () => {
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" }
  ];
  const updatedCourse = { id: 2, title: "C" };
  const updatedState = [initialState[0], updatedCourse];
  const action = actions.updateCourseSuccess(updatedCourse);

  expect(courseReducer(initialState, action)).toEqual(updatedState);
});
