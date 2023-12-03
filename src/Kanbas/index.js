import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Users/account";
import Dashboard from "./Dashboard";
import Modules from "./Courses/Modules";
import Assignments from "./Courses/Assignments";
import Grades from "./Courses/Grades";
import AssignmentEditor from "./Courses/Assignments/AssignmentEditor";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./Courses/Home";
import AssignmentAddEditor from "./Courses/Assignments/AssignmentAddEditor";
import Signin from "./Users/signin";
import Signup from "./Users/signup";
import UserTable from "./Users/table";

function Kanbas() {
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/signin" />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="Users" element={<UserTable />} />
            <Route path="Admin" element={<UserTable />} />
            <Route path="Courses/Home" element={<Home />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="Account" element={<Account />} />
            <Route path="Account/:id" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId" element={<Courses />} />
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
              path="Courses/AssignmentAdd/:courseId"
              element={<AssignmentAddEditor />}
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
