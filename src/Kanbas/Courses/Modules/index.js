import { Link, useParams } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import { useState, useEffect } from "react";

function Modules() {
  const { courseId } = useParams();
  const [modules, setModules] = useState([]);
  const [course, setCourse] = useState([]);
  const [moduleData, setModuleData] = useState({
    name: "New Module 123",
    description: "New Description",
  });

  const fetchCourse = async () => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/courses/${courseId}`
      );
      const data = await response.json();
      setCourse(data);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const fetchModules = async () => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/courses/${courseId}/modules`
      );
      const data = await response.json();
      setModules(data);
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  const handleAddModule = async () => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/courses/${courseId}/modules`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: moduleData.name,
            description: moduleData.description,
          }),
        }
      );
      const newModule = await response.json();
      setModules([...modules, newModule]);
      // Clear the form after adding
      setModuleData({
        name: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding module:", error);
    }
  };

  const handleEditModule = async (moduleId) => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/modules/${moduleId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(moduleData),
        }
      );
      if (response.ok) {
        // Update the local state after editing
        setModules(
          modules.map((module) =>
            module._id === moduleId ? { ...module, ...moduleData } : module
          )
        );
        // Clear the form after editing
        setModuleData({
          name: "",
          description: "",
        });
      } else {
        console.error("Error editing module:", response.statusText);
      }
    } catch (error) {
      console.error("Error editing module:", error);
    }
  };

  const handleDeleteModule = async (moduleId) => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/modules/${moduleId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Update the local state after deleting
        setModules(modules.filter((module) => module._id !== moduleId));
      } else {
        console.error("Error deleting module:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  useEffect(() => {
    fetchModules();
    fetchCourse();
  }, [courseId]);

  return (
    <div className="container">
      <div class="col-12 breadcrumb-col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb custom-breadcrumb">
            <li class="breadcrumb-item">
              <i class="fa fa-bars" aria-hidden="true"></i>
              {course.name}
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Modules
            </li>
          </ol>
          <hr />
        </nav>
      </div>
      <div className="row">
        {}

        <CourseNavigation />
        <div className="col-sm-10 col-lg-10 col-12" style={{ width: "75%" }}>
          <div className="row">
            {}
            <div className="col-lg-10 col-md-9 col-12 pt-20px">
              <div className="row">
                <div className="col-12 mb-20px">
                  <div>
                    <button
                      type="button"
                      className="btn btn-light btn-outline-dark float-end mr-5px"
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
                      <li className="list-group-item list-group-item-secondary d-flex justify-content-between">
                        <h3 className="home-list-heading mt-10px">
                          <i className="fa-solid fa-ellipsis-vertical mr-2px"></i>
                          <i className="fa-solid fa-ellipsis-vertical mr-5px"></i>{" "}
                          {course.name} Modules{" "}
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

                      {/* Create Module  */}
                      <div className="CRUDContainer border p-2">
                        <form>
                          <div className="form-group border d-flex p-2 ">
                            <div>
                              <input
                                className="m-2"
                                value={moduleData.name}
                                onChange={(e) =>
                                  setModuleData({
                                    ...moduleData,
                                    name: e.target.value,
                                  })
                                }
                              />
                              <br />
                              <textarea
                                className="m-2"
                                value={moduleData.description}
                                onChange={(e) =>
                                  setModuleData({
                                    ...moduleData,
                                    description: e.target.value,
                                  })
                                }
                              />
                            </div>

                            <div className="buttons align-items-start">
                              <button
                                type="button"
                                className="btn btn-success"
                                onClick={handleAddModule}
                              >
                                Add
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => handleEditModule(moduleData._id)}
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </form>
                        <div>
                          {modules.map((module) => (
                            <>
                              <li
                                className=" pl-10px py-2"
                                style={{ listStyleType: "none" }}
                                key={module._id}
                              >
                                <i className="fa-solid fa-ellipsis-vertical mr-2px"></i>
                                <i className="fa-solid fa-ellipsis-vertical ml--5px mr-5px"></i>
                                {console.log(module)}
                                <Link
                                  to={`/Kanbas/Courses/${courseId}/assignment`}
                                  className="assignments-list-heading"
                                >
                                  {module.name}
                                </Link>
                                <p>{module.description}</p>
                                <p>{module._id}</p>
                                <div className="buttons">
                                  <button
                                    className="btn btn-success"
                                    onClick={() => setModuleData(module)}
                                  >
                                    Edit
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() =>
                                      handleDeleteModule(module._id)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                              </li>
                              <hr className="m-0" />
                            </>
                          ))}
                        </div>
                      </div>
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
                        // style="border-radius:0;"
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
    </div>
  );
}
export default Modules;
