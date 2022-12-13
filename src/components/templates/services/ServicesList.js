import React, { useEffect } from "react"
import styled from "styled-components"
import {
  H2DarkGreen,
  H4GunMetal,
  standardWrapper,
} from "../../../styles/helpers"

import quotes from "../../../images/graphic-one.png"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ServicesList = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#list-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.services-list li span`,
        {
          autoAlpha: 0,
          scale: 3,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          scale: 1,
          duration: 1,
          stagger: {
            each: 0.25,
          },
        }
      )
  }, [])

  return (
    <StyledSection>
      <div id="list-trigger" className="wrapper">
        <div className="services-title">
          <h2>{data.servicesListTitle}</h2>
          {/* <div className="graphic">
            <img src={quotes} alt="" />
          </div> */}
        </div>
        <ul className="services-list">
          {data.servicesListItems.map((item, index) => (
            <li key={index}>
              <span>{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }

  @media (min-width: 1025px) {
    padding: 0 0 8rem;
  }

  .graphic {
    position: absolute;
    top: 3rem;
    left: -7rem;
    width: 4rem;
  }

  .wrapper {
    ${standardWrapper};
    max-width: 55rem !important;
  }

  .services-title {
    position: relative;
    width: 100%;

    h2 {
      ${H2DarkGreen};
    }
  }

  .services-list {
    width: 100%;

    li {
      ${H4GunMetal};
      margin-bottom: 0.75rem;

      span {
        display: inline-block;
        transform-origin: center center;
      }
    }
  }
`

export default ServicesList
