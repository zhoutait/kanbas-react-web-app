import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import {
  addAssignment,
  setAssignment,
  updateAssignment,
} from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

function AssignmentEditor({ type }) {
  const { assignmentId, courseId } = useParams();

  const navigate = useNavigate();

  const assignments = useSelector(
    (state) => state.assignmentReducer.assignments
  );
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  //  console.log(assignments)
  // 	console.log(assignment);

  const courseAssignments = type
    ? assignments.filter((assignment) => assignment._id === assignmentId)
    : assignments;
  console.log(courseAssignments[0]);

  useEffect(() => {
    dispatch(setAssignment(courseAssignments[0]));
  }, []);
  // console.log(assignment)

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
                      {assignment.course}
                    </li>
                    <li
                      className="breadcrumb-item active text-danger"
                      aria-current="page"
                    >
                      {assignment.title}
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
                        placeholder=""
                        value={assignment.title}
                        onChange={(e) =>
                          dispatch(
                            setAssignment({
                              ...assignment,
                              title: e.target.value,
                            })
                          )
                        }
                      />
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder=""
                          id="floatingTextarea2"
                          style={{ height: "100px" }}
                          value={assignment.description}
                          onChange={(e) =>
                            dispatch(
                              setAssignment({
                                ...assignment,
                                description: e.target.value,
                              })
                            )
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
                              value={assignment.points}
                              onChange={(e) =>
                                dispatch(
                                  setAssignment({
                                    ...assignment,
                                    points: e.target.value,
                                  })
                                )
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
                                  value={assignment.due}
                                  onChange={(e) =>
                                    dispatch(
                                      setAssignment({
                                        ...assignment,
                                        due: e.target.value,
                                      })
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
                                      value={assignment.availableFrom}
                                      onChange={(e) =>
                                        dispatch(
                                          setAssignment({
                                            ...assignment,
                                            availableFrom: e.target.value,
                                          })
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
                                      value={assignment.until}
                                      onChange={(e) =>
                                        dispatch(
                                          setAssignment({
                                            ...assignment,
                                            until: e.target.value,
                                          })
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
                            {!assignmentId ? (
                              <button
                                type="button"
                                className="btn btn-danger float-end"
                                onClick={() => {
                                  dispatch(
                                    addAssignment({
                                      ...assignment,
                                      assignment: assignmentId,
                                    })
                                  );
                                  navigate(-1);
                                }}
                              >
                                Save
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="btn btn-danger float-end"
                                onClick={() => {
                                  dispatch(
                                    updateAssignment({
                                      ...assignment,
                                      assignment: assignmentId,
                                    })
                                  );
                                  navigate(-1);
                                }}
                              >
                                Update
                              </button>
                            )}

                            <button
                              type="button"
                              className="btn btn-light float-end mr-5px"
                              onClick={() => {
                                navigate(-1);
                              }}
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

export default AssignmentEditor;
