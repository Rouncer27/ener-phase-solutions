import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, BigWrapper, colors, H1White } from "../../../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Intro = ({ data }) => {
  const imageTopDisplay = getImage(
    data.introWithImagesTop.localFile.childImageSharp.gatsbyImageData
  )
  const imageTopAlt = data.introWithImagesTop.altText
  const imageBotDisplay = getImage(
    data.introWithImagesBottom.localFile.childImageSharp.gatsbyImageData
  )
  const imageBotAlt = data.introWithImagesBottom.altText

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#about-intro-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")

      .fromTo(
        `.intro-content__title`,
        {
          autoAlpha: 0,
          x: -300,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1.5,
        },
        "start+=0"
      )

      .fromTo(
        `.intro-content__paragraphs`,
        {
          autoAlpha: 0,
          y: 300,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 1.5,
        },
        "start+=0.3"
      )

      .fromTo(
        `.intro-images__image--top`,
        {
          autoAlpha: 0,
          x: 300,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1.5,
        },
        "start+=0"
      )
      .fromTo(
        `.intro-images__image--bot`,
        {
          autoAlpha: 0,
          y: 200,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 1.5,
        },
        "start+=0.3"
      )
  }, [])

  return (
    <StyledSection>
      <div id="about-intro-trigger" className="wrapper">
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
