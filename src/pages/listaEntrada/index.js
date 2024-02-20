import React, { useState, useEffect } from 'react';
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import Head from '../../componentes/head';
import '../../pages/global.css';
export default function Listaentrada() {
  const [dados, setDados] = useState([]);
  const [banco, setBanco] = useState([]);

  useEffect(() => {
    mostrardados();

  }, [])

  function mostrardados() {
    setBanco(JSON.parse(localStorage.getItem("cd-entradas") || "[]"));
  }


  const apagar = (id) => {
    confirmAlert({
      title: 'Excluir Entrada',
      message: 'Deseja realmente excluir essa Entrada?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            let dadosnovos = banco.filter(item => item.id !== id);
            localStorage.setItem("cd-entradas", JSON.stringify(dadosnovos));
            setBanco(dadosnovos);
            alert(`Você apagou a entrada  id:${id}`);
          }

        },
        {
          label: 'Não',
          onClick: () => alert('Click No')
        }
      ]
    });
  };
  function mostrarnome(idproduto){
    console.log("idddd"+idproduto);
    let nome= "";
     const listarproduto = JSON.parse(localStorage.getItem("cd-produto") || "[]");
     listarproduto.
                  filter(value => value.id ==idproduto).
                  map(value => {
                   
                  nome=value.descricao;
  
                      
  
                })
          return nome;
          
    }

  return (

    <div className="dashboard-container">


      <div className='menu'>
        <Menu />
      </div>
      <div className='Principal'>
        <Head title="Lista de Entrada" />

        <Link to="/cadastroentrada" className='btn-novo'>Novo Cadastro</Link>

        <table className="table">
          <tr>
            <th>Id</th>
            <th>Id produto</th>
            <th>quantidade</th>
            <th>valor unitário</th>
            <th>data entrada</th>
            <th></th>
          </tr>
          {
            banco.map((linha) => {
              return (
                <tr key={linha.toString()}>
                  <td>{linha.id}</td>
                  <td>{mostrarnome(linha.id_produto)}</td>
                  <td>{linha.quantidade}</td>
                  <td>{linha.valor_unitario}</td>
                  <td>{linha.data_entrada}</td>
                  <td className='botoes'>
                    <Link to={`/editarentrada/${linha.id}`}>
                      <FiEdit size={18} color='#3a5795' />
                    </Link>
                  </td>
                  <td className='botoes'>
                    <FiTrash
                      size={18}
                      color='red'
                      onClick={(e) => apagar(linha.id)}
                    />
                  </td>

                </tr>
              )
            })
          }
        </table>
      </div>
    </div >

  )

}

