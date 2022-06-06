import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Intro from "../components/templates/services/Intro"
import BlackContent from "../components/templates/services/BlackContent"
import ContentBlocks from "../components/templates/services/ContentBlocks"
import ServicesList from "../components/templates/services/ServicesList"
import TestimonialSlider from "../components/templates/services/TestimonialSlider"
import DisplayProjects from "../components/templates/common/DisplayProjects"

const Services = props => {
  const { seoInfo } = props.data
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Intro data={props.data.intro.template.servicesTemplate} />
      <BlackContent data={props.data.blackContent.template.servicesTemplate} />
      <ContentBlocks
        data={props.data.contentBlocks.template.servicesTemplate}
      />
      <ServicesList data={props.data.servicesList.template.servicesTemplate} />
      <TestimonialSlider
        data={props.data.testimonialSlider.template.servicesTemplate}
        testimonials={props.data.testimonials.edges}
      />
      <DisplayProjects data={props.data.projects.edges} />
    </Layout>
  )
}

export const servicesTempQuery = graphql`
  query servicesTempPage($id: String!) {
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
        ... on WpTemplate_Services {
          servicesTemplate {
            servicesIntroTitle
            servicesIntroContent
            servicesIntroImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
        }
      }
    }

    blackContent: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            blackContentBlockId
            blackContentBlockButtonSlug
            blackContentBlockButtonText
            blackContentBlockContent
            blackContentBlockSubTitle
            blackContentBlockTopTitle
            blackContentBlockImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
        }
      }
    }

    contentBlocks: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            contentBesideImageBlocks {
              blockId
              backgroundColor
              buttonSlug
              buttonText
              content
              reverseLayout
              title
              image {
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

    servicesList: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            servicesListTitle
            servicesListItems {
              item
            }
          }
        }
      }
    }

    testimonialSlider: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            testimonialSliderDisplay
            testimonialSliderImage {
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

    displayProjects: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Services {
          servicesTemplate {
            displayProjects
          }
        }
      }
    }

    testimonials: allWpTestimonial {
      edges {
        node {
          testimonials {
            testimonialContent
          }
          title
        }
      }
    }

    projects: allWpProjectSingle {
      edges {
        node {
          title
          slug
          project {
            projectType
            featuredImage {
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

export default Services
