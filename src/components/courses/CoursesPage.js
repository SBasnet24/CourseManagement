import React, { Component } from "react";
// import PropTypes from "prop-types";

class CoursesPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    course: {
      title: "",
    },
  };
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({
      course,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
        {/* {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))} */}
      </form>
    );
  }
}
CoursesPage.propTypes = {
  // courses: PropTypes.array.isRequired,
  // actions: PropTypes.object.isRequired,
};
export default CoursesPage;
