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
import api from '../../server/api';
import { FaWhatsapp } from 'react-icons/fa';  // Importando o ícone do WhatsApp



export default function Listausuario() {
  const [dados, setDados] = useState([]);
  const [banco, setBanco] = useState([]);
  const navigate = useNavigate();


  // const dados = [

  // { id: 1, nome: "Nero", email: "Jaldevan2014@gmail.com" },
  // { id: 2, nome: "Silva", email: "Nerinho0007@gmail.com" },
  // { id: 3, nome: "Caue", email: "Cauenero007@gmail.com" },

  // ]
  useEffect(() => {
    mostrardados();
    consultarCEP("77807270")
      .then(resultado => {
        console.log('Dados do CEP:', resultado);
      });
  }, [])


  async function consultarCEP(cep) {

    // Substitua a URL base pela URL específica do ViaCEP com o CEP desejado
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Utilizando o método fetch para fazer a requisição GET
    return fetch(url)
      .then(response => {
        // Verifica se a requisição foi bem-sucedida (status 2xx)
        if (!response.ok) {
          throw new Error(`Erro ao consultar o CEP: ${response.status}`);
        }

        // Parseia o JSON da resposta
        return response.json();
      })
      .then(data => {
        // Retorna os dados do CEP
        return data;
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }


  function mostrardados() {
    //setBanco(JSON.parse(localStorage.getItem("cd-usuarios") || "[]"));
    api.get('/usuario')

      .then(res => {
        console.log(res.data.usuarios)
        setBanco(res.data.usuarios)
      })
  }

  const apagar = (id) => {
    confirmAlert({
      title: 'Excluir Usuário',
      message: 'Deseja realmente excluir esse usuário?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            //let dadosnovos = banco.filter(item => item.id !== id);
            //localStorage.setItem("cd-usuarios", JSON.stringify(dadosnovos));
            //setBanco(dadosnovos); // Atualiza o estado com os dados filtrados
            api.delete(`/usuario/${id}`)
              .then(res => {
                if (res.status == 200) {
                  alert(`Você apagou o usuário id:${id}`);  
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

  return (
    <div className="dashboard-container">

      <div className='menu'>

        <Menu />

      </div>
      <div className='Principal'>
        <Head title='lista de Usuario' />
        <Link to="/cadastrousuario" className='btn-novo'>Novo Cadastro</Link>
        <table className="table">
          <tr>

            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th></th>
            <th></th>

          </tr>
          {
            banco.map((usu) => {
              return (
                <tr key={usu.toString}>
                  <td>{usu.id}</td>
                  <td>{usu.nome}</td>
                  <td>{usu.email}</td>
                  <td className='botoes'>
                    <Link to={`/editarusuario/${usu.id}`}>
                      <FiEdit size={18} color='#3a5795' />
                    </Link>
                  </td>
                  <td className='botoes'>
                    <FiTrash
                      size={18}
                      color='red'
                      onClick={(e) => apagar(usu.id)}
                    />
                  </td>

                </tr>
              )
            })

          }

        </table>
      </div>
      <div className="text-container">
            <a
              href="https://wa.me/55 (63)99278-0893?text=Ol%C3%A1+seja+vem+vindos"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={32} />  {/* Tamanho do ícone */}
            </a>
          </div>

    </div>

  )

}