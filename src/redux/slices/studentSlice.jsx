import { createSlice } from "@reduxjs/toolkit";
import { getLocal, saveLocal } from "../../pages/util/localStore";

const initialState = {
  // arrNewStudent: [],
  arrNewStudent: [getLocal("student")],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    // là nơi viết ra các method,
    setDuLieu: (state, action) => {
      // console.log("action: ", action);
      console.log("action: ", action.payload);
      // check xem hoTen có dữ liêu hay không, nếu ko có set dữ liệu cho nó

      state.arrNewStudent.push(action.payload);
      saveLocal("student", state.arrNewStudent);
      // console.log("state.arrNewStudent: ", state.arrNewStudent);
      // console.log(state.arrNewStudent);
      //chỗ nãy xử lí sai rồi
      // sao dị
      // chỗ này phair push cái action.payload vào arr chứ
      // à à là mình state.arr.push(ac.pay) đúng ko, yess, hèn gì, để tui test thử
    },
  },
});

export const { setDuLieu } = studentSlice.actions;
// để sử dụng trong component

export default studentSlice.reducer;
