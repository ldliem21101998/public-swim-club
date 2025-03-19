import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="w-full">
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
