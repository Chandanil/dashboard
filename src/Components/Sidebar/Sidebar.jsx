import "./Sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";

export const Sidebar = (props) => {
  const history = useNavigate();
  const [hideList, setHideList] = useState(false);
  return (
    <>
      <div className="cl-sidebar">
        <Accordion className="cl-sidemenu">
          <Link className="menu-item" to="/">
            <i className="fa fa-home icon"></i>
            <span>Dashboard</span>
          </Link>

          <Accordion.Item eventKey="0">
            <Accordion.Header
              className="menu-item"
              onClick={(e) => {
                setHideList(false);
              }}
            >
              <i className="fa fa-money icon"></i>
              <span>Load Details</span>
            </Accordion.Header>
            {!hideList && (
              <Accordion.Body>
                <p
                  onClick={() => {
                    if (props.showSidebar === false) {
                      setHideList(true);
                    }
                    history("/add-item");
                  }}
                  className="item"
                  to="/add-item"
                >
                  Add New
                </p>
                <p
                  onClick={() => {
                    if (props.showSidebar === false) {
                      setHideList(true);
                    }
                    history("/all-list");
                  }}
                  className="item"
                  to="/all-list"
                >
                  Add List
                </p>
              </Accordion.Body>
            )}
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header
              className="menu-item"
              onClick={() => setHideList(false)}
            >
              <i className="fa fa-floppy-o icon"></i>
              <span>Savings</span>
            </Accordion.Header>
            <Accordion.Body>
              <p
                onClick={() => {
                  if (props.showSidebar === false) {
                    setHideList(true);
                  }
                  history("/add-item");
                }}
                className="item"
                to="/add-item"
              >
                Add Item
              </p>
              <p
                onClick={() => {
                  if (props.showSidebar === false) {
                    setHideList(true);
                  }
                  history("/all-list");
                }}
                className="item"
                to="/all-list"
              >
                Add List
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
