import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Form } from "./Components/Form/Form";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Table } from "./Components/Maincard/Table/Table";
import { LoanFollowForm } from "./Components/Form/LoanFollowForm";
import { EditForm } from "./Components/Form/EditForm";
import { ViewForm } from "./Components/Form/ViewForm";
import { useState } from "react";
// import { Popup } from "./Components/Popup/Popup";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const sideBarToggle = () => {
    setShowSidebar(!showSidebar);
  };

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-item" element={<Form />} />
              <Route path="/all-list" element={<Table />} />
              <Route path="/loan-follow-up" element={<LoanFollowForm />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
