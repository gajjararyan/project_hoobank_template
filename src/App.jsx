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
    </Routes>
  </div>
);

{
  /* <Routes>
        </Routes> */
}

export default App;
