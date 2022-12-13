import React, { useState } from "react"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Intro from "../components/templates/about/Intro"
import Values from "../components/templates/about/Values"
import PageHero from "../components/templates/about/PageHero"
import Team from "../components/templates/about/Team"
import SideContent from "../components/templates/about/SideContent"
import Logos from "../components/templates/about/Logos"
import OurClients from "../components/templates/about/OurClients"
import { colors, H4GunMetal, B1GunMetal } from "../styles/helpers"

const breatheAnimation = keyframes`
 0% { opacity: 0; top: 100%; }
 100% { opacity: 1; top: 50%; }
`

const PageMain = styled.div`
  position: relative;
`

const PageBlur = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => (props.active ? "50000000" : "-1")};
  ${props => (props.active ? "filter: blur(5px) grayscale(50%);" : null)};
`

const PageClear = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => (props.active ? "500000" : "-1")};
`

const MemberModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 35rem;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  background-color: ${colors.white};
  animation-name: ${breatheAnimation};
  animation-duration: 0.5s;
  z-index: 100000000000;

  @media (min-width: 375px) {
    width: 37.5rem;
  }

  @media (min-width: 450px) {
    width: 45rem;
  }

  @media (min-width: 768px) {
    width: 55rem;
  }

  @media (min-width: 1025px) {
    width: 40vw;
  }

  .modal-image {
    width: 100%;
    margin: auto;
  }

  .modal-content {
    width: 100%;
    padding: 2rem;
    border-top: 0.4rem solid ${colors.colorSecondary};
    text-align: center;

    @media (min-width: 768px) {
      padding: 2rem 4rem;
    }

    @media (min-width: 1025px) {
      padding: 2rem 5.5rem;
    }

    h3 {
      ${H4GunMetal};
      text-transform: uppercase;
    }

    h4 {
      ${B1GunMetal};
    }

    p {
      ${B1GunMetal};
    }
  }

  .close-button {
    position: absolute;
    top: 2rem;
    right: 2rem;

    button {
      ${B1GunMetal};
      display: block;
      width: 3rem;
      height: 3rem;
      margin: 0;
      border: solid 0.1rem ${colors.colorTertiary};
      border-radius: 50%;
      background-color: ${colors.black};
      transition: all 0.3s ease;
      color: ${colors.white};
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        background-color: ${colors.colorSecondary};
        border-color: ${colors.colorPrimary};
        color: ${colors.colorPrimary};
      }
    }
  }
`

const About = props => {
  const { seoInfo } = props.data
  const [modalActive, setModalActive] = useState(false)
  const [activeContent, setActiveContent] = useState({
    name: "",
    title: "",
    bio: "",
    imageSrc: "",
    imageAlt: "",
  })

  return (
    <PageMain>
      <PageBlur active={modalActive}>
        <Layout>
          <Seo
            title={seoInfo.seoFields.swbThemeMetaTitle}
            description={seoInfo.seoFields.swbThemeDescription}
            //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
            location={props.location.pathname}
          />
          <Intro data={props.data.intro.template.aboutTemplate} />
          <Values data={props.data.values.template.aboutTemplate} />
          <PageHero data={props.data.pageHero.template.aboutTemplate} />
          <Team
            data={props.data.team.template.aboutTemplate}
            modalActive={modalActive}
            setModalActive={setModalActive}
            setActiveContent={setActiveContent}
          />
          <SideContent data={props.data.sideContent.template.aboutTemplate} />
          <Logos data={props.data.logos.template.aboutTemplate} />
          <OurClients data={props.data.ourClients.template.aboutTemplate} />
        </Layout>
      </PageBlur>

      {modalActive && (
        <MemberModal className="team-modal">
          <div className="modal-image">
            <GatsbyImage
              image={activeContent.imageSrc}
              alt={activeContent.imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="modal-content">
            <h3>{activeContent.name}</h3>
            <h4>{activeContent.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: activeContent.bio }} />
          </div>
          <div className="close-button">
            <button onClick={() => setModalActive(false)}>&#10005;</button>
          </div>
        </MemberModal>
      )}
      <PageClear onClick={() => setModalActive(false)} active={modalActive} />
    </PageMain>
  )
}

export const aboutTempQuery = graphql`
  query aboutTempPage($id: String!) {
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
            teamBackgroundImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
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

    logos: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            logosTitle
            logos {
              logo {
                altText
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(width: 1000)
                  }
                }
              }
              url
            }
          }
        }
      }
    }

    ourClients: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            clientsListsContent
            clientsListsTitle
            clientsLists {
              title
              clients {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`

export default About
