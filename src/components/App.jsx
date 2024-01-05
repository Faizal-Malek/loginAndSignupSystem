import { useState } from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100dvh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" Component={Dashboard}/>
                    <Route path="/signup" Component={Signup}/>
                    <Route path="/login" Component={Login}/>
                </Routes>  
            </AuthProvider>    
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;