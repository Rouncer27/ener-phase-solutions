import React, { useEffect } from "react"
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
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Hero = ({ data }) => {
  const bgImg = data.heroImage
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#hero-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")

      .fromTo(
        `.title-small__one`,
        {
          autoAlpha: 0,
          y: -100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 1.5,
        },
        "start+=0"
      )

      .fromTo(
        `.title-small__two`,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 1,
        },
        "start+=0"
      )

      .fromTo(
        `.project-title`,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          duration: 1.5,
        },
        "start+=0.3"
      )
      .to(`.project-title`, {
        x: 300,
        autoAlpha: 0,
      })

      .fromTo(
        `.problem-title`,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          duration: 1.5,
        }
      )
      .to(`.problem-title`, {
        x: 300,
        autoAlpha: 0,
      })
      .add("next")

      .fromTo(
        `.title-large__one`,
        {
          autoAlpha: 0,
          x: -100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1,
        },
        "next+=0"
      )
      .fromTo(
        `.title-large__two`,
        {
          autoAlpha: 0,
          x: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1,
        },
        "next+=0"
      )

    // .fromTo(
    //   `.hero-top-box`,
    //   {
    //     autoAlpha: 0,
    //     y: 100,
    //   },
    //   {
    //     autoAlpha: 1,
    //     ease: "power2.out",
    //     y: 0,
    //     duration: 1,
    //   },
    //   "start+=1.2"
    // )
  }, [])
  return (
    <HeroContentSection id="hero-trigger">
      <StyledSection>
        {bgImg && <HeroImage bgImg={bgImg} />}

        <div className="home-hero-title">
          <h1>
            <span className="title title-small title-small__one">Your</span>
            <span className="title title-large title-large__one">
              Power System
            </span>
            <span className="title title-large title-large__two">
              Reliability
            </span>
            <span className="title title-small title-small__two">
              is our priority
            </span>
            <span className="project-title">Project</span>
            <span className="problem-title">Problem</span>
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
    top: 15rem;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;

    .problem-title,
    .project-title {
      ${HomeHeaderWhite};
      position: absolute;
      top: 20%;
      left: 30%;
      visibility: hidden;
      opacity: 0;
      text-transform: uppercase;
    }

    h1 {
      width: 85rem;
      margin: 10rem auto;

      .title {
        display: block;
      }
      .title-small {
        ${H1LightKhaki};
        visibility: hidden;
        opacity: 0;

        &__one {
          position: absolute;
          opacity: 0;
          top: 12.5%;
          left: 12.5%;
        }

        &__two {
          padding-left: 30rem;
        }
      }

      .title-large {
        ${HomeHeaderWhite};
        text-transform: uppercase;
        visibility: hidden;
        opacity: 0;
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
