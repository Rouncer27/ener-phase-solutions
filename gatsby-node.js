const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWpPage {
          edges {
            node {
              template {
                templateName
              }
              slug
              databaseId
              uri
              id
            }
          }
        }

        posts: allWpPost {
          edges {
            node {
              id
              slug
              uri
            }
          }
        }

        projects: allWpProjectSingle {
          edges {
            node {
              id
              slug
              uri
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else if (node.template.templateName === "About") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/about.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Home") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Contact") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/contact.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "News") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/news.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Services") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/services.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Projects") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/projects.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Default") {
        createPage({
          path: `${node.uri}`,
          component: path.resolve(`./src/templates/default.js`),
          context: {
            id: node.id,
          },
        })
      }
    })

    const posts = data.posts.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: `/news-updates/${node.slug}/`,
        component: path.resolve("./src/templates/post.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : posts[index - 1].node.slug,
          prev: index === posts.length - 1 ? null : posts[index + 1].node.slug,
        },
      })
    })

    const projects = data.projects.edges
    projects.forEach(({ node }, index) => {
      createPage({
        path: `/projects/${node.slug}/`,
        component: path.resolve("./src/templates/project.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : projects[index - 1].node.slug,
          prev:
            index === projects.length - 1
              ? null
              : projects[index + 1].node.slug,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
