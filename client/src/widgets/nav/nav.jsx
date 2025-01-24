import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const[isLog, setIsLog] = useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            \(^_^)/
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="btn btn-outline-success me-2" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-outline-success me-2" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn btn-outline-success me-2" to="/registration">
                  Registration
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="btn btn-outline-success me-2" aria-disabled="true" to ='/login'>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container mt-3">
        <Outlet />
      </section>
    </>
  );
}

export default Nav;
