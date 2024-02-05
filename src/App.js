import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Work from "./pages/Work/Work";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/react-designer" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
