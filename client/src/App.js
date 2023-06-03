import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer";
import Loginpage from "./pages/login/loginpage";
import Blogpage from "./pages/blogs/blogpage";
import Registerpage from "./pages/login/registerpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="loginpage" element={<Loginpage />} />
          <Route path="registerpage" element={<Registerpage />} />
          <Route path="blogpage" element={<Blogpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
