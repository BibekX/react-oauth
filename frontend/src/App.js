import "./App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Secret from "./Pages/Secret";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Secret />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
