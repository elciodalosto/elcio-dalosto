import Header from '../../components/header'
import sharedStyles from '../../styles/shared.module.css'

export default function About() {
  return (
    <>
      <Header titlePre="Sobre" />
      <div className={sharedStyles.layout}>
        <h1>Sobre</h1>
        <h2>Aqui você encontra um resumo do meu currículo</h2>
        <div className="explanation">
          <ul>
            <h3>Informações pessoais</h3>
            <li>Nome: Elcio Augusto Dalosto</li>
            <li>Idade: 36 anos</li>
            <hr />
            <li>🏠 Residência em Taquara - Rio Grande do Sul, onde mora:</li>
            <li className="topico-lista">🙆🏻‍♂️ Eu</li>
            <li className="topico-lista">🙆🏻‍♀️ Graziela (minha companheira)</li>
            <li className="topico-lista">🐶 Peteca (nossa dog)</li>
            <hr />
            <li>Práticas/Esportes/Hobbies/Lazer:</li>
            <li className="topico-lista">🧘‍♂️ Yoga (Hatha) </li>
            <li className="topico-lista">🛹 Skateboarding </li>
            <li className="topico-lista">🎮 Games </li>
            <li className="topico-lista">👨‍💻 Estudos </li>
            <li className="topico-lista">🛫 Viajar </li>
            <li className="topico-lista">👽 Viajar </li>
            <li className="topico-lista">
              🌱 Plantar e/ou Guardar as sementes de quase tudo o que eu consumo
            </li>

            <hr />
            <h3>Informações de trabalho e acadêmicas</h3>
            <li>Profissão: Testador de Software | QA</li>
            <li>Colaborador na: CWI Software | São Leopoldo/RS(remoto)</li>
            <li>
              Técnico: Curso Técnico em Informática com ênfase em programação
              pelo CIMOL
            </li>
            <li>
              Graduação: Análise e Desenvolvimento de Sistemas (em andamento)
              pelo SENAC-SP EAD
            </li>
            <li>
              Certificação: CTFL - Certified Tester Foundation Level
              (BSTQB/ISTQB) | e estudando para evoluir a certificação atual para
              CTAL - Certified Tester Advanced Level.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
