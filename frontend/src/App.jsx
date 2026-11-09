import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Journal from "./pages/Journal.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";
import About from "./pages/About.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminRoute from "./pages/admin/AdminRoute.jsx";
import ArticleEditor from "./pages/admin/ArticleEditor.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<ArticleDetails />} />
          <Route path="/about" element={<About />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />

          <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/articles/new" element={<ArticleEditor />} />
          <Route path="/admin/articles/:id/edit" element={<ArticleEditor />} />
          </Route>
          

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
