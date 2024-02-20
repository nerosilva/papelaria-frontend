import React, { useState } from 'react';

import '../../pages/global.css'
import Menu from '../../componentes/menu'
import { useNavigate } from 'react-router-dom';
import Head from '../../componentes/head';
import { MdOutlineCancel } from "react-icons/md";
import {  FiSave} from "react-icons/fi";


export default function Cadastrosaida() {
    const navigate = useNavigate();

    const [id_produto, setId_produto] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor_unitario, setValor_Unitario] = useState("");
    const [data_saida, setData_Saida] = useState("");

    const Saida = {
        id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
        id_produto,
        quantidade,
        valor_unitario,
        data_saida
    };

    function salvarDados(e) {
        e.preventDefault();
        let i = 0;
        if (id_produto === "")
            i++;
        else if (quantidade === "")
            i++;
        else if (valor_unitario === "" || valor_unitario === 0)
            i++;
        else if (data_saida === "" || data_saida === 0)
            i++;
        if (i === 0) {
            const banco = JSON.parse(localStorage.getItem("cd-saidas") || "[]");
            banco.push(Saida);
            localStorage.setItem("cd-saidas", JSON.stringify(banco));
            
            alert("Saída salva com sucesso");
            navigate('/listasaida');
        } else {
            alert("Verifique! Há campos vazios!");
        }
    }

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <h1>Menu</h1>
                <Menu />
            </div>
            <div className='principal'>
                <Head title="Cadastro de Saída" />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvarDados}>
                        <input type='text' value={id_produto} onChange={e => setId_produto(e.target.value)} placeholder="Digite o ID do produto" />
                        <input type='text' value={quantidade} onChange={e => setQuantidade(e.target.value)} placeholder="Digite a quantidade do produto" />
                        <input type='number' value={valor_unitario} onChange={e => setValor_Unitario(e.target.value)} placeholder="Digite o valor unitário do produto" />
                        <input type='date' value={data_saida} onChange={e => setData_Saida(e.target.value)} />
                        <div>
                            <button className='btn-save'>
                                <FiSave />
                                Salvar
                            </button>
                            <button className='btn-cancel' onClick={() => navigate('/listasaida')}>
                                <MdOutlineCancel />
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}