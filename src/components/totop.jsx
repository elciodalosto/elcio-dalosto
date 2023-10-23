import navbarStyle from '../styles/navbar.module.css'

export default function Totop() {
  return (
    <div className={navbarStyle.toTheTop}>
      <a className={navbarStyle.linkToTop} href="#">
        <span>&#8593;</span> Voltar ao Topo
      </a>
    </div>
  )
}
