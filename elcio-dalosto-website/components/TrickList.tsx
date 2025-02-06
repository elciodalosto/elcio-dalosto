import React from 'react';

interface Manobra {
  id: string;
  name: string;
  type: string;
  description: string;
}

interface Props {
  manobra: Manobra[];
}

export function ManobraList({ manobra }: Props) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1>MANOBRAS</h1>
        <ul>
          {manobra.map((manobra) => (
            <li key={manobra.id}>
              <br />
              Nome: {manobra.name}
              <br /> Tipo: {manobra.type} <br />
              Descrição: {manobra.description}
              <br />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
