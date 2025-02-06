import { Link } from 'expo-router'

export default async function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1>SKATEBOARD</h1>
        <h2>Perfil</h2>

        <h2>Modalidades</h2>
        <ul>
          <li>
            <Link href="sport/skateboard">Street</Link>
          </li>
          <li>
            <Link href="/rollerblade">Vertical</Link>
          </li>

          <li>
            <Link href="/yoga">Bowl</Link>
          </li>
          <li>
            <Link href="/bmx">Mini Ramp</Link>
          </li>
        </ul>
        <Link id="voltar" href="/">
          Voltar
        </Link>
      </div>
    </>
  );
}
