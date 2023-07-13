import { createSlice } from "@reduxjs/toolkit";
import { getLocal, saveLocal } from "../../pages/util/localStore";

const initialState = {
  // arrNewStudent: [],
  arrNewStudent: getLocal("student"),
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
      // let student = state.arrNewStudent.find(
      //   (student) => student.maSV == action.payload
      // );

      console.log("action.payload: ", action.payload);
    },
  },
});

export const { setDuLieu, xoaDuLieu, getInfoStudent } = studentSlice.actions;
// để sử dụng trong component

export default studentSlice.reducer;
