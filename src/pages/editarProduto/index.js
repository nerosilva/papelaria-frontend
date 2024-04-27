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
  const { id } = useParams();
  const navigate = useNavigate();
  const[status, setStatus]= useState("");
  const[descricao, setDescricao]= useState("");
  const[estoque_minimo, setEstoque_minimo]= useState("");
  const[estoque_maximo, setEstoque_maximo]= useState("");
  const produto={
    id,
    status,
    descricao,
    estoque_minimo,
    estoque_maximo
  };

  useEffect(() => {
    mostrardados(id);
  }, [id]);

  async function mostrardados(id) {
    api.get(`/produto/${id}`)
      .then(res => {
        if (res.status === 200) {
          setStatus(res.data.produto[0].status);
          setDescricao(res.data.produto[0].descricao);
          setEstoque_minimo(res.data.produto[0].estoque_minimo);
          setEstoque_maximo(res.data.produto[0].estoque_maximo);
         
        }
      })
    // try {
    //   const response = await api.get(`/produto/${id}`);
    //   const produtoData = response.data.produto[0];
    //   if (produtoData) {
    //     setProduto(produtoData);
    //   } else {
    //     console.error('Produto não encontrado');
    //   }
    // } catch (error) {
    //   console.error('Erro ao obter dados do produto:', error);
    // }
  }

  function salvardados(e) {
    e.preventDefault();
    api.put('/produto', produto,
        { headers: { "Content-Type": "application/json" } })
        .then(function (response) {
          console.log(response.data)
          alert(response.data.mensagem);
          navigate('/listaproduto');
        })

    // const camposVazios = Object.values(produto).filter(valor => valor === '').length;
    // if (camposVazios === 0) {
    //   api.put("/produto", produto).then((res) => {
    //     if (res.status === 200) {
    //       alert(res.data.mensagem);
    //       navigate('/listaproduto');
    //     } else if (res.status === 500) {
    //       alert(res.data.error);
    //     }
    //   });
    // } else {
    //   alert("Verifique! Há campos vazios!");
    // }
  }

  

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Editar Produto" />
        <div className='form-container'>
          <form className='form-cadastro' onSubmit={salvardados}>
            <input
              type='text'
              name="status"
              value={status}
              onChange={e =>setStatus(e.target.value)}
              placeholder='Digite o nome do produto'
            />
            <input
              type='text'
              name="descricao"
              value={descricao}
              onChange={e =>setDescricao(e.target.value)}
              placeholder='Digite a descrição'
            />
            <input
              type='number'
              name="estoque_minimo"
              value={estoque_minimo}
              onChange={e =>setEstoque_minimo(e.target.value)}
              placeholder='Digite o estoque mínimo'
            />
            <input
              type='number'
              name="estoque_maximo"
              value={estoque_maximo}
              onChange={e =>setEstoque_maximo(e.target.value)}
              placeholder='Digite o estoque máximo'
            />
            <div className='acao'>
              <button className='btn-save'>
                <FaSave />
                Salvar
              </button>
              <button className='btn-cancel'>
                <MdCancel />
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
