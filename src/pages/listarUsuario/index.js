import React, { useState, useEffect } from 'react';
import '../../pages/global.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componetes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import Head from '../../componetes/Head';
import { useNavigate } from 'react-router-dom';


export default function Listausuario() {
  const [dados, setDados] = useState([]);
  const [banco, setBanco] = useState([]);
  const navigate = useNavigate();


  // const dados = [

  // { id: 1, nome: "Nero", email: "Jaldevan2014@gmail.com" },
  // { id: 2, nome: "Silva", email: "Nerinho0007@gmail.com" },
  // { id: 3, nome: "Caue", email: "Cauenero007@gmail.com" },

  // ]
  useEffect(() => {
    mostrardados();
  }, [])


  function mostrardados() {
    setBanco(JSON.parse(localStorage.getItem("cd-usuarios") || "[]"));
  
  }

  const apagar = (id) => {
    confirmAlert({
      title: 'Excluir Usuário',
      message: 'Deseja realmente excluir esse usuário?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            let dadosnovos = banco.filter(item => item.id !== id);
            localStorage.setItem("cd-usuarios", JSON.stringify(dadosnovos));
            setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
            alert(`Você apagou o usuário id:${id}`);
          }

        },
        {
          label: 'Não',
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
        <Head title='lista de Usuario' />
        <Link to="/cadastrousuario" className='btn-novo'>Novo Cadastro</Link>
        <table className="table">
          <tr>

            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th></th>
            <th></th>

          </tr>
          {
            banco.map((usu) => {
              return (
                <tr key={usu.toString}>
                  <td>{usu.id}</td>
                  <td>{usu.nome}</td>
                  <td>{usu.email}</td>
                  <td className='botoes'>
                    <Link to={`/editarusuario/${usu.id}`}>
                      <FiEdit size={18} color='#3a5795' />
                    </Link>
                  </td>
                  <td className='botoes'>
                    <FiTrash
                      size={18}
                      color='red'
                      onClick={(e) => apagar(usu.id)}
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