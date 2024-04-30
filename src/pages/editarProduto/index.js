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
  const [status, setStatus] = useState("");
  const [descricao, setDescricao] = useState("");
  const [estoque_minimo, setEstoque_minimo] = useState("");
  const [estoque_maximo, setEstoque_maximo] = useState("");

  useEffect(() => {
    mostrardados(id);
  }, [id]);

  async function mostrardados(id) {
    try {
      const response = await api.get(`/produto/${id}`);
      if (response.status === 200) {
        const produtoData = response.data.produto[0];
        if (produtoData) {
          setStatus(produtoData.status || "");
          setDescricao(produtoData.descricao || "");
          setEstoque_minimo(produtoData.estoque_minimo || "");
          setEstoque_maximo(produtoData.estoque_maximo || "");
        } else {
          console.error('Produto não encontrado');
        }
      } else {
        console.error('Erro ao obter dados do produto:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao obter dados do produto:', error);
    }
  }

  function salvardados(e) {
    e.preventDefault();
    const produto = {
      id,
      status,
      descricao,
      estoque_minimo,
      estoque_maximo
    };

    api.put('/produto', produto, { headers: { "Content-Type": "application/json" } })
      .then(function (response) {
        console.log(response.data)
        alert(response.data.mensagem);
        navigate('/listaproduto');
      })
      .catch(error => {
        console.error('Erro ao salvar dados do produto:', error);
      });
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
              onChange={e => setStatus(e.target.value)}
              placeholder='Digite o nome do produto'
            />
            <input
              type='text'
              name="descricao"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              placeholder='Digite a descrição'
            />
            <input
              type='number'
              name="estoque_minimo"
              value={estoque_minimo}
              onChange={e => setEstoque_minimo(e.target.value)}
              placeholder='Digite o estoque mínimo'
            />
            <input
              type='number'
              name="estoque_maximo"
              value={estoque_maximo}
              onChange={e => setEstoque_maximo(e.target.value)}
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
