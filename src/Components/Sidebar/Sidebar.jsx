import "./Sidebar.scss";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export const Sidebar = (props) => {
  return (
    <>
      <div className="cl-sidebar">
        <Accordion className="cl-sidemenu">
          <Link className="menu-item" to="/">
            <i className="fa fa-home icon"></i>
            <span>Dashboard</span>
          </Link>

          <Accordion.Item eventKey="0">
            <Accordion.Header className="menu-item">
              <i className="fa fa-money icon"></i>
              <span>Load Details</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="/add-item">
                Add 
              </Link>
              <Link className="item" to="/loan-list">
                 List
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="menu-item">
              <i className="fa fa-user-o icon"></i>
              <span>Customer</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="/add-customer">
                Add
              </Link>
              <Link className="item" to="/list-customer">
                List
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          { localStorage.getItem('role') == 1 && 
            
            <Accordion.Item eventKey="3">
            <Accordion.Header className="menu-item">
              <i className="fa fa-user-o icon"></i>
              <span>User Management</span>
            </Accordion.Header>
            <Accordion.Body>
              <Link className="item" to="/add-user">
                Add 
              </Link>
              <Link className="item" to="/user-list">
                list
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          
          }
          <Accordion.Item eventKey="2">
            <Accordion.Header className="menu-item">
              <i className="fa fa-floppy-o icon"></i>
              <span>Savings</span>
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
    </>
  );
};
