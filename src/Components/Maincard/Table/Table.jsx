import Dropdown from "react-bootstrap/Dropdown";
import { Btn } from "../../Button/Btn";
import "./Table.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Popup } from "../../Popup/Popup";
import { LoanFollowForm } from "../../Form/LoanFollowForm";

const data = [
  {
    name: "Chandani Lama",
    expiryTime: "03 Jun 2022",
    payDate: "03 April 2022",
    totalDue: "95000.00",
    noPaidDate: "60 Days",
    previousInfo: "We can't meet at newroad pasal",
    contactno: "9812345678",
  },
  {
    name: "Chandani Lama",
    expiryTime: "03 Jun 2022",
    payDate: "03 April 2022",
    totalDue: "95000.00",
    noPaidDate: "60 Days",
    previousInfo: "We can't meet at newroad pasal",
    contactno: "9812345678",
  },
  {
    name: "Chandani Lama",
    expiryTime: "03 Jun 2022",
    payDate: "03 April 2022",
    totalDue: "95000.00",
    noPaidDate: "60 Days",
    previousInfo: "We can't meet at newroad pasal",
    contactno: "9812345678",
  },
];

export const Table = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="cl-table">
        <h4 className="title">Follow up Details</h4>
        <div className="data-filter">
          <Btn />
          <div className="right-content">
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
            <Dropdown className="filter-dropdown">
              <Dropdown.Toggle className="cl-btn">
                <span>Filter</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <span>Filter 1</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <span>Filter 2</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>S.N </th>
              <th>Name</th>
              <th>Expire Time</th>
              <th>Pay Date</th>
              <th>Total Due</th>
              <th>Not Paid Date</th>
              <th>Previous Information</th>
              <th>Contact No</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.expiryTime}</td>
                  <td>{item.payDate}</td>
                  <td>{item.totalDue}</td>
                  <td>{item.noPaidDate}</td>
                  <td>{item.previousInfo}</td>
                  <td>{item.contactno}</td>
                  <td>
                    <Dropdown className="table-dropdown">
                      <Dropdown.Toggle variant="success">
                        <i className="fa fa-ellipsis-v drop-icon"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <div
                            onClick={() => {
                              openModal();
                            }}
                          >
                            <i className="fa fa-edit"></i>Edit
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          <i className="fa fa-eye"></i> View
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {visible && (
                      <Popup
                        visible={visible}
                        closeModal={closeModal}
                        renderComponent={<LoanFollowForm />}
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
