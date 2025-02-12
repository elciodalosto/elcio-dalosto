import clsx from 'clsx';
import styles from './styles.module.css';
import avatar from '@site/static/img/avatar.png';

export default function Avatar() {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={avatar} />
      </div>
    </div>
  );
}