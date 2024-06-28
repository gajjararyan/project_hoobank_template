import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./components/core/AboutUs/About";
import HomePage from "./pages/HomePage";
import Contact from "./components/core/ContactUs/Contact";
import OurServices from "./components/core/OtherSpecialization/OurServices";
import Software from "./components/core/SoftwareSolutions/Software";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/Software" element={<Software />} />
    </Routes>
  </div>
);

export default App;
