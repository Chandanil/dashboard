import Dropdown from "react-bootstrap/Dropdown";
import { Btn } from "../Button/Btn";
import "../Maincard/Table/Table.scss";
// import { Link } from "react-router-dom";
import { useEffect, State, useState} from "react";
import { Popup } from "../Popup/Popup";
import { EditForm } from "../Form/EditForm";
import { ViewForm } from "../Form/ViewForm";
import { LoanFollowForm } from "../Form/LoanFollowForm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from 'axios';
import Swal from 'sweetalert2'
import {  BrowserRouter, Routes, Route, Link,Switch  } from 'react-router-dom';



 
// const data = [
//   {
//     name: "Chandani Lama",
//     expiryTime: "03 Jun 2022",
//     payDate: "03 April 2022",
//     totalDue: "95000.00",
//     noPaidDate: "60 Days",
//     previousInfo: "We can't meet at newroad pasal",
//     contactno: "9812345678",
//   },
//   {
//     name: "Chandani Lama",
//     expiryTime: "03 Jun 2022",
//     payDate: "03 April 2022",
//     totalDue: "95000.00",
//     noPaidDate: "60 Days",
//     previousInfo: "We can't meet at newroad pasal",
//     contactno: "9812345678",
//   },
//   {
//     name: "Chandani Lama",
//     expiryTime: "03 Jun 2022",
//     payDate: "03 April 2022",
//     totalDue: "95000.00",
//     noPaidDate: "60 Days",
//     previousInfo: "We can't meet at newroad pasal",
//     contactno: "9812345678",
//   },
// ];

export const LoanList = (props) => {
  const [loans,setLoans] = useState([]);

 useEffect(()=>{
  fetchLoans()
 },[])

 const fetchLoans = async()=>{
  await axios.get('/api/loan').then(({data})=>{
    setLoans(data)
  })
 }

  const [visible, setVisible] = useState(false);
  const [showViewForm, setShowViewForm] = useState(false);

  const openModal = () => {
    setShowViewForm(false);
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  const openViewModal = () => {
    setVisible(false);
    setShowViewForm(true);
  };
  const closeViewModal = () => {
    setShowViewForm(false);
  };

  const deleteLoan = async (id) => {
    const isConfirm = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        return result.isConfirmed
      });

      if(!isConfirm){
        return;
      }

      await axios.delete(`/api/loan/${id}`).then(({data})=>{
        Swal.fire({
            icon:"success",
            text:data.message
        })
        fetchLoans()
      }).catch(({response:{data}})=>{
        Swal.fire({
            text:data.message,
            icon:"error"
        })
      })
}

if(localStorage.getItem('auth_token')){
  return (
    <>
      <div className="same-gap cl-table">
        <h4 className="title">Follow up Details</h4>
        <Tabs className="cl-tabs">
          <div className="data-filter">
            <TabList>
              <Tab>All</Tab>
              <Tab>Today</Tab>
              <Tab>Not Contact</Tab>
            </TabList>
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

          <TabPanel>
            <table className="table">
              <thead>
                <tr>
                  <th>S.N </th>
                  <th>Name</th>
                  <th>Loan Amount</th>
                  {/* <th>Pay Date</th>
                  <th>Total Due</th>
                  <th>Not Paid Date</th>
                  <th>Previous Information</th> */}
                  <th>Image</th>
                  {!props.hideUpdate && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {loans?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.customer.name}</td>
                      <td>{item.loan_amount}</td>
                      <td>
                      <img width="50px" src={window.baseurl+`/storage/${item.customer.image}`} />
                      </td>
                      {/* <td>{item.totalDue}</td>
                      <td>{item.noPaidDate}</td>
                      <td>{item.previousInfo}</td>
                      <td>{item.contactno}</td> */}
                      {!props.hideUpdate && (
                        <td>
                          <Dropdown className="table-dropdown">
                            <Dropdown.Toggle variant="success">
                              <i className="fa fa-ellipsis-v drop-icon"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item>
                                <div
                                  // onClick={() => {
                                  //   openModal();
                                  // }}
                                >
                                  <Link to={`/loan/edit/${item.id}`} className='fa fa-pencil'>
                                      Edit
                                  </Link>
                                  
                                  {/* <i className="fa fa-pencil"></i>Edit */}
                                </div>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <div >
                                <a variant="danger" className="fa fa-trash" onClick={()=>deleteLoan(item.id)}>
                                    Delete
                                </a>
                                </div>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>

        {/* true check gareko  */}
        {visible && (
          <Popup
            visible={visible}
            closeModal={closeModal}
            renderComponent={<EditForm />}
          />
        )}
        {showViewForm && (
          <Popup
            visible={showViewForm}
            closeModal={closeViewModal}
            renderComponent={<ViewForm />}
          />
        )}
      </div>
    </>
  );
}
};

export const str = 'First';