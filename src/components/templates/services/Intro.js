import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1GunMetal,
  colors,
  H1White,
  medWrapper,
} from "../../../styles/helpers"

const Intro = ({ data }) => {
  console.log("Intro: ", data)
  const imageDisplay = getImage(
    data.servicesIntroImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.servicesIntroImage.altText
  return (
    <StyledSection>
      <div className="intro-title">
        <div className="intro-title__inner">
          <h2>{data.servicesIntroTitle}</h2>
        </div>
      </div>
      <div className="wrapper">
        <div className="intro-bottom">
          <div className="intro-bottom__image">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div
            className="intro-bottom__content"
            dangerouslySetInnerHTML={{
              __html: data.servicesIntroContent,
            }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .intro-title {
    width: 100%;
    background-color: ${colors.colorAccent};

    &__inner {
      padding: 4rem 2rem;
      @media (min-width: 768px) {
        padding: 5rem;
      }

      h2 {
        ${H1White};
        max-width: 112rem;
        margin: auto;
      }
    }
  }

  .intro-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding-top: 2rem;

    @media (min-width: 768px) {
      padding-top: 5rem;
    }

    &__image {
      width: calc(100%);
      padding-bottom: 2.5rem;

      @media (min-width: 768px) {
        width: calc(50% - 1rem);
        margin-right: 1rem;
        padding-bottom: 0;
      }

      @media (min-width: 1025px) {
        width: calc(50% - 3.5rem);
        margin-right: 3.5rem;
      }
    }

    &__content {
      width: calc(100%);

      @media (min-width: 768px) {
        width: calc(50% - 1rem);
        margin-left: 1rem;
      }

      @media (min-width: 1025px) {
        width: calc(50% - 3.5rem);
        margin-left: 3.5rem;
      }

      p {
        ${B1GunMetal};
      }
    }
  }
`

export default Intro
