import React from "react"
import styled from "styled-components"
import {
  colors,
  H1LightKhaki,
  H2White,
  H3GunMetal,
  HomeHeaderWhite,
  standardWrapper,
} from "../../../styles/helpers"

import HeroImage from "../common/HeroImage"

const Hero = ({ data }) => {
  const bgImg = data.heroImage
  return (
    <HeroContentSection>
      <StyledSection>
        {bgImg && <HeroImage bgImg={bgImg} />}

        <div className="home-hero-title">
          <h1>
            <span className="title title-small">Your</span>
            <span className="title title-large">Power System</span>
            <span className="title title-large">Reliability</span>
            <span className="title title-small">is our priority</span>
          </h1>
        </div>
        <div className="home-hero-overlay" />
      </StyledSection>

      <div className="wrapper">
        <div className="hero-top-box">
          <div dangerouslySetInnerHTML={{ __html: data.heroBoxContent }} />
        </div>
        <div className="hero-bottom-content">
          <div dangerouslySetInnerHTML={{ __html: data.heroBottomContent }} />
        </div>
      </div>
    </HeroContentSection>
  )
}

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 45rem;

  @media (min-width: 768px) {
    height: 70rem;
  }

  @media (min-width: 1025px) {
    height: 85rem;
  }

  .home-hero-title {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;

    h1 {
      width: 85rem;
      margin: 10rem auto;
      .title {
        display: block;
      }
      .title-small {
        ${H1LightKhaki};
      }

      .title-large {
        ${HomeHeaderWhite};
        text-transform: uppercase;
      }
    }
  }

  .home-hero-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: linear-gradient(188deg, #000 5%, transparent 100%);
    z-index: 5;
  }
`

const HeroContentSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .hero-top-box {
    position: relative;
    width: 100%;
    margin-top: -10rem;
    margin-right: auto;
    margin-bottom: 5rem;
    margin-left: auto;
    padding: 4rem;
    background-color: ${colors.colorAccent};
    border-radius: 0.6rem;
    box-shadow: 0.6rem 1rem 1.2rem 0 rgba(0, 0, 0, 0.16);
    z-index: 10;

    @media (min-width: 1025px) {
      max-width: 90rem;
    }

    p {
      ${H2White};
      text-align: center;

      &:last-of-type {
        margin: 0;
      }
    }
  }

  .hero-bottom-content {
    text-align: center;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 1025px) {
      max-width: 90rem;
    }

    p {
      ${H3GunMetal};
    }
  }
`

export default Hero
