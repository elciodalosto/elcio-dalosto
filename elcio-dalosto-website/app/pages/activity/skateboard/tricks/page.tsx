import React from 'react';
import { ManobraList } from '@/components/TrickList';
import { getTricks } from './api';

export default async function Home() {
  return (
    <>
      definir Manobras Bloqueadas e Bloqueantes. Ex: Entrar de backside 5050, as manobras de front-side tornam-se bloqueadas / tornam-se impossíveis de serem executadas a partir dali, lógica e fisicamente. Mas podem ou não, serem desbloqueadas a partir da próxima manobra encaixada/concatenada/dada na sequência da manobra atual
      <ManobraList manobra={await getTricks()} />
    </>
  );
}
