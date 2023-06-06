import React from "react";
import NavBar from "./nav";
import SideBar from "./sideBar";
import "./manageStudent.css";


function ManageCourse() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <br />
            <div className="container">
              <h1>Select User</h1>
              <br />
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="card card-custom"
                    onClick={() => {
                      window.open("https://taalib.onrender.com/");
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Student</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card card-custom"
                    onClick={() => {
                      window.open("https://google.com");
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Teacher</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-custom" onClick={() => {}}>
                    <div className="card-body">
                      <h5 className="card-title">Super Admin</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-custom">
                    <div className="card-body">
                      <h5 className="card-title">Academic Officer</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-custom">
                    <div className="card-body">
                      <h5 className="card-title">Account Officer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCourse;
