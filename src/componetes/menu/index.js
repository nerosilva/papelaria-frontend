import './styles.css';
import {Link} from'react-router-dom';
export default function Menu() {
    return (


        <div>
            <h1>Menu007</h1>
            <nav>

               <Link to="/listaUsuario" className='link'>Usuario</Link>
               <Link to="/Produto" className='link'>Produto</Link>

            </nav>
        </div>

    )

}