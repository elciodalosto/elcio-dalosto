import React, { useEffect, useState } from 'react';
import styles from '@site/src/components/VerticalScrollButton/VerticalScrollButton.module.css';

export default function VerticalScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };


  return (
    <>
      {!isVisible && (

        <button
          onClick={scrollToBottom}
          className={styles.DownToUp}
        >
          ↓ Descer tudo
        </button>
      )}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.TopToDown}
        >
          ↑ Subir tudo
        </button>
      )}
    </>
  );
} 