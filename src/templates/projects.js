import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Intro from "../components/templates/projects/Intro"
import ProjectsDisplay from "../components/templates/projects/ProjectsDisplay"

const Projects = props => {
  const { seoInfo } = props.data
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Intro data={props.data.intro.template.projectsTemplate} />
      {props.data.intro.template.projectsTemplate.displayProjects && (
        <ProjectsDisplay />
      )}
    </Layout>
  )
}

export const projectsTempQuery = graphql`
  query projectsTempPage($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    intro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Projects {
          templateName
          projectsTemplate {
            projectsIntroContent
            projectsIntroSubTitle
            projectsIntroTitle
            displayProjects
          }
        }
      }
    }
  }
`

export default Projects
