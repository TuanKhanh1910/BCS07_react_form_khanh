import { createSlice } from "@reduxjs/toolkit";
import { getLocal } from "../../pages/util/localStore";

const initialState = {
  arrNewStudent: [getLocal("student")],
};

export const studentSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // là nơi viết ra các method,
    setDuLieu: (state, action) => {
      console.log("action: ", action);
      console.log("action: ", action);
      // check xem hoTen có dữ liêu hay không, nếu ko có set dữ liệu cho nó
      if (state.arrNewStudent == "") {
        state.arrNewStudent = action.payload;
      }
    },
  },
});

export const { setDuLieu } = studentSlice.actions;
// để sử dụng trong component

export default studentSlice.reducer;
