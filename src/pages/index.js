import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ArticleList from '../components/articlesList'

class IndexPage extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props
    const { allMarkdownRemark } = data
    const { edges } = allMarkdownRemark

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <ArticleList articles={edges} />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
