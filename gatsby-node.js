
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const ArticleDetailTemplate = path.resolve(
    `src/templates/articleDetailTemplate/index.js`
  )


  return graphql(`
    {
      posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const listArticles = result.data.posts.edges.reverse()

    // Make pages detail article
    listArticles.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: ArticleDetailTemplate,
        context: {
          slug: node.frontmatter.path,
        },
      })
    })
  })
}
