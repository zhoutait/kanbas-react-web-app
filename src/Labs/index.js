import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Nav from "../nav";
import Assignment3 from "./a3";
import HelloWorld from "./a3/HelloWorld";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
  const { pathname } = useLocation();
  // const { pathname } = location;
  return (
    <Provider store={store}>
      <div className="container">
        <nav className="border border-bottom-secondary my-4">
          <div className="container d-flex  py-2 ">
            <div className="nav h4">
              <Link
                to="/Labs/a3"
                className={`nav-link ${
                  pathname.includes("a3") ? "active" : ""
                }text-white`}
              >
                Assignment 3
              </Link>
            </div>
            <div className="nav h4">
              <Link
                to="/Labs/a4"
                className={`nav-link ${
                  pathname.includes("a4") ? "active" : ""
                }text-primary`}
              >
                Assignment 4
              </Link>
            </div>
            <div className="nav h4">
              <Link
                to="/hello"
                className={`nav-link ${
                  pathname.includes("hello") ? "active" : ""
                }text-primary`}
              >
                Hello
              </Link>
            </div>
            <div className="nav h4">
              <Link
                to="/kanbas"
                className={`nav-link ${
                  pathname.includes("kanbas") ? "active" : ""
                }text-primary`}
              >
                Kanbas
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          {/* {<Route path="/" element={<Assignment3 />} />} */}
          {<Route path="/" element={<Navigate to="a3" />} />}
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4/*" element={<Assignment4 />} />
        </Routes>
        {}
      </div>
    </Provider>
  );
}

export default Labs;
