import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About"

import { Home, About } from './pages'
import { Navbar } from './components'

// export const Home = () => <h1>Home</h1>

// export const About = () => <h1>About</h1>;
export const Contact = () => <h1>Contact</h1>;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
