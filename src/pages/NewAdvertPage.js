// src/pages/NewAdvertPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const NewAdvertPage = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [sale, setSale] = useState(true); // Por defecto, un nuevo anuncio es de venta
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState(0);

  const handleCreateAdvert = async () => {
    try {
      // Aquí deberías validar los datos del formulario antes de enviar la solicitud
      await axios.post(`${config.apiUrl}/adverts`, {
        name,
        sale,
        tags,
        price,
      });

      // Después de crear exitosamente, redirige a la página de anuncios
      history.push('/adverts');
    } catch (error) {
      console.error('Error creating advert', error);
      // Maneja el error de creación, por ejemplo, muestra un mensaje de error al usuario
    }
  };

  return (
    <div>
      <h2>Nuevo Anuncio</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Tipo:</label>
        <select value={sale} onChange={(e) => setSale(e.target.value === 'true')}>
          <option value={true}>Venta</option>
          <option value={false}>Compra</option>
        </select>

        <label>Tags:</label>
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value.split(','))} />

        <label>Precio:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

        <button type="button" onClick={handleCreateAdvert}>
          Crear Anuncio
        </button>
      </form>
    </div>
  );
};

export default NewAdvertPage;
