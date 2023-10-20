import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <>
      <div className="col-lg-11" style={{ width: "18%" }}>
        <div className="row">
          <div className="col-2">
            <div>
              <ul className="wd-course-navigation d-none d-md-block">
                {links.map((link, index) => (
                  <li>
                    <Link
                      key={index}
                      to={
                        link == "Home"
                          ? "/Kanbas/Courses"
                          : `/Kanbas/Courses/${link}/${courseId}`
                      }
                      className={`list-group-item ${
                        pathname.includes(link) && "active"
                      }`}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseNavigation;
