import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/courses");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-lg-11 col-12">
          <div className="row">
            <div className="col-lg-10 col-md-9 col-12 pt-20px">
              <div className="row">
                <div className="col-12 mb-20px">
                  <div>
                    <button
                      type="button"
                      className="btn btn-light btn-outline-dark float-end mr-5px"
                      // style="height:38px"
                    >
                      <i
                        className="fa fa-ellipsis-v float-end"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger float-end mr-5px"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i> Module
                    </button>

                    <div className="dropdown">
                      <button
                        className="btn btn-light btn-outline-dark dropdown-toggle float-end mr-5px"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Publish All
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="#">
                            Publish all items and modules
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Unpublish
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="btn btn-light btn-outline-dark float-end mr-5px"
                    >
                      View Progress
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light btn-outline-dark float-end mr-5px"
                  >
                    Collapse All
                  </button>
                </div>
              </div>
              <hr />
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-9 col-12">
                    <ul className="list-group assignments-list">
                      <li
                        className="list-group-item list-group-item-secondary d-flex justify-content-between"
                        // style="border: none;"
                      >
                        <h3 className="home-list-heading mt-10px">
                          <i className="fa-solid fa-ellipsis-vertical mr-2px"></i>
                          <i className="fa-solid fa-ellipsis-vertical mr-5px"></i>{" "}
                          Courses{" "}
                        </h3>
                        <div className="mt-10px">
                          <span className="badge rounded-pill text-bg-light mr-10px">
                            40% of Total
                          </span>
                          <i
                            className="fa fa-plus mr-10px"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </li>
                      {courses.toReversed().map((course) => {
                        return (
                          <>
                            <li className="pl-10px p-2">
                              <i className="fa-solid fa-ellipsis-vertical mr-2px"></i>
                              <i className="fa-solid fa-ellipsis-vertical ml--5px mr-5px"></i>
                              <Link
                                to={`/Kanbas/Modules/${course._id}`}
                                className="assignments-list-heading"
                              >
                                {course.name}
                              </Link>
                              <i
                                className="fa fa-ellipsis-v float-end mt-4px"
                                aria-hidden="true"
                              ></i>
                              <i className="fa-solid fa-circle-check mr-20px float-end mt-4px"></i>
                            </li>
                            <hr className="m-0" />
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="col-lg-3 d-lg-block d-none mb-50px">
                    <h5>Course Status</h5>
                    <div
                      className="btn-group d-flex"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button
                        type="button"
                        className="btn btn-light"
                        // style="border-radius:0;"
                      >
                        <i className="fa fa-ban mr-5px" aria-hidden="true"></i>
                        Unpublish
                      </button>
                      <button
                        type="button"
                        className="btn btn-success disabled"
                      >
                        <i className="fa-solid fa-circle-check mr-5px"></i>
                        Published
                      </button>
                    </div>
                    <div className="p-3 mb-2 bg-light text-dark mt-3 home-import-wrapper">
                      <i
                        className="fa fa-download mr-5px x"
                        aria-hidden="true"
                      ></i>
                      Importing Existing Content
                    </div>
                    <div className="p-3 mb-2 bg-light text-dark">
                      <i
                        className="fa fa-arrow-circle-o-right mr-5px"
                        aria-hidden="true"
                      ></i>
                      Import from Commons
                    </div>
                    <div className="p-3 mb-2 bg-light text-dark">
                      <i
                        className="fa fa-bullseye mr-5px"
                        aria-hidden="true"
                      ></i>
                      Choose Home Page
                    </div>
                    <div className="p-3 mb-2 bg-light text-dark">
                      <i
                        className="fa fa-bullhorn mr-5px"
                        aria-hidden="true"
                      ></i>
                      View Course Stream
                    </div>
                    <div className="p-3 mb-2 bg-light text-dark">
                      <i
                        className="fa fa-bar-chart mr-5px"
                        aria-hidden="true"
                      ></i>
                      New Analysis
                    </div>
                    <div className="p-3 mb-2 bg-light text-dark">
                      <i className="fa fa-bell-o mr-5px" aria-hidden="true"></i>
                      View Course Notificiations
                    </div>
                    <h5>To Do</h5>
                    <hr />
                    <div className="d-flex">
                      <div>
                        <i
                          className="fa fa-info home-grade-info-icon mr-5px"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div>
                        <p className="mb-0">Grade A1 - ENV + HTML</p>
                        <small>
                          100 points <b>.</b> Sep 18 at 11:59pm
                        </small>
                      </div>
                    </div>
                    <div className="mt-4 mb-20px">
                      <b>Coming Up</b>
                      <small className="float-end text-danger">
                        View Calendar
                      </small>
                      <i
                        className="fa fa-calendar home-fa-calendar-icon float-end  mr-6px"
                        aria-hidden="true"
                      ></i>
                      <hr className="mt-10px" />
                    </div>

                    <div className="d-flex mb-20px">
                      <div>
                        <i
                          className="fa fa-calendar mr-6px home-fa-calendar-icon"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div>
                        <p className="mb-0 text-danger">Lecture</p>
                        <small className="text-secondary">
                          CS4550.12631.202410
                        </small>
                        <small className="text-secondary d-block">
                          Sep 11 at 11:45am
                        </small>
                      </div>
                    </div>

                    <div className="d-flex mb-20px">
                      <div>
                        <i
                          className="fa fa-calendar mr-6px home-fa-calendar-icon"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div>
                        <p className="mb-0 text-danger">
                          CSS610 06 SP23 Lecture
                        </p>
                        <small className="text-secondary">
                          CS4550.12631.202410
                        </small>
                        <small className="text-secondary d-block">
                          Sep 11 at 6:00am
                        </small>
                      </div>
                    </div>

                    <div className="d-flex mb-20px">
                      <div>
                        <i
                          className="fa fa-calendar mr-6px home-fa-calendar-icon"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div>
                        <p className="mb-0 text-danger">
                          CSS610 Web Development Summer 1 2023 - LECTURE
                        </p>
                        <small className="text-secondary">
                          CS4550.12631.202410
                        </small>
                        <small className="text-secondary d-block">
                          Sep 11 at 7:00am
                        </small>
                      </div>
                    </div>
                    <small className="text-danger">
                      12 more in the next week
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-kanbass-navigation d-sm-none d-block">
          <nav className="position-relative">
            <i className="fa fa-times position-absolute fixed-right"></i>
            <ul className="wd-course-navigation">
              <li>
                <Link to="/Courses/Home/home">Home</Link>
              </li>
              <li>
                <Link to="/Courses/Modules">Modules</Link>
              </li>
              <li>
                <Link to="#">Piazza</Link>
              </li>
              <li>
                <Link to="#">Zoom Meetings</Link>
              </li>
              <li>
                <Link to="/Courses/Assignments">Assignments</Link>
              </li>
              <li>
                <Link to="#">Quizzes</Link>
              </li>
              <li>
                <Link to="/Courses/Grades/Grades">Grades</Link>
              </li>
              <li>
                <Link to="#">People</Link>
              </li>
              <li>
                <Link to="#">Panopto Video</Link>
              </li>
              <li>
                <Link to="#">Discussion</Link>{" "}
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="#">Announcements</Link>{" "}
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="#">Pages</Link>{" "}
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="#">Files</Link>{" "}
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="#">Rubrics</Link>
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="#">Outcomes</Link>
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="#">Collaborations</Link>
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="#">Syllabus</Link>
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </li>
              <li>
                <Link to="/Courses/Settings/">Settings</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mobile-course-navigation d-sm-none d-block">
          <nav className="position-relative">
            <ul>
              <li>
                <Link to="/AccountNavigation">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  Account
                </Link>
              </li>
              <li>
                <Link to="/Dashboard">
                  <i className="fa fa-tachometer" aria-hidden="true"></i>
                  Dashboard
                </Link>
              </li>
              <li className="wd-active">
                <Link to="/Kanbas/Courses/Home/home.html">
                  <i className="fa fa-book" aria-hidden="true"></i>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/Calendar">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/Inbox">
                  <i className="fa fa-inbox" aria-hidden="true"></i>
                  Inbox
                </Link>
              </li>
              <li>
                <Link to="/History">
                  <i className="fa fa-history" aria-hidden="true"></i>
                  History
                </Link>
              </li>
              <li>
                <Link to="/Studio">
                  <i className="fa fa-desktop" aria-hidden="true"></i>
                  Studio
                </Link>
              </li>
              <li>
                <Link to="/Commons">
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>
                  Commons
                </Link>
              </li>
              <li>
                <Link to="/Help">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>{" "}
                  Help
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Home;
