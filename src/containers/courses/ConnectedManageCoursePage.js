import ManageCoursePage from "../../components/courses/ManageCoursePage";
import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { connect } from "react-redux";
import { newCourse } from "../../../tools/mockData";

function getCourseBySlug(courses, slug) {
  return courses.find(courses => courses.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;

  return {
    authors: state.authors,
    courses: state.courses,
    course
  };
}

const mapDispatchToProps = {
  loadAuthors,
  loadCourses,
  saveCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
