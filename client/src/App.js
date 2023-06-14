import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer";
import Loginpage from "./pages/login/loginpage";
import Blogpage from "./pages/blogs/blogpage";
import Registerpage from "./pages/login/registerpage";
import { UserContextProvider } from "./user";
import Createnew from "./pages/create/createnew";
import Postpage from "./pages/blogs/postpage";
import Editpost from "./pages/blogs/editpost";
import Contactpage from "./pages/contact/contactpage";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="loginpage" element={<Loginpage />} />
              <Route path="registerpage" element={<Registerpage />} />
              <Route path="blogpage" element={<Blogpage />} />
              <Route path="createnew" element={<Createnew />} />
              <Route path="/post/:id" element={<Postpage />} />
              <Route path="/post/:featured" element={<Postpage />} />
              <Route path="/edit/:id" element={<Editpost />} />
              <Route path="contactpage" element={<Contactpage />} />
            </Route>
          </Routes>

          <Footer />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
