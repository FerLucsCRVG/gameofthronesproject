import { BrowserRouter, Route, Routes} from "react-router-dom";


// Pages

import Hero from "./pages/Hero";
import SessionPhotos from "./pages/SessionPhotos";
import SessionCharacters from "./pages/SessionCharacters";
import Character from "./pages/Character";
import SessionHouse from "./pages/SessionHouse";
import House from "./pages/House";
import Error404 from "./pages/Error404";



const Paths = () =>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hero/>} />
                    <Route path="/fotos" element={<SessionPhotos/>} />
                    <Route path="/personagens" element={<SessionCharacters/>} />
                    <Route path="/casas" element={<SessionHouse/>} />
                    <Route path="/personagem/:idPersonagem" element={<Character/>} />
                    <Route path="/casa/:idCasa" element={<House/>} />
                    <Route path="*" element={<Error404/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Paths;