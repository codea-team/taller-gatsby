import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import styles from './styles.module.scss'

class ArticleList extends React.PureComponent {
  static propTypes = {
    articles: PropTypes.array,
  }

  render() {
    const { articles } = this.props

    return (
      <div className={styles.root}>
        {articles.map(item => (
          <article key={item.node.id}>
            <h2>
              <Link to={item.node.frontmatter.path}>
                {item.node.frontmatter.title}
              </Link>
            </h2>

            <time>{item.node.frontmatter.date}</time>

            <p>{item.node.excerpt}</p>
          </article>
        ))}
      </div>
    )
  }
}

export default ArticleList
