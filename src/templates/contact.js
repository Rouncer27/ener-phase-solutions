import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Intro from "../components/templates/contact/Intro"
import Location from "../components/templates/contact/Location"
import ContactForm from "../components/templates/contact/ContactForm"
import PageHero from "../components/templates/contact/PageHero"

const Contact = props => {
  const { seoInfo } = props.data
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Intro data={props.data.intro.template.contactTemplate} />
      <Location data={props.data.location.template.contactTemplate} />
      {props.data.form.template.contactTemplate.contactFormDisplay && (
        <ContactForm data={props.data.form.template.contactTemplate} />
      )}
      <PageHero
        data={props.data.hero.template.contactTemplate.contactHeroImage}
      />
    </Layout>
  )
}

export const contactTempQuery = graphql`
  query contactTempPage($id: String!) {
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
        ... on WpTemplate_Contact {
          contactTemplate {
            contactIntroTitle
            contactIntroSubTitle
            contactIntroContent
          }
        }
      }
    }

    location: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            locationImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            locationAddress
            locationPhone1
            locationPhone2
            locationEmail
          }
        }
      }
    }

    form: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            contactFormDisplay
            contactFormId
          }
        }
      }
    }

    hero: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            contactHeroImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Contact
