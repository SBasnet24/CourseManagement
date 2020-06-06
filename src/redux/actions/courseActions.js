// simple action for creating a course
// corresponding to the context dispatch({type:,payload:})

export const createCourse = (course) => {
  return {
    type: "CREATE_COURSE",
    course,
  };
};
