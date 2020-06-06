import { CREATE_COURSE } from "./../actions/actionTypes";
const courses = (state = [], action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
};

export default courses;
