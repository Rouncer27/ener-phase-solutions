import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Intro from "../components/templates/default/Intro"
import MainContent from "../components/templates/default/MainContent"

const Default = props => {
  const { seoInfo } = props.data
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Intro data={props.data.intro.template.defaultTemplate} />
      <MainContent data={props.data.main.template.defaultTemplate} />
    </Layout>
  )
}

export const defaultTempQuery = graphql`
  query defaultTempPage($id: String!) {
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
        ... on WpDefaultTemplate {
          defaultTemplate {
            pageIntroContent
            pageIntroSubTitle
            pageIntroTitle
          }
        }
      }
    }

    main: wpPage(id: { eq: $id }) {
      template {
        ... on WpDefaultTemplate {
          defaultTemplate {
            mainWysiwygContent
          }
        }
      }
    }
  }
`

export default Default
