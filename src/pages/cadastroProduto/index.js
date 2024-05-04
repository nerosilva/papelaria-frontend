import React, { useState } from 'react';

import '../../pages/global.css'
import Menu from '../../componentes/menu'
import { useNavigate } from 'react-router-dom';
import Head from '../../componentes/head';
import { FaSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import api from '../../server/api';

export default function Cadastroproduto() {
    const navigate = useNavigate();

    const [status, setStatus] = useState("");
    const [descricao, setDescricao] = useState("");
    const [estoque_minimo, setEstoque_maximo] = useState();
    const [estoque_maximo, setEstoque_minimo] = useState();

    const produto = {
        id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
        status,
        descricao,
        estoque_minimo,
        estoque_maximo,
    }

    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        if (status === "")
            i++;
        else if (descricao === "")
            i++;
        else if (estoque_minimo === "" || estoque_minimo === 0)
            i++;
        else if (estoque_maximo === "" || estoque_maximo === 0)
            i++;
        if (i === 0) {
            // const banco = JSON.parse(localStorage.getItem("cd-produto") || "[]");
            // banco.push(produto);
            // localStorage.setItem("cd-produto", JSON.stringify(banco));
            // alert("Produto salvo com sucesso");
            api.post('/produto', produto,
                { headers: { "Content-Type": "application/json" } })
                .then(function (response) {
                    console.log(response.data)
                    alert(response.data.mensagem);
                    navigate('/listaproduto');
                }

                )

        } else {
            alert("Verifique! Há campos vazios!")
        }
    }

    return (
        <div className="dashboard-container">

            <div className='menu'>
                <Menu />

            </div>
            <div className='Principal'>
                <Head title="cadastro de produto" />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados}>
                        <input type='text'
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                            placeholder='Digite o status' />

                        <input
                            type='text'
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                            placeholder='Digite a descricao' />

                        <input
                            type='number'
                            value={estoque_minimo}
                            onChange={e => setEstoque_maximo(e.target.value)}
                            placeholder='Digite o Estoque maximo' />

                        <input
                            type='number'
                            value={estoque_maximo}
                            onChange={e => setEstoque_minimo(e.target.value)}
                            placeholder='Digite o Estoque minimo' />

                        <div className='acao'>
                            <button className='btn-save'>
                                <FaSave />
                                Salvar
                            </button>
                            <button className='btn-cancel'>
                                <MdOutlineCancel />
                                Cancelar</button>
                        </div>

                    </form>


                </div>


            </div>


        </div>


    )

}