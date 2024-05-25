import './styles.css';
import { FaWhatsapp } from 'react-icons/fa';  // Importando o ícone do WhatsApp
import Logo from '../../assets/img/images.png';
import Menu from '../../componentes/menu';
import { Link } from 'react-router-dom';
import ClientImage from '../../assets/img/cliente.png';  // Import client image
import FornecedorImage from '../../assets/img/fornecedor.png'; // Import  fornecedor image
import ProdutosImage from '../../assets/img/produtos.png'; // Import  produtos image
import EntradaImage from '../../assets/img/Entrada.png'; // Import entrada image
import EstoqueImage from '../../assets/img/Estoque.png'; // Import estoque image

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='Principal'>
        <h1>Digital_Works</h1> {/* Movido para estar no topo da seção Principal */}
        <div className="content-container">
          <div className="image-container">

            <Link to="/listaproduto"  >
              <img src={ClientImage} alt="Client" className="client-image" /> {/* Adicionando a imagem do cliente */}
            </Link>

            <Link to="/listaproduto" >
              <img src={FornecedorImage} alt="Fornecedor" className="fornecedor-image" />{/* Adicionando a imagem do fornecedor */}
            </Link>

            <Link to="/listaproduto" >
              <img src={ProdutosImage} alt="Produtos" className="produtos-image" />{/* Adicionando a imagem do produtos */}
            </Link>

            <Link to="/listarentrada">
              <img src={EntradaImage} alt="Entrada" className="entrada-image" />{/* Adicionando a imagem do entrada */}
            </Link>

            <Link to="/listaestoque">
              <img src={EstoqueImage} alt="Estoque" className="estoque-image" />{/* Adicionando a imagem do estoque */}
            </Link>

          </div>
          <div className="text-container">
            <a
              href="https://wa.me/55 (63)99278-0893?text=Ol%C3%A1+seja+vem+vindos"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={32} />  {/* Tamanho do ícone */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
