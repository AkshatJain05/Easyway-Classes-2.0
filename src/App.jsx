import "./App.css";
import FeatureBox from "./component/FeatureBox.jsx";
import HeroSection from "./component/HeroSection.jsx";
import Nav from "./component/Nav.jsx";
import Footer from "./component/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import StudyMaterial from "./component/StudyMaterial.jsx";
import ContactUs from "./component/ContactUs.jsx";
import EasywayAI from "./component/EasywayAi.jsx";
import Courses from "./component/Courses.jsx";
import Login from "./component/Login.jsx";
import SignUp from "./component/SignUp.jsx";
function App() {
  return (
    <>
      <Nav className="transition-linear" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeatureBox />
            </>
          }
        ></Route>
        <Route
          path="/study-material"
          element={
            <>
              <StudyMaterial />
            </>
          }
        ></Route>
        <Route
          path="/contact-us"
          element={
            <>
              <ContactUs />
            </>
          }
        ></Route>
        <Route
          path="/easyway-ai"
          element={
            <>
              <EasywayAI />
            </>
          }
        ></Route>
        <Route
          path="/courses"
          element={
            <>
              <Courses />
            </>
          }
        ></Route>
         <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <>
              <SignUp />
            </>
          }
        ></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
