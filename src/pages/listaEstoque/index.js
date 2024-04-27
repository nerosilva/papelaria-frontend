import React, { useState, useEffect } from 'react';
import '../../pages/global.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import Head from '../../componentes/head';
import { useNavigate } from 'react-router-dom'
import api from '../../server/api';



export default function Listaestoque(){
const [dados,setDados] = useState([]);
const [banco,setBanco] = useState([]);
const navigate=useNavigate();
    
    useEffect(()=>{
      mostrardados();
    },[])
    function formatReal(valor) {
      let valorFormatado = valor.replace(/\D/g, ''); // Remove caracteres não numéricos
      valorFormatado = valorFormatado.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3,$4'); // Formata com pontos e vírgulas
      return `R$ ${valorFormatado}`;
    }

    function mostrardados()
    {
     api.get("/estoque")
     .then((res)=>{
      setBanco(res.data.estoque);
     })
    }
    function mostrarnome(idproduto){
      let nome= "";
       const listarproduto = JSON.parse(localStorage.getItem("cd-produto") || "[]");
       listarproduto.
                    filter(value => value.id ==idproduto).
                    map(value => {
                     
                    nome=value.descricao;
                        
                  })
            return nome;
            
      }
     const  apagar = (id) => {
      confirmAlert({
        title: 'Excluir Estoque',
        message: 'Deseja Realmente excluir o Estoque desse Produto?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
              api.get(`/estoque/${id}`)
              .then((res)=>{
               if(res.status===200){
                alert(res.data.mensagem)
               }
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
  

   return(
    <div className="dashboard-container">

      <div className='menu'>

        <Menu />

      </div>
      <div className='Principal'>
        <Head title='lista de Estoque' />
        <Link to="/cadastroproduto" className='btn-novo'>Novo Cadastro</Link>
        <table className="table">
          
           <tr>
                <th>Id</th>
                <th>Id_Produto</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                
                <th></th>
            </tr>
            {
               banco.map((linha)=>{
                return(
                  <tr key={linha.toString()}>
                    <td>{linha.id}</td>    
                    <td>{(linha.id_produto)}</td>   
                    <td>{(linha.produto)}</td>   
                    <td>{linha.quantidade}</td>    
                    <td>{(linha.valor_unitario)}</td>    
         
        
                  </tr>  
                )
               }) 
            }

        </table>
        </div>
    </div>

   )

}