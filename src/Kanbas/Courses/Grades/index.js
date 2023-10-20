import Database from "../../Database";
import db from "../../Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
function Grades() {
  const { courseId } = useParams();
  const users = db.Users;
  const assignments = db.Assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.Enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  const grades = db.Grades;
  return (
    <>
      <div class="col-12 breadcrumb-col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb">
            <li class="breadcrumb-item">
              <i class="fa fa-bars" aria-hidden="true"></i>
              {db.Courses.find((item) => item._id == courseId).name}
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Grades
            </li>
          </ol>
          <hr />
        </nav>
      </div>
      <div style={{ display: "flex" }}>
        <div className="container">
          <CourseNavigation />
        </div>
        <td valign="top">
          <div className="container" style={{ marginTop: "20px" }}>
            <div class="row">
              <div class="col-12">
                <div>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-light btn-outline-dark float-end"
                  >
                    <i class="fa fa-cog" aria-hidden="true"></i>
                  </button>
                </div>

                <div class="dropdown">
                  <button
                    class="btn btn-light btn-outline-dark dropdown-toggle float-end"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ marginRight: "10px" }}
                  >
                    <i class="fa fa-sign-in fa-rotate-180" aria-hidden="true">
                      {" "}
                    </i>{" "}
                    Export
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  class="btn btn-light btn-outline-dark float-end"
                  style={{ marginRight: "10px" }}
                >
                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                  Import
                </button>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="student-names">
                    <strong>Student Names</strong>
                  </label>
                  <select class="form-select">
                    <option selected="">Search Students</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="assignment-names">
                    <strong>Assignment Names</strong>
                  </label>
                  <select class="form-select">
                    <option selected="">Search Assignments</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ marginTop: "20px" }}>
            <table class="table table-bordered r_table" border="1" width="100%">
              <thead>
                <tr>
                  <th>Student Name</th>
                  {assignments.map((item) => {
                    return <th>{item.title}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {Database.Users.filter((item) => item.role !== "FACULTY").map(
                  (item) => {
                    return (
                      <tr>
                        <td>{item.firstName + " " + item.lastName}</td>
                        <td>
                          {Database.Grades.filter(
                            (gradesData) =>
                              gradesData.student == item._id &&
                              gradesData.assignment == assignments[0]._id
                          ).length > 0
                            ? Database.Grades.filter(
                                (gradesData) =>
                                  gradesData.student == item._id &&
                                  gradesData.assignment == assignments[0]._id
                              )[0].grade
                            : "-"}
                        </td>

                        <td>
                          {Database.Grades.filter(
                            (gradesData) =>
                              gradesData.student == item._id &&
                              gradesData.assignment == assignments[1]._id
                          ).length > 0
                            ? Database.Grades.filter(
                                (gradesData) =>
                                  gradesData.student == item._id &&
                                  gradesData.assignment == assignments[1]._id
                              )[0].grade
                            : "-"}
                        </td>

                        <td>
                          {Database.Grades.filter(
                            (gradesData) =>
                              gradesData.student == item._id &&
                              gradesData.assignment == assignments[2]._id
                          ).length > 0
                            ? Database.Grades.filter(
                                (gradesData) =>
                                  gradesData.student == item._id &&
                                  gradesData.assignment == assignments[2]._id
                              )[0].grade
                            : "-"}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </td>
      </div>
    </>
  );
}
export default Grades;
