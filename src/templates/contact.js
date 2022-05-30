import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Intro from "../components/templates/contact/Intro"

const Contact = props => {
  return (
    <Layout>
      <Seo title="Contact Page" />
      <Intro data={props.data.intro.template.contactTemplate} />
    </Layout>
  )
}

export const contactTempQuery = graphql`
  query contactTempPage($id: String!) {
    # seoInfo: wpPage(id: { eq: $id }) {
    #   seoFields {
    #     swbThemeDescription
    #     swbThemeMetaTitle
    #     swbThemeImage {
    #       localFile {
    #         relativePath
    #       }
    #     }
    #   }
    # }

    intro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            contactIntroTitle
            contactIntroSubTitle
            contactIntroContent
          }
        }
      }
    }
  }
`

export default Contact
