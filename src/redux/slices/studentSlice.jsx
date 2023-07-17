import { createSlice } from "@reduxjs/toolkit";
import removeVietnameseTones from "../../util/helper";
import { getLocal, saveLocal } from "../../util/localStore";

const initialState = {
  // arrNewStudent: [],
  arrNewStudent: getLocal("student"),
  // tạo ra 1 object rỗng để chứa cái thk cần chỉnh sửa
  student: {},
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    // là nơi viết ra các method,
    setDuLieu: (state, action) => {
      // console.log("action: ", action);
      // console.log("action: ", action.payload);

      state.arrNewStudent.push(action.payload);
      saveLocal("student", state.arrNewStudent);
    },
    xoaDuLieu: (state, action) => {
      let filteredStudentArr = state.arrNewStudent.filter(
        (student) => student.maSV != action.payload
      );
      saveLocal("student", filteredStudentArr);
      state.arrNewStudent = filteredStudentArr;
      // console.log("action.payload: ", action.payload);
      // console.log("filteredStudentArr: ", filteredStudentArr);
    },
    getInfoStudent: (state, action) => {
      // dùng find để tìm ra cái thk đang muốn sửa là thk nào
      let infoStudent = state.arrNewStudent.find(
        (student) => student.maSV == action.payload
      );
      // sau khi tìm được thk cần sửa thì cho nó thêm vào cái object đang rỗng là student
      state.student = infoStudent;
      // console.log("state.student: ", state.student);

      console.log("action.payload: ", action.payload);
    },
    capNhatStudent: (state, action) => {
      // tạo ra hàm để tìm vị trí của cái thk đang cần chỉnh sửa nó sẽ trả ra index của thk đó
      let index = state.arrNewStudent.findIndex(
        (item) => item.maSV == action.payload.maSV
      );
      if (index != -1) {
        // sau khi tìm ra được rồi phải xét đk nếu nó khác -1 thì thế thk action.payload là nguyên 1 cái object đã được chỉnh sửa thế vào cái thk đang nằm trong cái mảng
        state.arrNewStudent[index] = action.payload;
      }
      // console.log("action.payload: ", action.payload);
      console.log("index: ", index);
      console.log("action: ", action);
      // console.log("state.arrNewStudent[index]: ", state.arrNewStudent[index]);
      saveLocal("student", state.arrNewStudent);
    },
    // searchStudent: (state, action) => {
    //   // nơi làm cái search
    //   let newKeyWord = removeVietnameseTones(action.payload);
    //   let arrSearch = state.arrNewStudent.filter((item) => {
    //     let newStudent = removeVietnameseTones(item.name);
    //     if (newStudent == action.payload) {
    //       return newStudent
    //         .toLowerCase()
    //         .trim()
    //         .includes(newKeyWord.toLowerCase().trim());
    //     }
    //     console.log("newStudent: ", newStudent);
    //   });
    //   console.log("newKeyWord: ", newKeyWord);
    //   // console.log("arrSearch: ", arrSearch);
    //   state.arrNewStudent = arrSearch;

    //   // console.log("arrSearch: ", arrSearch);
    //   // console.log("action: ", action);
    //   // // state.arrNewStudent = arrSearch;
    // },
    searchStudent: (state, action) => {
      console.log("action: ", action);
      // nơi làm cái search
      let searchStudent = removeVietnameseTones(action.payload);
      const cloneStudent = [...state.arrNewStudent];
      if (searchStudent == "") {
        state.arrNewStudent = getLocal("student");
      } else {
        let arrSearch = cloneStudent.filter((item) =>
          item.name.toLowerCase().trim().includes(searchStudent)
        );
        state.arrNewStudent = arrSearch;
      }
    },
  },
});

export const {
  setDuLieu,
  xoaDuLieu,
  getInfoStudent,
  capNhatStudent,
  searchStudent,
} = studentSlice.actions;
// để sử dụng trong component

export default studentSlice.reducer;
