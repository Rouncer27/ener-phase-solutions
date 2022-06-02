import React, { useEffect } from "react"
import styled from "styled-components"
import { B1GunMetal, H1SeaWeedGreen, medWrapper } from "../../../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Trust = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#trust-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.trust-title`,
        {
          autoAlpha: 0,
          x: -100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          x: 0,
          duration: 1.5,
        }
      )
      .fromTo(
        `.trust-content`,
        {
          autoAlpha: 0,
          y: 100,
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
    <SectionStyled id="trust-trigger">
      <div className="wrapper">
        <div className="trust-title">
          <h2>{data.serviceTrustTitle}</h2>
        </div>
        <div
          className="trust-content"
          dangerouslySetInnerHTML={{ __html: data.serviceTrustContent }}
        ></div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .trust-title {
    width: 100%;

    h2 {
      ${H1SeaWeedGreen};
      font-weight: bold;
    }
  }

  .trust-content {
    width: 100%;
    max-width: 95rem;
    margin-right: auto;
    margin-left: 0;

    p {
      ${B1GunMetal};
    }
  }
`

export default Trust
