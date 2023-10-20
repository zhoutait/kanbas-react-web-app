import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineHistory } from "react-icons/ai";
import { BsFillInboxFill } from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { IoMdExit } from "react-icons/io";

import "./index.css";
function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsFillInboxFill className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Studio: <HiDesktopComputer className="wd-icon" />,
    Commons: <IoMdExit className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 125 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item-2 ${pathname.includes(link) && "active"}`}
          style={{ border: "none !important" }}
        >
          <span>{linkToIconMap[link]}</span>
          <span id="mytext">{link}</span>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
