import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ExtLink from './ext-link'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'HOME', page: '/' },
  { label: 'ABOUT', page: '/about' },
  { label: 'PORTFOLIO', page: '/portfolio' },
  { label: 'BLOG', page: '/blog' },
]

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Elcio Augusto Dalosto</title>
        <meta name="description" content="Site + Blog + Portfolio" />
        <meta name="og:title" content="Elcio Augusto Dalosto" />
      </Head>
      <ul className="unordered-list">
        <span id="recolher-menu">◀◀ Recolher menu</span>
        {navItems.map(({ label, page, link }) => (
          <li className="list-items" key={label}>
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
