import Header from '../../components/header'
import sharedStyles from '../../styles/shared.module.css'

export default function Portfolio() {
  return (
    <>
      <Header titlePre="Portfolio" />
      <div className={sharedStyles.layout}>
        <h1>Portfolio</h1>
        <div className="explanation">
          <h2>[ Em construção ]</h2>
        </div>
      </div>
    </>
  )
}
