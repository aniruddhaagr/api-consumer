import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {

  function isLoggedIn() {
    return localStorage.getItem('logged-in') == 'true'
  }

  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Consumer side application
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>

              { !isLoggedIn() &&
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/register" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/register">
                      Register
                  </Link>
                </li>
              }

              { !isLoggedIn() &&
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/login" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/login">
                      Sign-in
                  </Link>
                </li>
              }

              { isLoggedIn() &&
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/profile" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/profile">
                      My profile
                  </Link>
                </li>
              }

              { isLoggedIn() &&
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/edit_profile" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/edit_profile">
                      Edit profile
                  </Link>
                </li>
              }


              { isLoggedIn() &&
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/sign_out" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/sign_out">
                      Sign-out
                  </Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
