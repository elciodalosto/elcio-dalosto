import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import navbarStyles from '../styles/navbar.module.css'
import ExtLink from './ext-link'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'HOME', page: '/' },
  { label: 'ABOUT', page: '/about' },
  // { label: 'PORTFOLIO', page: '/portfolio' },
  // { label: 'BLOG', page: '/blog' },
]

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Elcio Augusto Dalosto</title>
        <meta name="description" content="Site + Blog + Portfolio" />
        <meta name="og:title" content="Elcio Augusto Dalosto" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/15917796?v=4"
        />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li className={navbarStyles.unselectable} key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
