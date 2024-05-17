import './styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CiLogout } from "react-icons/ci";
import {
    faUser, faBox, faTruckMoving, faWarehouse, faArrowRight, faArrowLeft
} from '@fortawesome/free-solid-svg-icons';


export default function Menu() {
    return (
        <div>
            <a className='menu1' href='/dashboard'>
                <h1 className='menu1'>Menu</h1>
            </a>
            <nav>
                <Link to="/listausuario" className='link'><FontAwesomeIcon icon={faUser} /> Usuário</Link>
                <Link to="/listaproduto" className='link'><FontAwesomeIcon icon={faBox} /> Cliente</Link>
                <Link to="/listaproduto" className='link'><FontAwesomeIcon icon={faTruckMoving} /> Fornecedor</Link>
                <Link to="/listaproduto" className='link'><FontAwesomeIcon icon={faBox} /> Produto</Link>
                <Link to="/listarentrada" className='link'><FontAwesomeIcon icon={faArrowRight} /> Entrada</Link>
                <Link to="/listaestoque" className='link'><FontAwesomeIcon icon={faWarehouse} /> Estoque</Link>
                {/* Adicionando o ícone de logout */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Link to="/logout" className='link'><CiLogout /> Saida</Link>
            </nav>
        </div>
    );
}
