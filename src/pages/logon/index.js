import './styles.css';
import Logo from '../../assets/img/Tecnologia-a-favor-da-Gestao-de-Compras-e-Estoque.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../server/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Logon() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = (e) => {
    e.preventDefault();
    api.post("usuario/login", { email, senha })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          alert(res.data.mensagem);
          navigate('/dashboard');
        } else if (res.status === 500) {
          alert(res.data.mensagem);
        }
      });
  };

  return (
    <div className="logon-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <section className="form">
        <form onSubmit={logar}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
}
