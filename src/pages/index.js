import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/templates/home/Hero"
import Trust from "../components/templates/home/Trust"
import ThreeBoxes from "../components/templates/home/ThreeBoxes"
import Partner from "../components/templates/home/Partner"

const IndexPage = props => {
  const hero = props?.data?.hero?.template?.homeTemplate
    ? props?.data?.hero?.template?.homeTemplate
    : null
  const trust = props?.data?.trust?.template?.homeTemplate
  const threeBoxes = props?.data?.threeBoxes?.template?.homeTemplate
  const partner = props?.data?.partner?.template?.homeTemplate
  return (
    <Layout>
      <Seo title="Home" />
      {/* <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        /> */}
      <Hero data={hero} />
      <Trust data={trust} />
      <ThreeBoxes data={threeBoxes} />
      <Partner data={partner} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    # seoInfo: wpPage(slug: { eq: "home" }) {
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
    hero: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            heroBoxContent
            heroBottomContent
            heroImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }
        }
      }
    }

    trust: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            serviceTrustTitle
            serviceTrustContent
          }
        }
      }
    }

    threeBoxes: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            threeBoxBoxes {
              title
              content
              buttonText
              slug
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

    partner: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            truePartnerTitle
            truePartnerContent
            truePartnerSmallContent
            truePartnerStats {
              statTitle
              statNumber
              statIcon {
                altText
                sourceUrl
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 750)
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

export default IndexPage
