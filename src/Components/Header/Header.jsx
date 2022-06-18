import { useState } from "react";
import "./Header.scss";

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCluser, setShowCluser] = useState(true);
  const [showClnoti, setShowClnoti] = useState(true);
  return (
    <>
      <div className="cl-header">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="cl-flex">
              <div
                className={`hamburger ${showSidebar ? "show" : ""}`}
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="cl-search">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Search.."
                    />
                    <i className="fa fa-search icon"></i>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cl-flex justify-content-end">
              <div
                className={`cl-dropdown cl-noti ${showClnoti ? "toggle" : ""}`}
                onClick={() => {
                  setShowClnoti(!showClnoti);
                }}
              >
                <i className="fa fa-bell-o icon"></i>
                <span class="noti-count">0</span>
                <div className="dropdown-menu cl-dropdown-menu noti-list">
                  <p>Hi notification</p>
                </div>
              </div>
              <div
                className={`cl-dropdown cl-user  ${showCluser ? "toggle" : ""}`}
                onClick={() => {
                  setShowCluser(!showCluser);
                }}
              >
                <div className="user-info">
                  <img src="Images/testo.jpg" />
                  <div className="user-name">
                    <h6 className="title">Chandani Lama</h6>
                    <small>Admin</small>
                  </div>
                </div>
                <ul className="dropdown-menu user-dropdown-menu  cl-dropdown-menu">
                  <li className="user-detail">
                    <img src="Images/testo.jpg" alt="testo" />
                    <p>
                      Chandani Lama- Web Designer
                      <small>Member since Nov. 2012</small>
                    </p>
                    <a href="" className="btn-small">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
