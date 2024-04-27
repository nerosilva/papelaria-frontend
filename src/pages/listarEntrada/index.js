import React, { useState, useEffect } from 'react';
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from 'react-router-dom';
import Head from '../../componentes/head';
import '../../pages/global.css';
import api from '../../server/api';
import moment from 'moment/moment';




export default function Listarentrada() {
  const [dados, setDados] = useState([]);
  const [banco, setBanco] = useState([]);
  
  useEffect(() => {
    mostrardados();

  }, [])

  function mostrardados() {
    api.get('/entrada')
    .then(res => {
        console.log("Resposta da API:", res.data);
        console.log("Entradas:", res.data.entrada);
        setBanco(res.data.entrada);
    })
    .catch(error => {
        console.error("Erro ao buscar entradas:", error);
        setBanco([]); // Assegura que banco é um array vazio em caso de erro
    });
  }

function formatarData(data){
  return moment(data).format('DD/MM/YYYY');
}


  const apagar = (id) => {
    confirmAlert({
      title: 'Excluir Produto',
      message: 'Deseja realmente excluir essa Produto?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {

           // let dadosnovos = banco.filter(item => item.id !== id);
           // localStorage.setItem("cd-entradas", JSON.stringify(dadosnovos));
           // setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
           
           api.delete(`/entrada/${id}`)
           .then(res => {
             if (res.status == 200) {
               alert(`Você apagou a entrada id:${id}`);
               mostrardados();
             } else {
               alert("vish  deu B.O no servidor")
             }

           })
           . catch(error =>{
            console.error("erro ao excluir a entrada",error)
            alert("vish  deu B.O no servidor")
           })
           
  
          }

        },
        {
          label: 'Não',
          onClick: () => alert('Click No')
        }
      ]
    });
  };
   function mostrarnome(id_produto) {
    let nome = "";
    //const listarProduto = (JSON.parse(localStorage.getItem("cd-produto") || "[]"));
    //listarProduto.
    //  filter(value => value.id == id_produto).
     // map(value =>{

      //  nome = value.descricao;
      api.get(`/produtos/${id_produto}`)
      .then(res => {
    
        //setBanco(res.data.produtos)
        console.log(res.data.produto[0].descricao)
        nome = res.data.produto[0].descricao;
        return nome;
      
      })
      return nome;

    //  })

  }

  return (


    <div className="dashboard-container">


      <div className='menu'>
        
        <Menu />
      </div>
      <div className='Principal'>
      <Head title='listar Entrada' />
      <Link to="/cadastrentrada" className='btn-novo'>Novo Cadastro</Link>
      <table className="table">
        <tr>

                <th>Id</th>
                <th>Id Produto</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Data Saida</th>
                <th></th>
                
            </tr>
            {
               banco.map((linha)=>{
                return(
                  <tr key={linha.toString()}>
                    <td>{linha.id}</td>    
                    <td>{linha.id_produto}</td>   
                    <td>{linha.descricao}</td>   
                    <td>{linha.quantidade}</td>    
                    <td>{linha.valor_unitario}</td>    
                    <td>{linha.data_saida}</td>    
        
                    <td className='botoes'> 
                          <FiTrash 
                          size={18} 
                          color='red'
                          onClick={(e)=>apagar(linha.id)} 
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
