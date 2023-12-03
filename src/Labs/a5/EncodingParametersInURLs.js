import React, { useEffect, useState } from "react";
import axios from "axios";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [result, setResult] = useState(0);
  const fetchSum = async (a, b) => {
    const response = await axios.get(
      `https://kanbas-node-server-app-zinh.onrender.com/a5/add/${a}/${b}`
    );
    setResult(response.data);
  };
  const fetchSubstraction = async (a, b) => {
    const response = await axios.get(
      `https://kanbas-node-server-app-zinh.onrender.com/a5/subtract/${a}/${b}`
    );
    setResult(response.data);
  };
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get(
      "https://kanbas-node-server-app-zinh.onrender.com/a5/welcome"
    );
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  return (
    <div>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

      <input
        className="form-control"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/assignment/title/${assignment.title}`}
        className="btn btn-primary"
      >
        Update Assignment Title
      </a>

      <h4>Assignment</h4>

      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/assignment/title`}
        className="btn btn-primary"
      >
        Get Assignment Title
      </a>
      <hr />
      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/assignment`}
        className="btn btn-primary"
      >
        Get Assignment
      </a>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control"
        type="number"
        value={a}
      />
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control"
        type="number"
        value={b}
      />
      <input
        value={result}
        className="form-control mb-2"
        type="number"
        readOnly
      />
      <h3>Path Parameters</h3>
      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/add/${a}/${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </a>
      <h3>Fetch Result</h3>
      <button
        onClick={() => fetchSum(a, b)}
        className="btn btn-primary mb-2  w-100"
      >
        Fetch Sum of {a} + {b}
      </button>
      <button
        onClick={() => fetchSubstraction(a, b)}
        className="btn btn-danger me-2 w-100"
      >
        Fetch Substraction of {a} - {b}
      </button>
      <h3>Query Parameters</h3>
      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/calculator?operation=add&a=${a}&b=${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`https://kanbas-node-server-app-zinh.onrender.com/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        className="btn btn-danger"
      >
        Substract {a} + {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;
