import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./LandingPage";
import SignInPage from "./SignInPage";
import SignedInPage from "./SignedInPage";
import AdminLoginPage from "./AdminLoginPage";
import AdminPanelPage from "./AdminPanelPage";

function App() {
  return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage />}/>
                  <Route path="/Login" element={<SignInPage />}/>
                  <Route path="/SignedIn" element={<SignedInPage />}/>
                  <Route path="/AdminLogin" element={<AdminLoginPage />}/>
                  <Route path="/AdminPanel" element={<AdminPanelPage />}/>
              </Routes>
        </BrowserRouter>
  )
}

export default App;
