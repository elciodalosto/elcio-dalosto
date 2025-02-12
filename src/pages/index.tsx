import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Avatar from '@site/src/components/Avatar';
import HomepageHeader from '../components/Avatar/HomepageHeader';



export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='text--center padding-top--sm'>
        <h2>Olá! Seja bem vindo ao meu espaço virtual.</h2>
        <br />
        <Avatar />
        <br />
        <div>

          <p>
            Para me conhecer melhor, navegue pelos menus da esquerda e do topo do site.
          </p>
          <p>
            Fique à vontade para me adicionar ou seguir nas redes.
          </p>
          <p>
            Os links se encontram no rodapé do site.
          </p>
        </div>

      </main>
    </Layout>
  );
}
