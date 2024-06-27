import React from 'react';
import './styles.css'; // Importando o arquivo CSS local
import { FaWhatsapp } from 'react-icons/fa'; // Importando o ícone do WhatsApp
import Logo from '../../assets/img/images.png'; // Importando o logo
import Menu from '../../componentes/menu'; // Importando o componente de menu
import { Link } from 'react-router-dom';
import ClientImage from '../../assets/img/cliente.png'; // Importando a imagem do cliente
import FornecedorImage from '../../assets/img/fornecedor.png'; // Importando a imagem do fornecedor
import ProdutosImage from '../../assets/img/produtos.png'; // Importando a imagem dos produtos
import EntradaImage from '../../assets/img/Entrada.png'; // Importando a imagem da entrada
import EstoqueImage from '../../assets/img/Estoque.png'; // Importando a imagem do estoque
import SaidaImage from '../../assets/img/Saida.png'; // Importando a imagem do sair

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="menu">
        <Menu />
      </div>
      <div className="Principal">
        <h1>Digital_Works</h1>
        {/* Container para o conteúdo principal */}
        <div className="content-container">
          {/* Container para as imagens */}
          <div className="image-container">
            {/* Link para lista de produtos */}
            <Link to="/listacliente">
              <img src={ClientImage} alt="Client" className="client-image" />
            </Link>

            <Link to="/listafornecedor">
              <img src={FornecedorImage} alt="Fornecedor" className="fornecedor-image" />
            </Link>

            <Link to="/listaproduto">
              <img src={ProdutosImage} alt="Produtos" className="produtos-image" />
            </Link>

            <Link to="/listarentrada">
              <img src={EntradaImage} alt="Entrada" className="entrada-image" />
            </Link>

            <Link to="/listaestoque">
              <img src={EstoqueImage} alt="Estoque" className="estoque-image" />
            </Link>

            <Link to="/listasaida">
              <img src={SaidaImage} alt="Saída" className="saida-image" />
            </Link>
          </div>

          {/* Container para o link do WhatsApp */}
          <div className="text-container">
            <a
              href="https://wa.me/55 (63)99278-0893?text=Ol%C3%A1+seja+vem+vindos"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
