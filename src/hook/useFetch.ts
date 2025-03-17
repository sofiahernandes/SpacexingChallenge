"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [missoes, setMissoes] = useState([]);

  useEffect(() => {
      async function getData() {
        try {
          const response = await axios.get('https://api.spacexdata.com/v4/launches/upcoming')
          setMissoes(response.data);
        } catch (error) {
          console.error("Erro ao buscar missões: ", error);
        }
      }
    getData();
    }, []);

  return { missoes };
};

export default useFetch;
