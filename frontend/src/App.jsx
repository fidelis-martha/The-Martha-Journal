import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx";
import Journal from "./pages/Journal.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
