import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RoseDay from "./pages/RoseDay";
import RoseDayNew from "./pages/RoseDayNew";
import ProposeDay from "./pages/ProposeDay";
import ChocolateDay from "./pages/ChocolateDay";
import TeddyDay from "./pages/TeddyDay";
import PromiseDay from "./pages/PromiseDay";
import HugDay from "./pages/HugDay";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/RoseDay" element={<RoseDay />} />
          <Route exact path="/RoseDayNew" element={<RoseDayNew />} />
          <Route exact path="/ProposeDay" element={<ProposeDay />} />
          <Route exact path="/ChocolateDay" element={<ChocolateDay />} />
          <Route exact path="/TeddyDay" element={<TeddyDay />} />
          <Route exact path="/PromiseDay" element={<PromiseDay />} />
          <Route exact path="/HugDay" element={<HugDay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
