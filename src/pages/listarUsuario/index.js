import '../../pages/global.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componetes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import Head from '../../componetes/Head';

export default function Listausuario() {

  const dados = [

    { id: 1, nome: "Nero", email: "Jaldevan2014@gmail.com" },
    { id: 2, nome: "Silva", email: "Nerinho0007@gmail.com" },
    { id: 3, nome: "Caue", email: "Cauenero007@gmail.com" },
  ]
  
  const apagar = (id) => {
    confirmAlert({
      title: 'Excluir Usuario',
      message: 'Deseja realmente excluir esse Usuario.',
      buttons: [
        {
          label: 'Sim',
          onClick: () => alert(` Voce apagou o usuario id:${id}`)
        },
        {
          label: 'Nao',
          onClick: () => alert('Click No')
        }
      ]
    });
  };

  return (
    <div className="dashboard-container">
      
      <div className='menu'>

        <Menu />

      </div>
      <div className='Principal'>
      <Head title='lista de Usuario'/>
        <Link className='btn-novo'>Novo Cadastro</Link>
        <table className="table">
          <tr>

            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th></th>
            <th></th>

          </tr>
          {
            dados.map((usu) => {
              return (
                <tr key={usu.toString}>
                  <td>{usu.id}</td>
                  <td>{usu.nome}</td>
                  <td>{usu.email}</td>
                  
                  <td className='botoes'>
                    <FiEdit size={18} color='#3a5795' />
                  </td>
                  <td className='botoes'>
                    <FiTrash 
                    size={18} 
                    color='red'
                    onClick={(e)=>apagar(usu.id)}
                    />
                  </td>

                </tr>
              )
            })

          }

        </table>
      </div>

    </div>

  )

}