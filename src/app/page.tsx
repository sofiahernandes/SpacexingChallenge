"use client";

import Titulo from '@/components/titulo';
import Subtitulo from '@/components/subtitulo';
import Formulario from '@/components/formulario';

import Image from 'next/image';

const HomePage = () => {
  return (
    <>
      <div id="home" className="bg-[url(/background.png)] w-screen h-screen bg-cover bg-center">
        <div className="flex flex-row h-screen py-48 px-100 align-middle">
          <Titulo />
          <Image
            className="ml-20 min-w-56"
            src="/rocket.png"
            height={100}
            width={200}
            alt="Emoji de foguete"
          />
        </div>

        <div id="agendar-ticket" className="h-screen">
          <Subtitulo texto="Garanta sua passagem!" />
          <Formulario />
          <p className="text-center text-sm">Preencha com seus dados para efetuar seu agendamento.</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
