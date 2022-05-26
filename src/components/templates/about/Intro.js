import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, BigWrapper, colors, H1White } from "../../../styles/helpers"

const Intro = ({ data }) => {
  const imageTopDisplay = getImage(
    data.introWithImagesTop.localFile.childImageSharp.gatsbyImageData
  )
  const imageTopAlt = data.introWithImagesTop.altText
  const imageBotDisplay = getImage(
    data.introWithImagesBottom.localFile.childImageSharp.gatsbyImageData
  )
  const imageBotAlt = data.introWithImagesBottom.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="intro-content">
          <div className="intro-content__title">
            <h2>{data.introWithImagesTitle}</h2>
          </div>
          <div className="intro-content__paragraphs">
            <div
              dangerouslySetInnerHTML={{ __html: data.introWithImagesContent }}
            />
          </div>
        </div>
        <div className="intro-images">
          <div className="intro-images__image intro-images__image--top">
            <GatsbyImage
              image={imageTopDisplay}
              alt={imageTopAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="intro-images__image intro-images__image--bot">
            <GatsbyImage
              image={imageBotDisplay}
              alt={imageBotAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${BigWrapper};
  }
  .intro-content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
      margin-right: 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(60% - 4rem);
      margin-right: 4rem;
    }

    &__title {
      padding: 2rem;
      background-color: ${colors.colorAccent};

      @media (min-width: 768px) {
        padding: 3rem 2rem 3rem 2rem;
      }

      @media (min-width: 1025px) {
        padding: 5rem 6rem 5rem 10rem;
      }

      h2 {
        ${H1White};
      }
    }

    &__paragraphs {
      width: 100%;
      padding: 2rem 0;

      @media (min-width: 768px) {
        padding: 5rem 1rem 2rem 1rem;
      }

      @media (min-width: 1025px) {
        padding: 5rem 6rem 2rem 10rem;
      }

      p {
        ${B1Black};
      }
    }
  }

  .intro-images {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      width: calc(40%);
    }

    &__image {
      &--top {
        margin-bottom: 3rem;
      }
    }
  }
`

export default Intro
