import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";

function AssignmentAddEditor() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  // const [isLoading, setisLoading] = useState(false);
  const [assignment, setAssignment] = useState({
    point: "",
    due: "",
    until: "",
    availableFrom: "",
    description: "",
    title: "",
  });
  const navigate = useNavigate();

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

  useEffect(() => {
    async function handleFetchCourse() {
      await fetchCourse();
    }
    handleFetchCourse();
  }, [courseId]);

  const handleInputChange = (field, value) => {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [field]: value,
    }));
  };

  const addAssignment = async () => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/assignments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...assignment,
            course: courseId,
          }),
        }
      );

      if (response.ok) {
        // Successful update, you can navigate or perform other actions
        navigate(`/Kanbas/Courses/Assignments/${courseId}`);
      } else {
        console.error("Failed to add assignment");
      }
    } catch (error) {
      console.error("Error adding assignment:", error);
    }
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="col-sm-10 col-md-11 col-9">
            <div className="row">
              <div className="col-12">
                <nav
                  // style="--bs-breadcrumb-divider: '>';"
                  aria-label="breadcrumb"
                  className="pt-15"
                >
                  <ol className="breadcrumb custom-breadcrumb">
                    <li className="breadcrumb-item text-danger">
                      <i
                        className="fa fa-bars text-danger"
                        aria-hidden="true"
                      ></i>
                      {course?._id}
                    </li>
                    {/* <li
                      className="breadcrumb-item active text-danger"
                      aria-current="page"
                    >
                      {assignment?.title}
                    </li> */}
                    <li className="breadcrumb-item active" aria-current="page">
                      ...
                    </li>
                  </ol>
                  <hr className="mt-10px" />
                </nav>
              </div>
              <CourseNavigation />
              <div className="col-md-10 col-12 course-assignment-content-col">
                <div className="row">
                  <div className="mt-20px">
                    <button
                      type="button"
                      className="btn btn-light btn-outline-dark float-end mr-5px"
                      style={{
                        height: "38px",
                        border: "none",
                        backgroundColor: "#dddddd",
                      }}
                    >
                      <i
                        className="fa fa-ellipsis-v float-end"
                        aria-hidden="true"
                        style={{ color: "#4e5154" }}
                      ></i>
                    </button>
                    <p className="text-success float-end mr-5px font-weight-bold mt-5px mr-15px">
                      <i className="fa-solid fa-circle-check"></i> Published
                    </p>
                  </div>
                  {/* </div> */}
                  <div>
                    <br />
                    <hr className="mt-0" />
                    <h3 className="mt-15px">Assignment Name</h3>
                    <form action="/Courses/Assignments" className="mr-10px">
                      <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control"
                        placeholder=""
                        value={assignment?.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                      />
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder=""
                          id="floatingTextarea2"
                          style={{ height: "100px" }}
                          value={assignment?.description}
                          onChange={(e) =>
                            handleInputChange("description", e.target.value)
                          }
                        ></textarea>
                        <label for="floatingTextarea2"></label>
                      </div>

                      <div className="assign-edit-form-content-points-to-sumb-type mx-auto mt-30px">
                        <div className="mb-3 row">
                          <div className="col-lg-3 col-sm-4 assign-edit-list-item-label-col">
                            <label
                              for="inputPassword"
                              className="col-form-label text-right"
                            >
                              Point
                            </label>
                          </div>
                          <div className="col-lg-9 col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="inputPassword"
                              value={assignment.point}
                              onChange={(e) =>
                                handleInputChange("point", e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="mb-3 row mt-30px">
                          <div className="col-lg-3 col-sm-4 assign-edit-list-item-label-col">
                            <label
                              for="inputPassword"
                              className="col-form-label text-right"
                            >
                              Assign
                            </label>
                          </div>
                          <div className="col-lg-9 col-sm-8 ">
                            <div className="assign-edit-submission-type-content-wrapper p-15">
                              <p className="mb-0">
                                <b>Due</b>
                              </p>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Sep 18, 2023, 11:59 PM"
                                  value={assignment?.due}
                                  onChange={(e) =>
                                    handleInputChange("due", e.target.value)
                                  }
                                />
                                <span className="input-group-text">
                                  <i
                                    className="fa fa-calendar home-fa-calendar-icon float-end  mr-6px"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <p className="mt-10px mb-0">
                                    <b>Available from</b>
                                  </p>
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Sep 6, 2023, 11:59 PM"
                                      value={assignment?.availableFrom}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "availableFrom",
                                          e.target.value
                                        )
                                      }
                                    />
                                    <span className="input-group-text">
                                      <i
                                        className="fa fa-calendar home-fa-calendar-icon float-end  mr-6px"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <p className="mt-10px mb-0">
                                    <b>Until</b>
                                  </p>
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={assignment?.until}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "availableFrom",
                                          e.target.until
                                        )
                                      }
                                    />
                                    <span className="input-group-text">
                                      <i
                                        className="fa fa-calendar home-fa-calendar-icon float-end  mr-6px"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="form-check ">
                            <button
                              type="button"
                              className="btn btn-danger float-end"
                              onClick={addAssignment}
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              className="btn btn-light float-end mr-5px"
                              onClick={() => navigate(-1)}
                            >
                              Cancel
                            </button>
                          </div>
                          <hr className="mt-10px" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignmentAddEditor;
