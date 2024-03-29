import React, { useState, useEffect } from 'react';
import '../../pages/global.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import Head from '../../componentes/head';
import { useNavigate } from 'react-router-dom';


export default function Listaproduto() {
 const [banco,setBanco] = useState([]);
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
    setBanco(JSON.parse(localStorage.getItem("cd-produto") || "[]"));
  
  }

  const apagar = (id) => {
    confirmAlert({
      title: 'Excluir Produtos',
      message: 'Deseja realmente excluir esse produto?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            let dadosnovos = banco.filter(item => item.id !== id);
            localStorage.setItem("cd-produto", JSON.stringify(dadosnovos));
            setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
            alert(`Você apagou o produto id:${id}`);
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
        <Head title='lista de Produto' />
        <Link to="/cadastroproduto" className='btn-novo'>Novo Cadastro</Link>
        <table className="table">
          <tr>

            <th>Id</th>
            <th>Status</th>
            <th>Descriçao</th>
            <th>Estoque_maximo</th>
            <th>Estoque_minimo</th>
            <th></th>
            <th></th>

          </tr>
          {
            banco.map((pro) => {
              return (
                <tr key={pro.toString}>
                  <td>{pro.id}</td>
                  <td>{pro.status}</td>
                  <td>{pro.descricao}</td>
                  <td>{pro.estoque_maximo}</td>
                  <td>{pro.estoque_minimo}</td>
                  <td className='botoes'>
                    <Link to={`/editarproduto/${pro.id}`}>
                      <FiEdit size={18} color='#3a5795' />
                    </Link>
                  </td>
                  <td className='botoes'>
                    <FiTrash
                      size={18}
                      color='red'
                      onClick={(e) => apagar(pro.id)}
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