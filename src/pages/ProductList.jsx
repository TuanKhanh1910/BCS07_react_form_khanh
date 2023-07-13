import React, { useEffect, useState } from "react";
import FormProduct from "./FormProduct";
import { useSelector } from "react-redux";

const ProductList = () => {
  // const [student, setStudent] = useState([]);
  // console.log("setStudent: ", setStudent);
  // console.log("student: ", student);
  const { arrNewStudent } = useSelector((state) => state.student);
  console.log("arrNewStudent: ", arrNewStudent);
  // const getAllStudent = () => {
  //   setStudent(arrNewStudent);
  // };
  // useEffect(() => {
  //   getAllStudent();
  // }, []);

  return (
    <div>
      <div>
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white">Danh sách học viên</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
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
                {/* {student.map((item, index) => {
                  const { maSV, name, phone, email } = item;

                  return (
                    <tr key={index}>
                      <td>{maSV}</td>
                      <td>{name}</td>
                      <td>{phone}</td>
                      <td>{email}</td>
                      <td>
                        <button className="btn btn-danger me-2">Xóa</button>
                        <button className="btn btn-warning">Sửa</button>
                      </td>
                    </tr>
                  );
                })} */}
                {arrNewStudent.map((item, index) => {
                  const { maSV, name, phone, email } = item;
                  if (item != "") {
                    return (
                      <tr key={index}>
                        <td>{maSV}</td>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>
                          <button className="btn btn-danger me-2">Xóa</button>
                          <button className="btn btn-warning">Sửa</button>
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