import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Modules from "./Courses/Modules";
import Assignments from "./Courses/Assignments";
import Grades from "./Courses/Grades";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Courses/Home" element={<Courses />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route
            path="Courses/:courseId/assignment"
            element={<Assignments />}
          />
          <Route
            path="Courses/Assignments"
            element={<Assignments type="all" />}
          />
          <Route path="Modules/:courseId/*" element={<Modules />} />
          <Route path="Courses/Modules/:courseId/*" element={<Modules />} />
          <Route
            path="Courses/Modules/undefined"
            element={<Navigate to="/" />}
          />
          <Route
            path="Courses/Assignments/:assignmentId/:courseId"
            element={<AssignmentEditor />}
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
          {}
          <Route path="Courses/Grades/:courseId" element={<Grades />} />
          <Route
            path="Courses/Grades/undefined"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
