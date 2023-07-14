import React, { useEffect, useState } from "react";
import FormProduct from "./FormProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  getInfoStudent,
  searchStudent,
  xoaDuLieu,
} from "../redux/slices/studentSlice";
import { Input } from "antd";

const ProductList = () => {
  // const [student, setStudent] = useState([]);
  // console.log("setStudent: ", setStudent);
  // console.log("student: ", student);
  const dispatch = useDispatch();
  const { arrNewStudent } = useSelector((state) => state.student);
  // console.log("arrNewStudent: ", arrNewStudent);
  // const getAllStudent = () => {
  //   setStudent(arrNewStudent);
  // };
  // useEffect(() => {
  //   getAllStudent();
  // }, []);
  const deleteStudent = (maSV) => {
    dispatch(xoaDuLieu(maSV));
  };
  const layThongTinStudent = (maSV) => {
    dispatch(getInfoStudent(maSV));
  };
  const handleSeach = (name) => {
    dispatch(searchStudent(name));
  };
  // console.log("CpmP render");
  return (
    <div>
      <div>
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white">Danh sách học viên</a>
            <form className="d-flex" role="search">
              <Input.Search
                onSearch={handleSeach}
                placeholder="Search by username"
                enterButton
              />
            </form>
          </div>
        </nav>

        <div className="container">
          <FormProduct />
          <div>
            <table className="table" cellPadding={20}>
              <thead className="bg-dark text-white">
                <tr>
                  <th>Mã học viên</th>
                  <th>Name</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {arrNewStudent?.map((item, index) => {
                  const { maSV, name, phone, email } = item;
                  if (item[0] != []) {
                    return (
                      <tr key={index}>
                        <td>{maSV}</td>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>
                          <button
                            onClick={() => {
                              deleteStudent(maSV);
                            }}
                            className="btn btn-danger me-2"
                          >
                            Xóa
                          </button>
                          <button
                            onClick={() => {
                              layThongTinStudent(maSV);
                            }}
                            className="btn btn-warning"
                          >
                            Sửa
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
