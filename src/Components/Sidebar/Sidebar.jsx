import "./Sidebar.scss";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export const Sidebar = () => {
  return (
    <>
      <div className="cl-sidebar">
        <div className="container">
          <Accordion className="cl-sidemenu">
            <Link className="menu-item" to="/">
              <i className="fa fa-home icon"></i>Dashboard
            </Link>

            <Accordion.Item eventKey="0">
              <Accordion.Header className="menu-item">
                <i className="fa fa-money icon"></i>Load Details
              </Accordion.Header>
              <Accordion.Body>
                {" "}
                <Link className="item" to="/add-item">
                  Add New
                </Link>
                <Link className="item" to="/all-list">
                  Add List
                </Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="menu-item">
                <i className="fa fa-floppy-o icon"></i>Savings
              </Accordion.Header>
              <Accordion.Body>
                <Link className="item" to="/add-item">
                  Add Item
                </Link>
                <Link className="item" to="/all-list">
                  Add List
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};
