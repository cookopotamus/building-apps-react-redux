import React, { Component } from "react";
import PropTypes from "prop-types";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export default class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch(error => {
        alert("Loading courses failed " + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed " + error);
      });
    }
  }

  handleDeleteCourse = async course => {
    toast.success("Course deleted!");
    try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      toast.error("LOLJK. Deleted failed. " + error.message, {
        autoClose: false
      });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <h2 style={{ display: "inline-block" }}>Courses</h2>
            <button
              style={{ marginBottom: "0.5rem", float: "right" }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            <CourseList
              courses={this.props.courses}
              onDeleteClick={this.handleDeleteCourse}
            ></CourseList>
          </>
        )}
      </>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
