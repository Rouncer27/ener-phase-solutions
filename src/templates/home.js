import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/templates/home/Hero"
import Trust from "../components/templates/home/Trust"
import ThreeBoxes from "../components/templates/home/ThreeBoxes"
import Partner from "../components/templates/home/Partner"
import DisplayTestimonials from "../components/templates/common/DisplayTestimonials"
import DisplayProjects from "../components/templates/common/DisplayProjects"
import DisplayPosts from "../components/templates/common/DisplayPosts"

const Home = props => {
  const { seoInfo } = props.data
  const hero = props?.data?.hero?.template?.homeTemplate
    ? props?.data?.hero?.template?.homeTemplate
    : null
  const trust = props?.data?.trust?.template?.homeTemplate
  const threeBoxes = props?.data?.threeBoxes?.template?.homeTemplate
  const partner = props?.data?.partner?.template?.homeTemplate
  const displays = props?.data?.displays?.template?.homeTemplate
  const testimonials = props?.data?.testimonials?.edges
  const projects = props?.data?.projects?.edges
  const posts = props?.data?.posts?.edges
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <Hero data={hero} />
      <Trust data={trust} />
      <ThreeBoxes data={threeBoxes} />
      <Partner data={partner} />
      {displays.displayTestimonials && (
        <DisplayTestimonials data={testimonials} />
      )}
      {displays.displayProjects && <DisplayProjects data={projects} />}
      {displays.displayArticles && (
        <DisplayPosts data={posts} bgImg={displays.displayArticlesHeroImage} />
      )}
    </Layout>
  )
}

export const homeTempQuery = graphql`
  query homeTempPage($id: String!) {
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
    hero: wpPage(id: { eq: $id }) {
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

    trust: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            serviceTrustTitle
            serviceTrustContent
          }
        }
      }
    }

    threeBoxes: wpPage(id: { eq: $id }) {
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

    partner: wpPage(id: { eq: $id }) {
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

    displays: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Home {
          templateName
          homeTemplate {
            displayProjects
            displayTestimonials
            displayArticles
            displayArticlesHeroImage {
              altText
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

    projects: allWpProjectSingle(limit: 3) {
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

    posts: allWpPost(limit: 2) {
      edges {
        node {
          slug
          title
          post {
            articleExcerpt
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

export default Home
