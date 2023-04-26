import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./LandingPage";
import SignInPage from "./SignInPage";
import SignedInPage from "./SignedInPage";
import AdminLoginPage from "./AdminLoginPage";
import AdminPanelPage from "./AdminPanelPage";
import {useState} from "react";

function App() {

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [loginTime, setLoginTime] = useState('')

  return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage />}/>
                  <Route path="/Login" element={<SignInPage setName={setName} name={name} setCompany={setCompany} company={company} loginTime={loginTime} setLoginTime={setLoginTime} />}/>
                  <Route path="/SignedIn" element={<SignedInPage setName={setName} name={name} setCompany={setCompany} company={company} loginTime={loginTime} setLoginTime={setLoginTime}  />}/>
                  <Route path="/AdminLogin" element={<AdminLoginPage />}/>
                  <Route path="/AdminPanel" element={<AdminPanelPage />}/>
              </Routes>
        </BrowserRouter>
  )
}

export default App;
