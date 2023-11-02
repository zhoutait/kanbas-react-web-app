import db from "../Database";
import { useState } from "react";
import { Link } from "react-router-dom";
function Dashboard(props) {
  const Fetchcourses = props.courses;
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    props.setCourses([
      ...Fetchcourses,
      { ...course, _id: new Date().getTime() },
    ]);
  };
  const deleteCourse = (courseId) => {
    props.setCourses(Fetchcourses.filter((course) => course._id !== courseId));
  };

  const editCourse = (courseId) => {
    setCourse(Fetchcourses.filter((course) => course._id == courseId)[0]);
  };

  const updateCourse = (courseId) => {
    props.setCourses(
      Fetchcourses.map((c) => {
        if (c._id === courseId) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  console.log(Fetchcourses);

  // const courses = db.Courses;
  // console.log(courses);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-11 col-10">
          <h1 className="mt-10px">Dashboard</h1>
          <hr />
          <div className="ml-20px">
            <h2>Published Courses ({Fetchcourses.length})</h2>
            <hr />

            <div className="CRUDContainer border">
              <form>
                <div className="form-group border d-flex p-2 ">
                  <input
                    value={course.name}
                    className="form-control"
                    onChange={(e) =>
                      setCourse({ ...course, name: e.target.value })
                    }
                  />
                  <input
                    value={course.number}
                    className="form-control"
                    onChange={(e) =>
                      setCourse({ ...course, number: e.target.value })
                    }
                  />
                  <input
                    value={course.startDate}
                    className="form-control"
                    type="date"
                    onChange={(e) =>
                      setCourse({ ...course, startDate: e.target.value })
                    }
                  />
                  <input
                    value={course.endDate}
                    className="form-control"
                    type="date"
                    onChange={(e) =>
                      setCourse({ ...course, endDate: e.target.value })
                    }
                  />

                  <div className="buttons">
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={() => {
                        addNewCourse();
                      }}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => {
                        updateCourse(course._id);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
              <div>
                {Fetchcourses.toReversed().map((course, index) => {
                  return (
                    <>
                      <div className="crud-action border p-2">
                        <div className="d-flex align-items-center">
                          <span>{course.name}</span>
                          <div className="buttons ">
                            <button
                              type="button"
                              class="btn btn-warning"
                              onClick={() => {
                                editCourse(course._id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => {
                                deleteCourse(course._id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="row" style={{ width: "80vw" }}>
              {Fetchcourses.toReversed().map((course, index) => (
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="card m-2 dashboad-card">
                    <div className="card-image card-dark-blue">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div className="card-body">
                      <h5 class="card-title">{course.name}</h5>

                      <Link
                        key={course._id}
                        to="/Kanbas/Courses"
                        className="btn btn-primary"
                      >
                        {course.name}
                      </Link>
                      <p class="card-text">
                        {course._id +
                          " " +
                          course.startDate +
                          " to " +
                          course.endDate}
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
