"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import useFetch from "@/hook/useFetch";
import { Button } from "@/components/ui/button";

const Formulario = () => {
  const router = useRouter();
  const { missoes } = useFetch();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [saude, setSaude] = useState("");
  const [missao, setMissao] = useState({});
  const formData = {
    nome,
    idade,
    saude,
    missao,
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketData = {
      nome: formData.nome,
      idade: formData.idade,
      saude: formData.saude,
      missao: formData.missao,
    };
    router.push(`/src/app/successo?data=${JSON.stringify(ticketData)}`);
  };

  return (
    <div className="flex flex-col align-middle items-center">
      <form onSubmit={(e) => submitForm(e)} className="shadow-lg rounded px-16 py-16">
        <label className="pr-2">Nome Completo:</label>
        <input
          className="mb-5"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Joe Black da Silva"
        />

        <br/>

        <label className="pr-2">Sua Idade:</label>
        <input
          className="mb-5"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          type="string"
          placeholder="21"
        />

        <p className="mb-2">Tem problemas de saúde?</p>
        <input
          className="mb-6"
          checked={saude === "Sim"}
          onChange={(e) => setSaude(e.target.value)}
          type="radio"
          value="Sim"
        />
        <label className="pr-2"> Sim</label>
        <input
          className="ml-3"
          checked={saude === "Não"}
          onChange={(e) => setSaude(e.target.value)}
          type="radio"
          value="Não"
        />
        <label className="pr-2"> Não</label>

        <br/>

        <label className="">Selecione a missão </label>
        <select
          value={missao ? JSON.stringify(missao) : ""}
          onChange={(e) => setMissao(e.target.value.toString())}
        >
          {missoes ?
            missoes.map((missao: Object) => <option key={missao.id} value={missao.id}>{missao.name}</option>)
            : <p>Carregando...</p>
          }
        </select>

        <br/>
        <Button className="my-8 shadow-md shadow-blue-800/50 bg-blue-900 hover:bg-white border-2 border-blue-900 text-white hover:text-blue-900" type="submit">Comprar Ticket</Button>
      </form>
    </div>
  );
};

export default Formulario;
