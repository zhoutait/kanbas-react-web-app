import axios from "axios";
import React, { useEffect, useState } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const URL = "https://kanbas-node-server-app-zinh.onrender.com/a5/assignment";
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  const handleScoreChange = (e) => {
    setAssignment({ ...assignment, score: e.target.value });
  };
  const handleCompletedChange = (e) => {
    setAssignment({ ...assignment, completed: e.target.value });
  };
  const updateScore = () => {
    fetch(`${URL}/score/${assignment.score}`, { method: "PUT" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateCompleted = () => {
    fetch(`${URL}/completed/${assignment.completed}`, { method: "PUT" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2"
        type="text"
      />
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        href="https://kanbas-node-server-app-zinh.onrender.com/a5/assignment"
        className="btn btn-primary me-2"
      >
        Get Assignment
      </a>
      <a
        href="https://kanbas-node-server-app-zinh.onrender.com/a5/assignment/title"
        className="btn btn-primary me-2"
      >
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;
