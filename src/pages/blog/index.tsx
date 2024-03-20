import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import animations from '../../styles/animations.module.css'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }

      return post
    })
    .filter(Boolean)

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

const Blog = ({ posts = [], preview }) => {
  return (
    <>
      <Header titlePre="Blog" />
      <div className={sharedStyles.layout}>
        <h1>Publicações recentes</h1>
        <div className="explanation">
          <h2> Aqui você encontra minhas publicações, ideias e opiniões.</h2>
        </div>
        {preview && (
          <div className={blogStyles.previewAlertContainer}>
            <div className={blogStyles.previewAlert}>
              <b>Nota:</b>
              {` `}Visualizando em modo Rascunho{' '}
              <Link href={`/api/clear-preview`}>
                <button className={blogStyles.escapePreview}>
                  Sair da pré-visualização
                </button>
              </Link>
            </div>
          </div>
        )}
        <div className={`${sharedStyles.layout}`}>
          {posts.length === 0 && (
            <p className={blogStyles.noPosts}>
              Não há publicações a exibir por aqui
            </p>
          )}
          {posts.map((post) => {
            return (
              <div className={blogStyles.postPreview} key={post.Slug}>
                <section
                  className={[
                    sharedStyles.postStyles,
                    animations.websiteOpening,
                  ].join(' ')}
                >
                  <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                    <a className={blogStyles.postTitle}>{post.Title}</a>
                  </Link>
                  <hr />
                </section>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Blog
