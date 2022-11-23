import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link, Routes} 
        from "react-router-dom";
  import Page1 from './Page1.js';
  import Page2 from './Page2.js';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    window["alloy"]("sendEvent", {
      renderDecisions: true,
      xdm: {
          web: {
              webPageDetails: {
                  viewName: "/home"
              }
          },
          eventType: "view-change"
      }
  }).then(({decisions = []}) => {
      console.log("scope based decisions for home view", decisions);
  });
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Page1 />} />
            <Route exact path="page2" element={<Page2 />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;
