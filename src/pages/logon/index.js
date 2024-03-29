import './styles.css'
import Logo from '../../assets/img/depositphotos_80152796-stock-photo-school-supplies-in-shopping-cart.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import api from '../../server/api';

export default function Logon() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const logar = (e) => {
    e.preventDefault();
    // let banco = JSON.parse(localStorage.getItem("cd-usuarios") || "[]");
    // let dadosnovos = banco.filter(item => item.email === email && item.senha === senha);
    // console.log(banco);
    // if (dadosnovos.length > 0) {
    //   navigate('/dashboard');
    // } else {
    //   alert("Dados incorretos!!!");
    // }
    api.post("usuario/login",{email,senha})
    .then(res => {
      console.log(res.status)
     if(res.status===200){
      navigate('/dashboard')

     }
      
    })
  }

  return (
    <div className="logon-container">
      <div className='logo'>
        <img src={Logo} />
      </div>


      <section className="form">

        <h1>Faça seu login</h1>
        <form onSubmit={logar}>

          <input placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input placeholder="Senha" type='password'
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
          <a href="#">Novo Cadastro</a>

        </form>

      </section>

    </div>

  )

}