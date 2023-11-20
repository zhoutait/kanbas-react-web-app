import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://kanbas-node-server-app-zinh.onrender.com/api/courses"
      );
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const addNewCourse = async () => {
    try {
      const response = await fetch(
        "https://kanbas-node-server-app-zinh.onrender.com/api/courses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(course),
        }
      );

      if (response.ok) {
        // Successful addition, fetch courses again
        await fetchCourses();
        setCourse({
          name: "New Course",
          number: "New Number",
          startDate: "2023-09-10",
          endDate: "2023-12-15",
        });
      } else {
        console.error("Failed to add course");
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/courses/${courseId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Successful deletion, fetch courses again
        await fetchCourses();
      } else {
        console.error("Failed to delete course");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const editCourse = (courseId) => {
    setCourse(courses.find((course) => course._id === courseId));
  };

  const updateCourse = async (courseId) => {
    try {
      const response = await fetch(
        `https://kanbas-node-server-app-zinh.onrender.com/api/courses/${courseId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(course),
        }
      );

      if (response.ok) {
        // Successful update, fetch courses again
        await fetchCourses();
        setCourse({
          name: "New Course",
          number: "New Number",
          startDate: "2023-09-10",
          endDate: "2023-12-15",
        });
      } else {
        console.error("Failed to update course");
      }
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-11 col-10">
          <h1 className="mt-10px">Dashboard</h1>
          <hr />
          <div className="ml-20px">
            <h2>Published Courses ({courses.length})</h2>
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
                      className="btn btn-success"
                      onClick={addNewCourse}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => updateCourse(course._id)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
              <div>
                {courses.map((course) => (
                  <div key={course._id} className="crud-action border p-2">
                    <div className="d-flex align-items-center">
                      <span>{course.name}</span>
                      <div className="buttons ">
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => editCourse(course._id)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteCourse(course._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row" style={{ width: "80vw" }}>
              {courses.map((course) => (
                <div key={course._id} className="col-sm-6 col-md-4 col-lg-3">
                  <div className="card m-2 dashboad-card">
                    <div className="card-image card-dark-blue">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{course.name}</h5>

                      <Link
                        to={`/Kanbas/Courses/Modules/${course._id}`}
                        className="btn btn-primary"
                      >
                        {course.name}
                      </Link>
                      <p className="card-text">
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
