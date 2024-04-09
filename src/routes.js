import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Logon from './pages/logon';
import Dashboard from './pages/dashboard';

import Listausuario from './pages/listarUsuario';
import Listarentrada from './pages/listarEntrada';
import Listaproduto from './pages/listaProduto';
import Listasaida from './pages/listaSaida';
import Listaestoque from './pages/listaEstoque';

import Cadastrousuario from './pages/cadastroUsuario';
import Cadastroproduto from './pages/cadastroProduto';
import CadastroEntrada from './pages/cadastroEntrada';
import Cadastrosaida from './pages/cadastroSaida';

import Editarusuario from './pages/editarUsuario';
import Editarproduto from './pages/editarProduto';



export default function Rotas() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" exact element={<Logon />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/listausuario" element={<Listausuario />} />
                <Route path="/listaproduto" element={<Listaproduto />} />
                <Route path="/listarentrada" element={<Listarentrada />} />
                <Route path="/listasaida" element={<Listasaida />} />
                <Route path="/listaestoque" element={<Listaestoque />} />

                <Route path="/cadastrousuario" element={<Cadastrousuario />} />
                <Route path="/cadastroproduto" element={<Cadastroproduto />} />
                <Route path="/cadastroentrada" element={<CadastroEntrada />} />
                <Route path="/cadastrosaida" element={<Cadastrosaida />} />

                <Route path="/editarusuario/:id" element={<Editarusuario />} />
                <Route path="/editarproduto/:id" element={<Editarproduto />} />

            </Routes>

        </BrowserRouter>



    )
}