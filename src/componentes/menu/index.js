import './styles.css';
import {Link} from'react-router-dom';
export default function Menu() {
    return (


        <div>
            <a href='/dashboard'>
                <h1>Menu</h1>

            </a>
           
            <nav>

               <Link to="/listausuario" className='link'>Usuario</Link>
               <Link to="/listaproduto" className='link'>Produto</Link>
               <Link to="/listarentrada" className='link'>Entrada </Link>
               <Link to="/listaestoque" className='link'>Estoque</Link>
               <Link to="/listasaida" className='link'>Saida</Link>

            </nav>
        </div>

    )

}