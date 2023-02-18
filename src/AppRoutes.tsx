import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { Carrinho } from "./pages/Carrinho";
import { Catalogo } from "./pages/Catalogo";

export function AppRoutes(){

    //Na versão 6 do react-router-dom houveram alterações na sua utilização, ver a documentação ao usar versões anteriores

    return (
        <Router>
            <Routes>
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </Router>
    )
    
}