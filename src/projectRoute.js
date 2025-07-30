import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";

const projectRoute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
    </BrowserRouter>
);

export default projectRoute;