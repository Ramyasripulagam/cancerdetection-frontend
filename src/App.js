import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcomepage from "./Welcomepage";
import Loginandsignup from "./Loginandsignup";
import Home from "./Home";
import Checkpage from "./Checkpage";
import Prevention from "./Prevention";
import About from "./About";
import Contact from "./Contact";
import Profileicon from "./Profileicon";
import Nav from "./Nav";
function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcomepage/>}/>
                <Route path="/loginandsignup" element={<Loginandsignup/>}/>    
                <Route path="/checkpage" element={<Checkpage/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/preventions" element={<Prevention/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/profile" element={<Profileicon/>}/>
                <Route path="/Nav" element={<Nav/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;