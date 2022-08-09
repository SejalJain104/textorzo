import "./App.css";
import Navbar from "./components/Navbar";
 import About from "./components/About";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#091c2e";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
        <Navbar
          title="Textorzo"
          aboutText="About Textorzo"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <About/> */}
        <div className="container my-3">
        
          
    <Routes>
      <Route exact path="/about" element={<About mode={mode}/>}>
      </Route>
        <Route exact path="/" element={<Textarea
                  showAlert={showAlert}
                  heading="Try Textorzo-Word counter,Character counter,Remove extra spaces"
                  mode={mode}
                />}>
        </Route>
    
    </Routes>
    </div>
  </BrowserRouter>
        
      {/* </Router> */}
    </>
  );
}

export default App;
