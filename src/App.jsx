import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App