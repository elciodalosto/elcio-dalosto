import clsx from 'clsx';
import styles from './avatar.module.css';
import avatar from '@site/static/img/avatar.png'; 

export default function Avatar() {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <h1 className={styles.title}>Seja bem-vindo ao meu espaço virtual.</h1>
        <img className={styles.avatar} role="img" src={avatar} />
      </div>
    </div>
  );
}