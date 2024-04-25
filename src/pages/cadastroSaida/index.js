import React, { useEffect, useState } from 'react';

import { FiSave, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Menu from '../../componentes/menu';
import Head from '../../componentes/head';
import api from '../../server/api';


export default function CadastroSaida() {
  const navigate = useNavigate();
  const [idProduto, setIdProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [dataSaida, setDataSaida] = useState('');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function loadProdutos() {
      try {
        const response = await api.get('/produto');
        setProdutos(response.data.produto);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error.message);
      }
    }
    loadProdutos();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('/saida', {
        id_produto: idProduto,
        quantidade: quantidade,
        valor_unitario: valorUnitario,
        data_saida: dataSaida
      });

      alert(response.data.mensagem);
      navigate('/listasaida');
    } catch (error) {
      console.error('Erro ao cadastrar saída:', error.message);
      alert('Erro ao cadastrar saída. Por favor, tente novamente.');
    }
  }

  return (
    <div className="dashboard-container">
      <Menu />
      <div className="principal">
        <Head title="Cadastro de Saída" />
        <div className="form-container">
          <form className="form-cadastro" onSubmit={handleSubmit}>
            <select value={idProduto} onChange={(e) => setIdProduto(e.target.value)}>
              <option value="">Selecione um produto</option>
              {produtos.map((produto) => (
                <option key={produto.id} value={produto.id}>
                  {produto.descricao}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              placeholder="Digite a quantidade"
            />
            <input
              type="number"
              value={valorUnitario}
              onChange={(e) => setValorUnitario(e.target.value)}
              placeholder="Digite o valor unitário"
            />
            <input
              type="date"
              value={dataSaida}
              onChange={(e) => setDataSaida(e.target.value)}
              placeholder="Data de saída"
            />
            <div className="acao">
              <button type="submit" className="btn-save">
                <FiSave />
                Salvar
              </button>
              <button type="button" className="btn-cancel" onClick={() => navigate('/listarsaida')}>
                <FiX />
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}