import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import ProjectHeroImage from "../components/templates/project/ProjectHero"
import ProjectTitle from "../components/templates/project/ProjectTitle"
import ProjectWysiwyg from "../components/templates/project/ProjectWysiwyg"
import ProjectGallery from "../components/templates/project/ProjectGallery"

const project = props => {
  const { seoInfo } = props.data
  console.log("props.data.project.project: ", props.data.project.project)
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <ProjectHeroImage data={props.data.project.project.featuredImage} />
      <ProjectTitle
        title={props.data.project.title}
        name={props.data.project.projectClient}
      />
      <ProjectWysiwyg
        date={props.data.project.project.projectCompletion}
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
    seoInfo: wpProjectSingle(slug: { eq: $slug }) {
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
