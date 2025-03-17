"use client";

import { useSearchParams } from 'next/navigation';

const Sucesso = () => {
	const searchParams = useSearchParams();
	const data = searchParams.get('data');
	const ticketData = JSON.parse(data ? data : "{}");
	const { nome, idade, saude, missao } = ticketData;

	return (
		<div className="flex flex-col align-middle items-center">
			<p><strong>Nome Passageiro:</strong> {nome}</p>
			<p><strong>Idade Passageiro:</strong> {idade}</p>
			<p><strong>Saúde Passageiro:</strong> {saude}</p>
			<p><strong>ID Missão:</strong> {missao.id}</p>
			<p><strong>Nome Missão:</strong> {missao.name}</p>
		</div>
	);
};

export default Sucesso;