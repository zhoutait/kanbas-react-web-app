import React from "react";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import CourseNavigation from "../CourseNavigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
function Assignments({ type }) {
  const [open, setOpen] = useState(false);
  const [assignId, setAssignId] = useState();
  const onOpenModal = (id) => {
    setAssignId(id);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const Navigate = useNavigate();
  const params = useParams();
  const { courseId } = useParams();
  const { assignmentId } = useParams();
  const dispatch = useDispatch();
  // const assignments = db.Assignments;
  const assignments = useSelector(
    (state) => state.assignmentReducer.assignments
  );
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  // console.log(courseAssignments)

  const courseAssignments = type
    ? assignments.filter((assignment) => assignment.course === courseId)
    : assignments;
  console.log(assignments);

  return (
    <>
      <div class="col-12 breadcrumb-col">
        <nav aria-label="breadcrumb">
          <div class="row pt-20px">
            <div class="col-10">
              <ol class="breadcrumb custom-breadcrumb">
                <li class="breadcrumb-item">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                  {db.Courses.find((item) => item._id == courseId).name}
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Assignments
                </li>
              </ol>
            </div>
            <div class="col-2">
              <button
                type="button"
                class="btn btn-light btn-outline-dark float-end mr-5px mr-15per"
                style={{ height: "38px" }}
              >
                <i class="fa-solid fa-glasses"></i> Student View
              </button>
            </div>
          </div>
          <hr class="mt-10px" />
        </nav>
      </div>
      <div className="container row" style={{ width: "100vw" }}>
        <CourseNavigation />
        <div className="col-10 mt-10px" style={{ width: "75%" }}>
          <div className="row">
            <div className="w-50">
              <div className="form-outline w-50">
                <input
                  type="text"
                  id="assignmentName"
                  className="form-control"
                  placeholder="Search for Assignments"
                />
                <label className="form-label" for="assignmentName"></label>
              </div>
            </div>
            <div className="w-50">
              <button
                type="button"
                className="btn btn-light btn-outline-dark float-end mr-5px"
                style={{ height: "38px" }}
              >
                <i
                  className="fa fa-ellipsis-v float-end"
                  aria-hidden="true"
                ></i>
              </button>
              <Link to={`/Kanbas/Courses/AssignmentAdd/${params.courseId}`}>
                <button
                  type="button"
                  className="btn btn-danger float-end mr-5px"
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>Assignment
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-light btn-outline-dark float-end mr-5px"
                style={{ height: "38px" }}
              >
                <i className="fa fa-plus" aria-hidden="true"></i> Group
              </button>
            </div>
          </div>

          <hr className="mt-0" />
          <div className="assignments-list-heading-wrapper d-flex justify-content-between align-items-center">
            <div className="r_headerFix">
              <div className="d-flex align-items-center mr-20px">
                <i className="fa-solid fa-ellipsis-vertical mr-2px"></i>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
              <div className="r_arrow mr-20px">
                <i className="fa fa-sort-desc" aria-hidden="true"></i>
              </div>
              <h2 className="assignments-list-heading mt-10px">Assignment </h2>
            </div>
            <div>
              <span className="badge rounded-pill text-bg-light mr-10px">
                40% of Total
              </span>
              <i className="fa fa-plus mr-10px" aria-hidden="true"></i>
              <i className="fa fa-ellipsis-v mt-3" aria-hidden="true"></i>
            </div>
          </div>
          <div className="container">
            <ul className="r_distanceB list-group assignments-list">
              {console.log(courseAssignments)}
              {courseAssignments.map((assignment) => (
                <li className=" list-group-item d-flex justify-content-between">
                  <div className="assignments-list-single-left-content d-flex">
                    <div className="d-flex align-items-center mr-20px">
                      <i className="fa-solid fa-ellipsis-vertical mr-2px"></i>
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div className="d-flex align-items-center mr-20px">
                      <i className="fa-solid fa-file-pen"></i>
                    </div>

                    <div className="assignments-list-single-item-text-wrapper">
                      <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/Assignments/${assignment._id}/${assignment.course}`}
                        className="list-group-item"
                      >
                        {assignment.title}
                      </Link>{" "}
                      <br />
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    {/* <i
											className="fa-solid fa-circle-check mr-20px float-end"
											style={{ color: "#2db93d" }}
										></i>
										<i
											className="fa fa-ellipsis-v float-end"
											aria-hidden="true"
										></i> */}
                    <div className="buttons align-items-start">
                      {/* <Link
												key={assignment._id}
												to={`/Kanbas/Courses/Assignments/${assignment._id}/${assignment.course}`}
												className="list-group-item"
											> */}
                      <button
                        type="button"
                        class="btn btn-success "
                        onClick={() => {
                          Navigate(
                            `/Kanbas/Courses/Assignments/${assignment._id}/${assignment.course}`
                          );
                        }}
                      >
                        Edit
                      </button>
                      {/* </Link> */}
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => {
                          // dispatch(setAssignment(assignment));
                          onOpenModal(assignment._id);
                        }}
                      >
                        Delete
                      </button>
                      <Modal open={open} onClose={onCloseModal} center>
                        <h2>Are You Sure Want to Delete</h2>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => onCloseModal()}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => {
                            dispatch(deleteAssignment(assignId));
                            onCloseModal();
                          }}
                        >
                          Delete
                        </button>
                      </Modal>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Assignments;
