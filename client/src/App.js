import {BrowserRouter, Routes, Route } from "react-router-dom";
import AboutComp from "./components/AboutComp";
import { AfterLoginComp } from "./components/AfterLoginComp";
import DisplayDocsComp from "./components/DisplayDocsComp";
import HomeComp from "./components/HomeComp";
import LoginComp from "./components/LoginComp";
import LogoutComp from "./components/LogoutComp";
import OTPFormComp from "./components/OTPFormComp";
import RegisterComp from "./components/RegisterComp";
import { ServicesComp } from "./components/ServicesComp";
import UploadDocComp from "./components/UploadDocComp";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeComp/>}></Route>
          <Route path="/services/*" element={<ServicesComp/>}></Route>
          <Route path="/signup/*" element={<RegisterComp/>}></Route>
          <Route path="/login/*" element={<LoginComp/>}></Route>
          <Route path="/upload/*" element={<UploadDocComp/>}></Route>
          <Route path="/displayfiles" element={<DisplayDocsComp/>}></Route>
          <Route path="/otp/*" element={<OTPFormComp/>}></Route>
          <Route path="/about" element={<AboutComp/>}></Route>
          <Route path="/logout" element={<LogoutComp/>}></Route>
          <Route path="/afterlogin" element={<AfterLoginComp/>}></Route>
          <Route path="/*">Requested Resource does not exist</Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;