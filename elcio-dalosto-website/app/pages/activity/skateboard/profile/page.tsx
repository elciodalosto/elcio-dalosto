import { Link } from 'expo-router'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>PERFIL</h1>
      <h2>Esporte</h2>
      <h2>Publicações</h2>
      <h2>Editar</h2>
      <h2>Conta</h2>
      <h2>Desativar Perfil</h2>
      <h2>Desativar Perfil</h2>

      <Link id="voltar" href="/">Voltar</Link>

    </main>
  )
}
