import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

class ArticleDetailTemplate extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
      <div>
        <h1>{frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`

export default ArticleDetailTemplate
