import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { getLocal, saveLocal } from "./util/localStore";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatStudent,
  getInfoStudent,
  setDuLieu,
} from "../redux/slices/studentSlice";

const FormProduct = () => {
  const dispatch = useDispatch();
  const [newStudent, setNewStudent] = useState();

  const { student, arrNewStudent } = useSelector((state) => state.student);
  console.log("arrNewStudent: ", arrNewStudent);
  console.log("student: ", student);

  // console.log("arrNewStudent: ", arrNewStudent);
  const formik = useFormik({
    initialValues: {
      maSV: "",
      name: "",
      phone: "",
      email: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      dispatch(setDuLieu(values));
      formik.resetForm();
      // saveLocal("student", arrNewStudent);
      // getLocal("student");
      // dispatch(getInfoStudent(student));
      // console.log("getInfoStudent: ", getInfoStudent);
    },
    validationSchema: yup.object({
      maSV: yup.string().required("Vui nhập đầy đủ"),
      name: yup
        .string()
        .required("Vui nhập đầy đủ")
        .matches(/^[\p{L} ]+$/u, "vui lòng chỉ nhập chữ"),
      phone: yup
        .string()
        .matches(/^[0-9]*$/, "vui lòng chỉ nhập số")
        .max(10, "vui lòng nhập đúng số điện thoại")
        .min(10, "vui lòng nhập đúng số điện thoại")
        .required("Vui nhập đầy đủ"),
      email: yup
        .string()
        .email("vui lòng nhập đúng email")
        .required("Vui nhập đầy đủ"),
    }),
  });
  const { handleSubmit, handleChange, handleBlur, handleReset, setFieldValue } =
    formik;
  useEffect(() => {
    if (student) {
      formik.setValues(student);
    }
  }, [student]);
  const { maSV, name, phone, email } = formik.errors;
  // console.log(formik.values);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        id="formInput"
        className="card text-white bg-success bg-opacity-50"
      >
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <label htmlFor="">Mã học viên</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={formik.values.maSV || ""}
                className="form-control"
                type="text"
                name="maSV"
              />
              {maSV && formik.touched.maSV ? (
                <p className="text-red-500">{maSV}</p>
              ) : (
                ""
              )}
            </div>
            <div className="col-6">
              <label htmlFor="">Name</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={formik.values.name || ""}
                className="form-control"
                type="text"
                name="name"
              />
              {name && formik.touched.name ? (
                <p className="text-red-500">{name}</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="">Số điện thoại</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={formik.values.phone || ""}
                className="form-control"
                type="text"
                name="phone"
              />
              {phone && formik.touched.phone ? (
                <p className="text-red-500">{phone}</p>
              ) : (
                ""
              )}
            </div>
            <div className="col-6">
              <label htmlFor="">Email</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={formik.values.email || ""}
                className="form-control"
                type="text"
                name="email"
              />
              {email && formik.touched.email ? (
                <p className="text-red-500">{email}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary me-3" type="submit">
            Thêm sinh viên
          </button>
          <button
            onClick={() => {
              dispatch(capNhatStudent(formik.values));
              formik.resetForm();
            }}
            className="btn btn-warning"
            type="button"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProduct;
