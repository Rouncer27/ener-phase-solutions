import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import styled from "styled-components"
import {
  B1White,
  BigWrapper,
  Btn1One,
  H1SeaWeedGreen,
} from "../../../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const DisplayProjects = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#projects-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.project-card`,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 2,
          stagger: {
            each: 0.4,
          },
        }
      )
  }, [])

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="projects-title">
          <h2>Projects for Inspiration</h2>
        </div>
        <div id="projects-trigger" className="projects-wrapper">
          {data.map((project, index) => {
            const imageDisplay = getImage(
              project.node.project.featuredImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = project.node.project.featuredImage.altText
            return (
              <Project className="project-card" key={index}>
                <Link to={`/projects/${project.node.slug}`}>
                  <div className="project-image">
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </div>
                  <div className="project-card__title">
                    <p>{project.node.title}</p>
                    <p>{project.node.project.projectType}</p>
                  </div>
                </Link>
              </Project>
            )
          })}
        </div>
        <div className="projects-links">
          <Link to="/projects">View Projects</Link>
          <Link to="/contact-us">Start a Project</Link>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding-top: 5rem;

  .wrapper {
    ${BigWrapper};
  }

  .projects-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1SeaWeedGreen};
    }
  }

  .projects-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .projects-links {
    width: 100%;
    padding-top: 3.5rem;
    text-align: center;

    a {
      ${Btn1One};
      margin: 2rem;

      @media (min-width: 768px) {
        margin: auto 1rem;
      }
    }
  }
`

const Project = styled.div`
  position: relative;
  width: 100%;
  margin: 2.5rem auto;
  overflow: hidden;

  @media (min-width: 768px) {
    width: calc(33.333333% - 1rem);
    margin: 1rem 0.5rem;
  }

  .project-image {
    padding: relative;
    z-index: 1;
  }

  .project-card__title {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 2.3rem 1.8rem;
    background-color: rgba(54, 170, 99, 0.65);
    transform: translateY(100%);
    transition: all 0.3s ease-out;
    z-index: 10;

    p {
      ${B1White};
      margin: 0;
    }
  }

  &:hover {
    .project-card__title {
      transform: translateY(0%);
    }
  }
`

export default DisplayProjects
