import '../../pages/global.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from '../../componentes/head';
import Menu from '../../componentes/menu';
import { FaSave } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';


export default function CadastroEntrada() {

  const navigate = useNavigate();
  const [id_produto, setId_produto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valor_unitario, setValor_Unitario] = useState('');
  const [data_entrada, setData_Entrada] = useState('');
  const [produto, setProduto] = useState([]);

  const Entrada={
    id:Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
    id_produto,
    quantidade,
    valor_unitario,
    data_entrada,
  };
  const dadosestoque={
    id:Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
    id_produto,
    quantidade,
    valor_unitario,
    
  };

  function alterarEstoque(idproduto, quantidade, valor) {
    const estoque = JSON.parse(localStorage.getItem("cd-estoques") || "[]");
  
 
    const produtoExistente = estoque.find(item => item.id_produto === idproduto);
  
    if (produtoExistente) {

      let dadosnovos = estoque.filter(item => item.id_produto !== idproduto);
      const updateestoque={
                    id:produtoExistente.id,
                    id_produto:produtoExistente.id_produto,
                    qtde:produtoExistente.qtde+quantidade,
                    valor_unitario:valor
         }
         dadosnovos.push(updateestoque);
         localStorage.setItem("cd-estoques", JSON.stringify(dadosnovos));
    } else {
    

      estoque.push(dadosestoque);
    }
  
    
    localStorage.setItem("cd-estoques", JSON.stringify(estoque));
  }

  useEffect(() => {
    mostraproduto();
  }, [])

  function salvardados(e) {
    e.preventDefault();
    let i = 0;
    if (id_produto === '') i++;
    else if (quantidade === '') i++;
    else if (valor_unitario === '' || valor_unitario === 0) i++;
    else if (data_entrada === '' || data_entrada === 0) i++;
    if (i === 0) {

      const estoque = JSON.parse(localStorage.getItem('cd-estoques') || '[]');
      const banco = JSON.parse(localStorage.getItem('cd-entradas') || '[]');
      banco.push(Entrada);
      localStorage.setItem('cd-entradas', JSON.stringify(banco));
     alterarEstoque(id_produto,quantidade,valor_unitario)
      alert('Entrada salva com sucesso');
      navigate('/listaentrada');
    } else {
      alert('Verifique! Há campos vazios!');
    }

  }
  function mostraproduto() {
    setProduto(JSON.parse(localStorage.getItem("cd-produto") || "[]"));
  }

  return (
    <div className="dashboard-container">
      <div className="menu">
        <h1>Menu</h1>
        <Menu />
      </div>
      <div className="Principal">
        <Head title="Cadastro Entrada" />
        <div className="form-container">
          <form className="form-cadastro" onSubmit={salvardados}>
   

            <select value={id_produto} onChange={(e) => setId_produto(e.target.value)}>

              <option>selecione um  produto</option>
              {


                produto.map((linha) => {
                  return (
                    <option value={linha.id}>{linha.descricao}</option>
                  )

                })
              }


            </select>

            <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} placeholder="Digite a quantidade do produto" />
            <input type="number" value={valor_unitario} onChange={(e) => setValor_Unitario(e.target.value)} placeholder="Digite o valor unitário do produto" />
            <input type="date" value={data_entrada} onChange={(e) => setData_Entrada(e.target.value)} />
            <div>
              <button type="submit" className="btn-save">
                <FaSave />
                Salvar
              </button>
              <button type="button" className="btn-cancel">
                <MdOutlineCancel />
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


