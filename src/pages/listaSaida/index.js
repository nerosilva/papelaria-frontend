import React, { useState, useEffect } from 'react';
import '../../pages/global.css'
import Logo from '../../assets/img/logo.jpg'
import Menu from '../../componentes/menu'
import { FiEdit, FiTrash, FiDelete, FiFilePlus } from "react-icons/fi";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Link } from 'react-router-dom';
import Head from '../../componentes/head';
import { useNavigate } from 'react-router-dom'
import api from '../../server/api';


export default function Listasaida(){
const [dados,setDados] = useState([]);
const [banco,setBanco] = useState([]);
const navigate=useNavigate();
    
    useEffect(()=>{
      mostrardados();
    },[])
    function formatReal(valor) {
      let valorFormatado = valor.replace(/\D/g, ''); 
      valorFormatado = valorFormatado.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3,$4'); 
       return `R$ ${valorFormatado}`;
    }

    function mostrardados()
    {
     api.get("/saida").then((res)=>{
      console.log(res.data.produtos)
        setBanco(res.data.produtos)
     })
    }
    function mostrarnome(idproduto){
      let nome= "";
//const listarproduto = JSON.parse(localStorage.getItem("cd-produto") || "[]");
       
      }
     const  apagar = (id) => {
      confirmAlert({
        title: 'Excluir Saida',
        message: 'Deseja Realmente excluir a saida desse Produto?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
              let dadosnovos = banco.filter(item => item.id !== id);
              //localStorage.setItem("cd-saidas", JSON.stringify(dadosnovos));
              //setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
              api.delete(`/saida/${id}`)
              .then(res => {
                if (res.status == 200) {
                  alert(`Você apagou  saida id:${id}`);  
                      mostrardados();
                        } else {
                  alert("houve um problemano servidor")
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
      <Head title='lista de Saida' />
      <Link to="/cadastrosaida" className='btn-novo'>Novo Cadastro</Link>
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
    </div>

   )

}

