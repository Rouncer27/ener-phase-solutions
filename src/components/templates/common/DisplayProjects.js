import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { BigWrapper, Btn1One, H1SeaWeedGreen } from "../../../styles/helpers"

const DisplayProjects = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="projects-title">
          <h2>Projects for Inspiration</h2>
        </div>
        <div className="projects-wrapper">
          {data.map((project, index) => {
            const imageDisplay = getImage(
              project.node.project.featuredImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = project.node.project.featuredImage.altText
            return (
              <Project key={index}>
                <Link to={`/projects/${project.node.slug}`}>
                  <div>
                    <GatsbyImage
                      image={imageDisplay}
                      alt={imageAlt}
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                    />
                  </div>
                  <div>
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
    justify-content: center;
  }

  .projects-links {
    width: 100%;
    text-align: center;

    a {
      ${Btn1One};
      margin: auto 1rem;
    }
  }
`

const Project = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(33.333333% - 1rem);
    margin: 1rem 0.5rem;
  }
`

export default DisplayProjects
