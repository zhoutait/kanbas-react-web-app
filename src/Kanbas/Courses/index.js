import React, { useEffect, useState } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Dashboard from "../Dashboard";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/AssignmentEditor";
// import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  const fetchCourse = async () => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/courses/${courseId}`
      );
      const data = await response.json();
      setCourse(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <>
      <div className="col-12 breadcrumb-col">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb custom-breadcrumb">
            <li className="breadcrumb-item">
              <i className="fa fa-bars" aria-hidden="true"></i>Home
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ paddingRight: "200px" }}
            >
              {" "}
            </li>
          </ol>
          <hr />
        </nav>
      </div>
      <div className="container">
        <CourseNavigation courseId={courseId} />
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
              left: "320px",
              top: "50px",
            }}
          >
            <Routes>
              <Route path="/Courses/Dashboard" element={<Dashboard />} />
              {/* <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
