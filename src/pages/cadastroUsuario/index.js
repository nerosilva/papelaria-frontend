import React, { useState } from 'react';

import '../../pages/global.css'
import Menu from '../../componetes/menu'
import { FiFilePlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import Head from '../../componetes/Head';
import { FaSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export default function Cadastrousuario() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const usuario = {
        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
        nome,
        email,
        senha,


    }



    
    function salvardados(e) {

        e.preventDefault();
        // console.log(usuario)

        if(nome=="")
        alert("preencha o campo nome")
        else if(email=="")
        alert("preencha o campo email")
        else if(senha=="")
        alert("preenha o campo senha")
        else {

        const banco = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
        banco.push(usuario);
        localStorage.setItem("cd-usuarios", JSON.stringify(banco));
        alert("Usuario salvo com sucesso");
        navigate('/listausuario');

    }
    }

    return (
        <div className="dashboard-container">

            <div className='menu'>
                <Menu />
            </div>
            <div className='Principal'>
                <Head title='cadastro de Usuario' />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvardados}>
                        <input type='text'
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder='Digite o nome do usuario' />

                        <input type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Digite o email' />

                        <input type='password'
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            placeholder='Digite a senha' />

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