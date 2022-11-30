import React, { useEffect } from "react"
import styled from "styled-components"

import HeroImage from "../common/HeroImage"

import { colors, H1LightKhaki, B1White } from "../../../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const PageHero = ({ data }) => {
  const bgImg = data.pageHeroImage

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#page-hero-tigger`,
          markers: false,
          start: "bottom 80%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        `.hero-content`,
        {
          duration: 1.5,
          autoAlpha: 0,
          x: -200,
        },
        {
          duration: 1.5,
          autoAlpha: 1,
          x: 0,
          ease: "power2.out",
        }
      )
  }, [])

  return (
    <SectionStyled id="page-hero-tigger">
      <div className="hero-content">
        <h2>{data.pageHeroTitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.pageHeroContent }} />
      </div>
      {bgImg && <HeroImage bgImg={bgImg} />}
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  width: 100%;
  padding-top: 20rem;
  z-index: 100;

  @media (min-width: 768px) {
    height: 39vw;
  }

  .hero-content {
    position: relative;
    padding: 4rem;
    background-color: ${colors.colorPrimary};
    border-radius: 0.6rem;
    z-index: 10;

    @media (min-width: 768px) {
      width: 55rem;
      position: absolute;
      bottom: -20rem;
      left: 10vw;
    }

    h2 {
      ${H1LightKhaki};
      margin-top: 0;
    }

    p {
      ${B1White};

      &:last-of-type {
        margin: 0;
      }
    }
  }
`

export default PageHero
