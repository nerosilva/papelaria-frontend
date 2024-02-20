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
      setBanco(JSON.parse(localStorage.getItem("cd-saidas") || "[]"));
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
        title: 'Excluir Saida',
        message: 'Deseja Realmente excluir a saida desse Produto?',
        buttons: [
          {
            label: 'Sim',
            onClick: () => {
              let dadosnovos = banco.filter(item => item.id !== id);
              localStorage.setItem("cd-saidas", JSON.stringify(dadosnovos));
              setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
              alert(`Você apagou a saida id:${id}`);
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
      <Head title='lista de Produto' />
      <Link to="/cadastrosaida" className='btn-novo'>Novo Cadastro</Link>
      <table className="table">
        <tr>

                <th>Id</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th></th>
                <th></th>
            </tr>
            {
               banco.map((linha)=>{
                return(
                  <tr key={linha.toString()}>
                    <td>{linha.id}</td>    
                    <td>{mostrarnome(linha.id_produto)}</td>   
                    <td>{linha.quantidade}</td>    
                    <td>{formatReal(linha.valor_unitario)}</td>    
         
                    <td className='botoes'> 
                    <Link to={`/editarsaida/${linha.id}`}>
                      <FiEdit size={18} color='#3a5795'  /> 
                    </Link> 
                    </td>    
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

