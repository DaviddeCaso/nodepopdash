 // src/pages/Loginpage.js

 import React, { useState } from 'react';
 import { useHistory } from 'react-router-dom';
 import axios from 'axios';
 import config from '../config';

 const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${config.apiUrl}/auth/login`, {
        email,
        password,
      });

      // Aquí puedes almacenar el token en localStorage si se selecciona "Recordar contraseña"
      if (remember) {
        localStorage.setItem('token', response.data.token);
      }

      // Redirige a la página de anuncios después de iniciar sesión exitosamente
      history.push('/adverts');
    } catch (error) {
      console.error('Error during login', error);
      // Maneja el error de autenticación, por ejemplo, muestra un mensaje de error al usuario
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Recordar contraseña
        </label>

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
