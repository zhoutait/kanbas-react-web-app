import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";

function Assignments() {
  const { courseId } = useParams();
  const [assignId, setAssignId] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [course, setCourse] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onOpenModal = (id) => {
    setAssignId(id);
    handleShow();
  };

  const Navigate = useNavigate();

  // Fetch assignments by courseId
  const fetchAssignments = async () => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/a5/assignment/course/${courseId}`
      );
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  // Fetch single course by courseId
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

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/assignments/${assignId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Successful deletion, you can navigate or perform other actions
        handleClose();
        fetchAssignments(); // Refresh the assignments after deletion
      } else {
        console.error("Failed to delete assignment");
      }
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
  };

  useEffect(() => {
    fetchAssignments();
    fetchCourse();
  }, [courseId]);

  return (
    <>
      <div class="col-12 breadcrumb-col">
        <nav aria-label="breadcrumb">
          <div class="row pt-20px">
            <div class="col-10">
              <ol class="breadcrumb custom-breadcrumb">
                <li class="breadcrumb-item">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                  {course?.name}
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
        <CourseNavigation courseId={courseId} />
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
              <Link to={`/Kanbas/Courses/AssignmentAdd/${courseId}`}>
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
              {assignments.map((assignment) => (
                <li className=" list-group-item list-group-item-assignment d-flex justify-content-between">
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
                        className="list-group-item list-group-item-assignment"
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
                        class="btn btn-success"
                        onClick={() => {
                          Navigate(
                            `/Kanbas/Courses/Assignments/${assignment._id}/${assignment.course}`
                          );
                        }}
                      >
                        Edit
                      </button>
                      <span className="p-1"></span>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => {
                          onOpenModal(assignment._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure Want to Delete?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Assignments;
