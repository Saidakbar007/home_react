import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Page4 from "./pages/Page4.jsx";
import Page5 from "./pages/Page5.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1); 

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < 5 ? prevPage + 1 : 1)); 
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <Page4 />;
      case 5:
        return <Page5 />;
      default:
        return <Page1 />;
    }
  };

  return (
    <Router>
      <div>
        {renderPage()} 
        <button onClick={handleNextPage}>Перейти на следующую страницу</button> 
      </div>
    </Router>
  );
};

export default App;