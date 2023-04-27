import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./LandingPage";
import SignInPage from "./SignInPage";
import SignedInPage from "./SignedInPage";
import AdminLoginPage from "./AdminLoginPage";
import AdminPanelPage from "./AdminPanelPage";
import {useState} from "react";
import SignOutPage from "./SignOutPage";
import SignedOutPage from "./SignedOutPage";

function App() {

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [loginTime, setLoginTime] = useState('')
    const [adminLoggedIn, setAdminLoggedIn] = useState(false)

  return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage />}/>
                  <Route path="/Login" element={<SignInPage setName={setName} name={name} setCompany={setCompany} company={company} setLoginTime={setLoginTime} />}/>
                  <Route path="/SignedIn" element={<SignedInPage setName={setName} name={name} setCompany={setCompany} company={company} loginTime={loginTime} setLoginTime={setLoginTime}  />}/>
                  <Route path="/AdminLogin" element={<AdminLoginPage setAdminLoggedIn={setAdminLoggedIn} />}/>
                  <Route path="/AdminPanel" element={<AdminPanelPage adminLoggedIn={adminLoggedIn} />}/>
                  <Route path="/Logout" element={<SignOutPage />}/>
                  <Route path="/SignedOut" element={<SignedOutPage />}/>
              </Routes>
        </BrowserRouter>
  )
}

export default App;
