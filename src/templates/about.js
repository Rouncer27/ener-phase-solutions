import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Intro from "../components/templates/about/Intro"
import Values from "../components/templates/about/Values"
import PageHero from "../components/templates/about/PageHero"
import Team from "../components/templates/about/Team"
import SideContent from "../components/templates/about/SideContent"

const About = props => {
  return (
    <Layout>
      <Seo title="About Page" />
      <Intro data={props.data.intro.template.aboutTemplate} />
      <Values data={props.data.values.template.aboutTemplate} />
      <PageHero data={props.data.pageHero.template.aboutTemplate} />
      <Team data={props.data.team.template.aboutTemplate} />
      <SideContent data={props.data.sideContent.template.aboutTemplate} />
    </Layout>
  )
}

export const aboutTempQuery = graphql`
  query aboutTempPage($id: String!) {
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
        ... on WpTemplate_About {
          aboutTemplate {
            introWithImagesContent
            introWithImagesTitle
            introWithImagesBottom {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
            introWithImagesTop {
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

    values: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            sideBySideContentTitle
            sideBySideContentBlocks {
              title
              content
            }
          }
        }
      }
    }

    pageHero: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            pageHeroImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
            pageHeroTitle
            pageHeroContent
          }
        }
      }
    }

    team: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            leadershipTeamMembers {
              firstName
              lastName
              title
              bio
              image {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }
            }

            operationalTeamMembers {
              firstName
              lastName
              title
              bio
              image {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }
            }
          }
        }
      }
    }

    sideContent: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            sideBySideContentBlock {
              content
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
  }
`

export default About
