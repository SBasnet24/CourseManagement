// simple action for creating a course
import { CREATE_COURSE } from "./actionTypes";
// corresponding to the context dispatch({type:,payload:})

export const createCourse = (course) => {
  return {
    type: CREATE_COURSE,
    course,
  };
};
