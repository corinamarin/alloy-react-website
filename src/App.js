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
      <h1>Continut pagina</h1>
    </div>
  );
}

export default App;
