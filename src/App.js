import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { LoanList } from "./Components/Loan/LoanList";
// import { str } from "./Components/Loan/LoanList";

import { LoanEdit } from "./Components/Loan/LoanEdit";
import { CustomerList } from "./Components/Customer/CustomerList";
import { CustomerLoanDetail } from "./Components/Customer/CustomerLoanDetail";
import { CustomerLoanPaymentForm } from "./Components/Customer/CustomerLoanPaymentForm";
import { Form } from "./Components/Form/Form";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import { Table } from "./Components/Maincard/Table/Table";
import { LoanFollowForm } from "./Components/Form/LoanFollowForm";

import { EditForm } from "./Components/Form/EditForm";
import { ViewForm } from "./Components/Form/ViewForm";
import { useState } from "react";

import {Register} from "./Components/Auth/Register";
import {Login} from "./Components/Auth/Login";
import {UserForm} from "./Components/User/UserForm";
import {UserList} from "./Components/User/UserList";
import {UserEdit} from "./Components/User/UserEdit";

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer${token}`:'';
  return config;
});



const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const sideBarToggle = () => {
    setShowSidebar(!showSidebar);
  };



 


  if(!localStorage.getItem('auth_token')){
 return(
      <BrowserRouter>
      <Routes>
            <Route path="/register" element={<Register />}/>
            <Route path="/" element={<Login />}/>
          </Routes>
      </BrowserRouter>
 )
    
  }else{

  return (

   
    <div className="App">
      <BrowserRouter>
        <div
          className={`site-content ${
            showSidebar === false ? "hide-dashboard" : ""
          }`}
        >
          
            <aside className="widget-area  leftsidebar">
            <Sidebar showSidebar={showSidebar} />
          </aside>
         
          

          <section className="wrapper-content">
         
            <Header sideBarToggle={sideBarToggle} showSidebar={showSidebar} />

            {localStorage.getItem('role') == 1 && 
              <Routes>
                <Route path="/add-user" element={<UserForm />}/>
                <Route path="/user-list" element={<UserList />}/>
                <Route path="/user-edit/:id" element={<UserEdit />}/>
              </Routes>
            }
            <Routes>
            
              <Route path="/" element={<Home />} />
               
              <Route path="/add-item" element={<Form />} />
              <Route path="/all-list" element={<Table />} />
              <Route path="/loan-follow-up" element={<LoanFollowForm />} />
              <Route path="/loan-list" element={<LoanList />} />
              <Route path="/loan/edit/:id" element={<LoanEdit />} />
              
              <Route path="list-customer" element={<CustomerList />}/>
              <Route path="customer-loandetail/:id" element={<CustomerLoanDetail />}/>
              <Route path="customer-loandetail-payment/:loanid" element={<CustomerLoanPaymentForm />}/>
              
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
}
};

export default App;
