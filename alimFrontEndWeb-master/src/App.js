import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MarriageWazifa from "./components/MarriageWazifa/MarriageWazifa";
import MoreServicesSection from "./components/MoreServicesSection/MoreServicesSection";
import Quites from "./components/Quites/Quites";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import TopBar from "./components/TopBar/TopBar";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminServices from "./components/AdminServices/AdminServices";
import WattsappIcon from "./components/WattsappIcon/WattsappIcon";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <WattsappIcon />
                <Header />
                <HeroSection />
                <Quites />
                <ServiceSection />
                <MarriageWazifa />
                <MoreServicesSection />
                <AdminServices />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Header />
                <MoreServicesSection />
                <AdminServices />
                <Footer />
              </>
            }
          />
          <Route path="/adminlogin" element={<Login />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
