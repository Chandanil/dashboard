import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Form } from "./Components/Form/Form";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div className="site-content">
        <aside className="widget-area  leftsidebar">
          <Sidebar />
        </aside>
        <section className="wrapper-content">
          <Header />
          <Home />
          <Form />
        </section>
      </div>
    </div>
  );
}

export default App;
