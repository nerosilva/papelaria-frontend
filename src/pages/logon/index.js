import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../server/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

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
      <section className="form">
        <h1>Login</h1>
        <form onSubmit={logar}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              placeholder="Digite seu usuário"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Acessar</button>
        </form>
        <a href="/forgot-password" target="_blank" rel="noopener noreferrer">Esqueci minha senha</a>
        <div className="social-buttons">
          <a href="https://www.instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer" className="social-button instagram-button">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" /> 
          </a>
          <a href="https://wa.me/seu_numero" target="_blank" rel="noopener noreferrer" className="social-button whatsapp-button">
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" /> 
          </a>
          <a href="https://www.facebook.com/seu_perfil" target="_blank" rel="noopener noreferrer" className="social-button facebook-button">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" /> 
          </a>
        </div>
      </section>
    </div>
  );
}
