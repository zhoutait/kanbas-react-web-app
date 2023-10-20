import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Assignment3 from "./a3";

function Labs() {
  const { pathname } = useLocation();
  // const { pathname } = location;
  return (
    <div className="container">
      <h1>Labs</h1>
      <div className="nav nav-pills">
        <Link
          to="/Labs/a3"
          className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
        >
          Assignment 3
        </Link>
      </div>
      <div className="nav nav-pills">
        <Link
          to="/kanbas"
          className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
        >
          Kanbas
        </Link>
      </div>
      <Routes>
        {/* {<Route path="/" element={<Assignment3 />} />} */}
        {<Route path="/" element={<Navigate to="a3" />} />}
        <Route path="a3/*" element={<Assignment3 />} />
      </Routes>
      {/* <Assignment3 /> */}
    </div>
  );
}

export default Labs;
