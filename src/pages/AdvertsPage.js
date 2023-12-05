// src/pages/AdvertPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const AdvertPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/adverts/${id}`);
        setAdvert(response.data);
      } catch (error) {
        console.error('Error fetching advert details', error);
        // Maneja el error de obtención de detalles del anuncio, por ejemplo, redirige a una página de error
        history.push('/error');
      }
    };

    fetchAdvert();
  }, [id, history]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${config.apiUrl}/adverts/${id}`);

      // Después de borrar exitosamente, redirige a la página de anuncios
      history.push('/adverts');
    } catch (error) {
      console.error('Error deleting advert', error);
      // Maneja el error de eliminación, por ejemplo, muestra un mensaje de error al usuario
    }
  };

  if (!advert) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>{advert.name}</h2>
      <p>Precio: {advert.price}</p>
      <p>Tipo: {advert.sale ? 'Venta' : 'Compra'}</p>
      {/* Mostrar más detalles del anuncio según sea necesario */}
      <button type="button" onClick={handleDelete}>
        Borrar Anuncio
      </button>
    </div>
  );
};

export default AdvertPage;
