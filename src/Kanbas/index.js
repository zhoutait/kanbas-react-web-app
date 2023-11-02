import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Modules from "./Courses/Modules";
import Assignments from "./Courses/Assignments";
import Grades from "./Courses/Grades";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
  const [courses, setCourses] = useState(db.Courses);
  const [modules, setModules] = useState(db.Modules);

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Dashboard courses={courses} setCourses={setCourses} />}
            />
            <Route
              path="Courses/Home"
              element={<Courses courses={courses} setCourses={setCourses} />}
            />
            <Route
              path="/Courses"
              element={<Courses courses={courses} setCourses={setCourses} />}
            />
            <Route path="Account" element={<Account />} />
            <Route
              path="Dashboard"
              element={<Dashboard courses={courses} setCourses={setCourses} />}
            />

            <Route
              path="Courses/:courseId/assignment"
              element={<Assignments />}
            />
            <Route
              path="Courses/Assignments"
              element={<Assignments type="all" />}
            />
            <Route
              path="Modules/:courseId/*"
              element={<Modules modules={modules} setModules={setModules} />}
            />
            <Route path="Courses/Modules/:courseId/*" element={<Courses />} />
            <Route
              path="Courses/Modules/undefined"
              element={<Navigate to="/" />}
            />
            <Route
              path="Courses/Assignments/:assignmentId/:courseId"
              element={<AssignmentEditor type={true} />}
            />
            <Route
              path="Courses/AssignmentAdd/:moduleId"
              element={<AssignmentEditor type={false} />}
            />
            <Route
              path="Courses/Assignments/:courseId"
              element={<Assignments />}
            />
            <Route
              path="Courses/Assignments/undefined"
              element={<Navigate to="/" />}
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            {/* <Route path="Courses/Grades" element={<Grades/>} /> */}
            <Route path="Courses/Grades/:courseId" element={<Grades />} />
            <Route
              path="Courses/Grades/undefined"
              element={<Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
