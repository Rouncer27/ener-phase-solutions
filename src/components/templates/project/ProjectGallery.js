import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectGallery = ({ data }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        {data.map((image, index) => {
          const imageDisplay = getImage(
            image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = image.altText
          return (
            <GalleryImage
              first={index === 0}
              last={index / 4 === 0}
              key={index}
            >
              <GatsbyImage
                image={imageDisplay}
                alt={imageAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </GalleryImage>
          )
        })}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin-top: 5rem;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`

const GalleryImage = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(100% / 3);
  }

  @media (min-width: 1025px) {
    width: calc((100% / 4) - 2rem);
    margin: auto 1rem;
  }
`

export default ProjectGallery
