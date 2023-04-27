import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3 fixed-top" style={{backgroundColor: '#374151'}}>
      <div className="container">
        {/* <a className="navbar-brand text-light" href="#">
          <span className="bg-secondary px-3 py-2 rounded">E</span> 
        </a> */}
        <Link to='/' className="navbar-brand text-light"><span className="bg-secondary px-3 py-2 rounded">E</span> Epictetus</Link> 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ps-lg-5" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/uidesign" className="nav-link">Ui Design</Link>
            </li>
            <li className="nav-item">
              <Link to="/frontend" className="nav-link">Front-End</Link>
            </li>
            <li className="nav-item">
            <Link to="/backend" className="nav-link">Back-End</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lainnya
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* form */}
          <input
            className="bg-transparent rounded border  border-secondary outline-0 p-1 text-light px-2"
            placeholder="Search"
          />

          {/* form end */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;