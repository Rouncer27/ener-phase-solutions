import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import ProjectHeroImage from "../components/templates/project/ProjectHero"
import ProjectTitle from "../components/templates/project/ProjectTitle"
import ProjectWysiwyg from "../components/templates/project/ProjectWysiwyg"
import ProjectGallery from "../components/templates/project/ProjectGallery"

const project = props => {
  console.log("project: ", props)
  return (
    <Layout>
      <Seo title="project" />
      <ProjectHeroImage data={props.data.project.project.featuredImage} />
      <ProjectTitle
        title={props.data.project.title}
        name={props.data.project.project.projectClient}
      />
      <ProjectWysiwyg
        date={props.data.project.date}
        content={props.data.project.project.projectContent}
      />
      {props.data.project.project.projectGallery && (
        <ProjectGallery data={props.data.project.project.projectGallery} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query singleProjectQuery($slug: String!) {
    seoInfo: wpPage(slug: { eq: $slug }) {
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

    project: wpProjectSingle(slug: { eq: $slug }) {
      project {
        projectType
        projectCompletion
        projectClient
        projectContent
        featuredImage {
          altText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1500)
            }
          }
        }
        projectGallery {
          altText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1500)
            }
          }
        }
      }
      date
      title
      slug
      id
    }
  }
`

export default project
