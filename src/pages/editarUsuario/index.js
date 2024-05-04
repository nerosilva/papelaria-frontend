import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componentes/menu';
import { FiFilePlus } from "react-icons/fi"; // Parece não ser usado, considere remover se não for necessário.
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../../componentes/head';
import api from '../../server/api';

export default function Editarusuario() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    if (id) {
      mostrardados(id);
    }
  }, [id]);

  async function mostrardados(idu) {
    api.get(`/usuario/${idu}`)
      .then(res => {
        console.log(res.data)
        //if (res.status === 200 && res.data.usuario && res.data.usuario.length > 0) {
          setNome(res.data.usuario.nome);
          setEmail(res.data.usuario.email);
          setSenha(res.data.usuario.senha);
        })

    //  .catch(err => console.error("Falha ao buscar dados do usuário", err));
  }

  function salvardados(e) {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert("Verifique! Há campos vazios!");
      return;
    }

    api.put('/usuario', { id, nome, email, senha },
      { headers: { "Content-Type": "application/json" } })
      .then(function (response) {
        alert(response.data.mensagem);
        navigate('/listausuario');
      })
      .catch(err => {
        console.error("Falha ao salvar os dados do usuário", err);
        alert("Erro ao salvar os dados!");
      });
  }

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='Principal'>
        <Head title="Editar Usuário" />
        <div className='form-container'>
          <form className='form-cadastro' onSubmit={salvardados} >
            <input
              type='text'
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder='Digite o nome do usuário'
            />
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Digite o email'
            />
            <input
              type='password'
              value={senha}
              onChange={e => setSenha(e.target.value)}
              placeholder='Digite a senha'
            />
            <div className='acao'>
              <button className='btn-save'>
                <FaSave />
                Salvar
              </button>
              <button type="button" className='btn-cancel' onClick={() => navigate('/listausuario')}>
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
