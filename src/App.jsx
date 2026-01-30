import { useState } from "react"
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import CompanyLogo from "./components/Company";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  return (
    <div className="dark:bg-black relative">
      <Toaster />
  <Navbar theme={theme} setTheme={setTheme} />
  <Hero />
  <CompanyLogo />
  <Services/>
  <OurWork />
  <Teams />
  <ContactUs />
  <Footer theme={theme} />
    </div>
  )
}

export default App
