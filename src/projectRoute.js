import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import About from "./components/About";
import Home from "./components/Home";
import Event from "./components/Event";
import Contact from "./components/Contact";
import Login from "./components/Login";


const projectRoute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/event" element={<Event/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);


export default projectRoute;