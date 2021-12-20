import "./App.scss";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ShowRoom from "./Components/ShowRoom";
import DesignerPage from "./Components/DesignerPage";

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
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
