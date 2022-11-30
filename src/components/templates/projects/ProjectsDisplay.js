import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import {
  B1White,
  Btn1Two,
  colors,
  H3White,
  medWrapper,
} from "../../../styles/helpers"

import HeroImage from "../common/HeroImage"

const getData = graphql`
  {
    projects: allWpProjectSingle {
      edges {
        node {
          project {
            projectType
            projectCompletion
            featuredImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
          date
          title
          slug
          id
        }
      }
    }
  }
`

const ProjectsDisplay = () => {
  const proData = useStaticQuery(getData)
  const projects = proData.projects.edges
  return (
    <StyledSection>
      <div className="wrapper">
        {projects.map(pro => {
          return (
            <ProjectCard key={pro.node.id}>
              <Link to={`/projects/${pro.node.slug}`}>
                <div className="project-content">
                  <h2>{pro.node.title}</h2>
                  <p>{pro.node.project.projectCompletion}</p>
                  <button type="button">View Project</button>
                </div>
                {pro.node.project.featuredImage && (
                  <HeroImage bgImg={pro.node.project.featuredImage} />
                )}
              </Link>
            </ProjectCard>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }
`

const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem auto;
  height: 45rem;

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
    margin: 2rem 1rem;
    height: 50rem;
  }

  @media (min-width: 1025px) {
    width: calc(50% - 2rem);
    margin: 3rem 1rem;
    height: 60rem;
  }

  a {
    &::after {
      position: absolute;
      top: -6.5rem;
      left: -1.5rem;
      width: 0;
      height: 0;
      transform: rotate(45deg);
      transform-origin: center center;
      transition: all 0.3s ease-out;
      border-top: 10rem solid transparent;
      border-bottom: 10rem solid transparent;
      border-right: 10rem solid rgba(148, 200, 61, 1);
      opacity: 0;
      z-index: 100;
      content: "";
    }
  }

  .project-content {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 7rem 6rem;
    background-color: rgba(0, 0, 0, 0.75);
    border-top: 0.5rem solid transparent;
    transition: all 0.3s ease-out;
    z-index: 100;

    h2 {
      ${H3White};
      text-transform: uppercase;
    }

    p {
      ${B1White};
      margin-bottom: 5rem;
      text-transform: uppercase;
    }

    button {
      ${Btn1Two};
      background-color: transparent;
      text-transform: uppercase;
    }
  }

  a:hover {
    .project-content {
      border-top: 0.5rem solid ${colors.colorSecondary};
    }
    &::after {
      opacity: 0.75;
    }
  }
`

export default ProjectsDisplay
