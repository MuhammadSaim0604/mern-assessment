import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer";
import About from "./pages/About";
import Booking from "./pages/Booking";
import NotFound from "./pages/Not-found";
import { Route, Routes } from "react-router-dom";





function App() {


  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />

    </>
  )
}

export default App
