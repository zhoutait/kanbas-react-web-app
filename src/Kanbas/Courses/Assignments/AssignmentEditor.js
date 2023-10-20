import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import CourseNavigation from "../CourseNavigation";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.Assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  console.log(assignment);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/assignment`);
  };
  return (
    <>
      <div>
        <div className="row">
          <div className="col-sm-10 col-md-11 col-9">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb" className="pt-15">
                  <ol className="breadcrumb custom-breadcrumb">
                    <li className="breadcrumb-item text-danger">
                      <i
                        className="fa fa-bars text-danger"
                        aria-hidden="true"
                      ></i>
                      {assignment.course}
                    </li>
                    <li
                      className="breadcrumb-item active text-danger"
                      aria-current="page"
                    >
                      {assignment.title} Assignments
                    </li>
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
                        placeholder="A1 - ENV + HTML"
                      />
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder=""
                          id="floatingTextarea2"
                          style={{ height: "100px" }}
                        >
                          This assignment describes how to install the
                          development environment for creating and working with
                          Web applications we will be developing this semester.
                          We will add new content every week, pushing the code
                          to a GitHub source repository, and tdeploying the
                          content to a remote server hosted on Netlify.
                        </textarea>
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
                            />
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <div className="col-lg-3 col-sm-4 assign-edit-list-item-label-col">
                            <label
                              for="inputPassword"
                              className="col-form-label text-right"
                            >
                              Assignment Group
                            </label>
                          </div>
                          <div className="col-lg-9 col-sm-8 ">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>ASSIGNMENTS</option>
                            </select>
                          </div>
                        </div>

                        <div className="mb-3 row">
                          <div className="col-lg-3 col-sm-4 assign-edit-list-item-label-col">
                            <label
                              for="inputPassword"
                              className="col-form-label text-right"
                            >
                              Display Grade as
                            </label>
                          </div>
                          <div className="col-lg-9 col-sm-8 ">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Percentage</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-3 assign-edit-list-item-label-col"></div>
                          <div className="col-sm-9">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                Do not count this assignment towards the final
                                grade
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3 row mt-30px">
                          <div className="col-lg-3 col-sm-4 assign-edit-list-item-label-col">
                            <label
                              for="inputPassword"
                              className="col-form-label text-right"
                            >
                              Submission Type
                            </label>
                          </div>
                          <div className="col-lg-9 col-sm-8 ">
                            <div className="assign-edit-submission-type-content-wrapper p-15">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ width: "250px", maxWidth: "100%" }}
                              >
                                <option selected>Online</option>
                              </select>
                              <p className="mt-20px">
                                <b>Online Entry Option</b>
                              </p>

                              <div className="form-check mb-10px">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Text Entry
                                </label>
                              </div>
                              <div className="form-check mb-10px">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Website URL
                                </label>
                              </div>
                              <div className="form-check mb-10px">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Media Recordings
                                </label>
                              </div>
                              <div className="form-check mb-10px">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Student Annotation
                                </label>
                              </div>
                              <div className="form-check mb-10px">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  File Uploads
                                </label>
                              </div>
                            </div>
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
                              <p className="mb-10px">
                                <b>Assign to</b>
                              </p>
                              <ul className="assign-edit-gradres-tags">
                                <li className="assign-edit-gradres-first-tag d-flex align-items-center">
                                  <p className="mt-0 mb-0">Everyone </p>
                                  <i
                                    className="fa fa-times ml-4"
                                    aria-hidden="true"
                                  ></i>
                                </li>
                                <li>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword"
                                    style={{
                                      width: "150px",
                                      maxWidth: "150px",
                                    }}
                                  />
                                </li>
                              </ul>
                              <p className="mb-0">
                                <b>Due</b>
                              </p>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Sep 18, 2023, 11:59 PM"
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
                            <div className="mb-30px">
                              <div
                                className="p-3 mb-2 text-dark text-center"
                                style={{
                                  backgroundColor: "#dddddd",
                                  borderRadius: "0 0 5px 5px",
                                }}
                              >
                                <i
                                  className="fa fa-plus mr-5px;"
                                  aria-hidden="true"
                                ></i>
                                Add
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="form-check ">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Notify user that this content has changed
                            </label>
                            <button
                              type="button"
                              className="btn btn-danger float-end"
                              onClick={handleSave}
                            >
                              Save
                            </button>
                            <Link to={`/Kanbas/Courses/${courseId}/assignment`}>
                              <button
                                type="button"
                                className="btn btn-light float-end mr-5px"
                              >
                                Cancel
                              </button>
                            </Link>
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

export default AssignmentEditor;
