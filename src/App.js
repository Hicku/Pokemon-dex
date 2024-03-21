import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navabar from "./components/navbar/Navabar";
import Homepage from "./Pages/Homepage";
import Dex from "./Pages/dex/Dex";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>;

export const AppContext = createContext();

function App() {
  // Convert first letter to uppercase
  const convertText = (text) => {
    let updatedText = "";
    for (let i = 0; i < text.length; i++) {
      if (i === 0) {
        updatedText += text[i].toUpperCase();
      } else {
        updatedText += text[i];
      }
    }
    return updatedText;
  };

  return (
    <Router>
      <AppContext.Provider value={{ convertText: convertText }}>
        <div className="App">
          <header>
            <Navabar />
          </header>
          <main className="main-container-app">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/dex" element={<Dex />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
