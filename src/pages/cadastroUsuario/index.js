import React, { useState } from 'react';


import '../../pages/global.css'
import Menu from '../../componetes/menu'
import { FiFilePlus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Head from '../../componetes/Head';
import { FaSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export default function Cadastrousuario() {
    const [nome, setNome] = useState("");

    return (
        <div className="dashboard-container">

            <div className='menu'>
                <Menu />
            </div>
            <div className='Principal'>
                <Head title='cadastro de Usuario' />
                <div className='form-container'>
                    <form className='form-cadastro'>
                        <input type='text' value={nome} onChange={e => setNome(e.target.value)}
                            placeholder='Digite o nome do usuario' />
                        <input type='email' placeholder='Digite o email' />
                        <input type='password' placeholder='Digite a senha' />
                        <div className='acao'>
                            <botton className='btn-save'>
                                <FaSave />
                                Salvar
                            </botton>
                            <botton className='btn-cancel'>
                                <MdOutlineCancel />
                                Cancelar</botton>
                        </div>

                    </form>
                 
                </div>


            </div>


        </div>


    )

}