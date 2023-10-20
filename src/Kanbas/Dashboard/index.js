import { FaEllipsisH } from "react-icons/fa";
import db from "../Database";
import { Link, useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const courses = db.Courses;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-11 col-10">
          <h1 className="mt-10px">Dashboard</h1>
          <hr />
          <div className="ml-20px">
            <h2>Published Courses ({courses.length})</h2>
            <hr />
            <div className="row">
              {courses.map((course, index) => (
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="card m-2  dashboad-card course-card">
                    <div className="card-image card-dark-blue">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div className="card-body course-card-body">
                      <p
                        class="card-title fw-bold pointer course-heading"
                        onClick={() =>
                          navigate(`/Kanbas/Modules/${course._id}`)
                        }
                      >
                        {course.name}
                      </p>
                      <p class="card-text m-0">
                        {course.name}
                        <span>{course?.number}</span>
                      </p>
                      <p class="card-text m-0">
                        {course.startDate}
                        {course.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
