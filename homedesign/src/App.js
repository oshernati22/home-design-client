import "./App.scss";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ShowRoom from "./Components/ShowRoom";
import DesignerPage from "./Components/DesignerPage";
import AdminPage from "./Components/admin/AdminPage";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Nav />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/:category" element={<ShowRoom />} />
              <Route
                exact
                path="/designers/:designer"
                element={<DesignerPage />}
              />
              <Route exact path="/admin" element={<AdminPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
