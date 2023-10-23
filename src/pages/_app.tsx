import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import Totop from '../components/totop'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Totop />
      <Footer />
    </>
  )
}
