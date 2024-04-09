import React, { useState, useEffect } from 'react';

import '../../pages/global.css';
import Menu from '../../componentes/menu';
import { FiFilePlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../../componentes/head';
import api from '../../server/api';


export default function Editarprodutos() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [descricao, setDescricao] = useState("");
  const [estoque_minimo, setEstoque_maximo] = useState("");
  const [estoque_maximo, setEstoque_minimo] = useState([]);
  const [banco, setBanco] = useState([]);

  const produto = {
    id,
    status,
    descricao,
    estoque_minimo,
    estoque_maximo,
  }
  useEffect(() => {

    mostrardados(id);

  }, [])
  async function mostrardados(idu) {
    api.get(`/produto/${id}`).then((res)=>{
      setStatus(res.data.produto[0].status);
      setDescricao(res.data.produto[0].descricao);
      setEstoque_minimo(res.data.produto[0].estoque_minimo);
      setEstoque_maximo(res.data.produto[0].estoque_maximo);

    })
  }


  function salvardados(e) {
    e.preventDefault();

    let i = 0;
    if (status == "")
      
      i++;
    
    else if (descricao == "")
      i++;
    else if (estoque_minimo == "")
      i++;
    else if (estoque_maximo == "")
      i++;
    if (i == 0) {
      
     api.put("/produto",produto).then((res)=>{
      if(res.status===200){  
      alert(res.data.mensagem);
      navigate('/listaproduto');
      }
      if(res.status===500){
        alert(res.data.error);
      }
      
     })

    } else {
      alert("Verifique! Há campos vazios!")
    }
  }

  return (
    <div className="dashboard-container">

      <div className='menu'>

        <Menu />
      </div>
      <div className='principal'>
        <Head title="Editar Produto" />
        <div className='form-container'>
          <form className='form-cadastro' onSubmit={salvardados} >
            <input
              type='text'
              value={status}
              onChange={e => setStatus(e.target.value)}
              placeholder='Digite o nome do produto'
            />
            <input
              type='text'
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              placeholder='Digite a descricao'
            />
            <input
              type='number'
              value={estoque_minimo}
              onChange={e => setEstoque_maximo(e.target.value)}
              placeholder='Digite a senha '
            />
            <input
              type='number'
              value={estoque_maximo}
              onChange={e => setEstoque_minimo(e.target.value)}
              placeholder='Digite a senha '
            />

            <div className='acao'>
              <button className='btn-save'>
                <FaSave />
                Salvar
              </button>
              <button className='btn-cancel'>
                <MdCancel />
                Cancelar</button>
            </div>
          </form>

        </div>
      </div>
    </div>

  )

}