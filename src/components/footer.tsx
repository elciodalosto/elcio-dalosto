import GitHub from './svgs/github'
import Envelope from './svgs/envelope'
import LinkedIn from './svgs/linkedin'
import contactStyles from '../styles/contact.module.css'
import ExtLink from './ext-link'

const contacts = [
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/elciodalosto',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/elciodalosto',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:edalosto@gmail.com?subject=Contato a partir do site pessoal',
  },
]
export default function Footer() {
  return (
    <>
      <footer>
        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
          <div>
            <p>2023 - 2024 | Elcio Augusto Dalosto </p>
          </div>
        </div>
      </footer>
    </>
  )
}
