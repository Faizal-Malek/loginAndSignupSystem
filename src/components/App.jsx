import { useState } from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";

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
                    <Route element= {<PrivateRoute />}>
                    <Route exact path="/" element={<Dashboard/>}/>
                    </Route>
                    <Route exact path="/Update-Profile" element={<UpdateProfile/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                </Routes>  
            </AuthProvider>    
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
