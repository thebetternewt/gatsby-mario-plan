const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const projectDetailsTemplate = path.resolve(
    '.',
    'src',
    'templates',
    'ProjectDetails.js'
  )

  // return new Promise((resolve, reject) => {

  //   graphql(`
  //     {
  //       allProject {
  //         edges {
  //           node {
  //             id
  //             title
  //             content
  //             authorLastName
  //             authorFirstName
  //             createdAt
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     if (result.errors) {
  //       reject(result.errors)
  //     }

  //     result.data.allProject.edges.forEach(({ node }) => {
  //       console.log(node)
  //       const { id } = node
  //       const path = `/project/${id}`
  //       createPage({
  //         path,
  //         component: projectDetailsTemplate,
  //         context: {
  //           id: id,
  //           title: node.title,
  //         },
  //       })
  //     })
  //     resolve()
  //   })
  // })
}
