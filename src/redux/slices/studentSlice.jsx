import { createSlice } from "@reduxjs/toolkit";
import { getLocal, saveLocal } from "../../pages/util/localStore";

const initialState = {
  // arrNewStudent: [],
  arrNewStudent: getLocal("student"),
  student: {},
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    // là nơi viết ra các method,
    setDuLieu: (state, action) => {
      // console.log("action: ", action);
      console.log("action: ", action.payload);

      state.arrNewStudent.push(action.payload);
      saveLocal("student", state.arrNewStudent);
    },
    xoaDuLieu: (state, action) => {
      let filteredStudentArr = state.arrNewStudent.filter(
        (student) => student.maSV != action.payload
      );
      saveLocal("student", filteredStudentArr);
      state.arrNewStudent = filteredStudentArr;
      console.log("action.payload: ", action.payload);
      // console.log("filteredStudentArr: ", filteredStudentArr);
    },
    getInfoStudent: (state, action) => {
      let infoStudent = state.arrNewStudent.find(
        (student) => student.maSV == action.payload
      );
      state.student = infoStudent;
      // console.log("state.student: ", state.student);

      console.log("action.payload: ", action.payload);
    },
    capNhatStudent: (state, action) => {
      let index = state.arrNewStudent.findIndex(
        (item) => item.maSV != action.payload
      );
      if (index != -1) {
        state.arrNewStudent[index] = action.payload;
      }
      console.log("index: ", index);
      console.log("action: ", action);
      // console.log("state.arrNewStudent[index]: ", state.arrNewStudent[index]);
      saveLocal("student", state.arrNewStudent[index]);
    },
  },
});

export const { setDuLieu, xoaDuLieu, getInfoStudent, capNhatStudent } =
  studentSlice.actions;
// để sử dụng trong component

export default studentSlice.reducer;
