import Image from 'next/image'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import animations from '../styles/animations.module.css'

const imageLoader = ({ src, width, quality }) => {
  return `https://avatars.githubusercontent.com/u/15917796?v=4${src}?w=${width}&q=${
    quality || 75
  }`
}

export default function Home() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Bem vindo!</h1>

        <div className="explanation">
          <h2>
            {' '}
            Meu nome é Elcio Augusto Dalosto e você está no meu espaço virtual.
          </h2>

          <div className={sharedStyles.avatar}>
            <Image
              className={animations.avatarCircular}
              loader={imageLoader}
              alt="fotografia do rosto"
              width={256}
              height={256}
              src="/public/elcio-dalosto.jpg"
            />
          </div>

          <p>Sinta-se à vontade para explorar o site e me conhecer melhor.</p>
          <p>
            Desenvolvi este site com o objetivo de centralizar minhas
            informações e compartilhar ideias e conhecimentos através do blog e
            portfólio.
          </p>
          <p>
            Se você estiver interessado em discutir oportunidades de
            colaboração, consultoria, ou tiver alguma pergunta, sugestão ou
            ainda alguma crítica em relação a este site, sinta-se à vontade para
            entrar em contato comigo pelo endereço de e-mail listado abaixo, ou
            ainda, pelas redes sociais.
          </p>
          <p>Visite a aba 'ABOUT' para saber mais.</p>
        </div>
      </div>
    </>
  )
}
