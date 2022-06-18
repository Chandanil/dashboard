import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Form } from "./Components/Form/Form";
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Table } from "./Components/Maincard/Table/Table";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="site-content">
          <aside className="widget-area  leftsidebar">
            <Sidebar />
          </aside>
          <section className="wrapper-content">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/all-list" element={<Table />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
