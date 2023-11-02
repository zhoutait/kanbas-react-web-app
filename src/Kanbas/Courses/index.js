import React from "react";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses(props) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");

  return (
    <>
      <div class="col-12 breadcrumb-col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb">
            <li class="breadcrumb-item">
              <i class="fa fa-bars" aria-hidden="true"></i>Home
            </li>
            <li
              class="breadcrumb-item active"
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
              <Route
                path="/"
                element={
                  <Home courses={props.courses} setCourses={props.setCourses} />
                }
              />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
