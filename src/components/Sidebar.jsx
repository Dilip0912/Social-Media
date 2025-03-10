import { Link } from "react-router-dom";
const Sidebar = function () {
  // console.log(selectedTab);
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link text-black"
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/create-post"
            className="nav-link text-black"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            CreatePost
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
