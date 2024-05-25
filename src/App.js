import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Animation.css";
import "./CardAnimation.css";
import Footer from "./components/Footer";
import AppNavBar from "./components/NavBar";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contacts = React.lazy(() => import("./pages/Contacts"));

const Loading = () => (
  <div className="loading-container">
    <p>Loading page...</p>
  </div>
);

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <div>
          <AppNavBar />
          <main>
            <Routes>
              <Route path="/" element={<Contacts />} />{" "}
              {/* Set Contacts as home page */}
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="*" element={<h1>404! This page doesn't exist</h1>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </React.Suspense>
    </Router>
  );
}

export default App;
