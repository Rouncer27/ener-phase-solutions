import React, { useEffect } from "react"
import styled from "styled-components"
import {
  B1GunMetal,
  H1SeaWeedGreen,
  H3GunMetal,
  medWrapper,
} from "../../../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Values = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#values-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.values-title`,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
        }
      )

      .fromTo(
        `.value-item`,
        {
          autoAlpha: 0,
          y: 300,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 1.5,
          stagger: {
            each: 0.2,
          },
        },
        "start+=0.5"
      )
  }, [])

  return (
    <StyledSection>
      <div id="values-trigger" className="wrapper">
        <div className="values-title">
          <h2>{data.sideBySideContentTitle}</h2>
        </div>
        <div className="values">
          {data.sideBySideContentBlocks.map((block, index) => {
            return (
              <BlockStyle className="value-item" key={index}>
                <div>
                  <h3>{block.title}</h3>
                </div>
                <div dangerouslySetInnerHTML={{ __html: block.content }} />
              </BlockStyle>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .values {
    display: flex;
    flex-wrap: wrap;
  }

  .values-title {
    width: 100%;
    @media (min-width: 768px) {
      padding: 0 2rem;
    }

    h2 {
      ${H1SeaWeedGreen};
      font-weight: bold;
    }
  }
`

const BlockStyle = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50% - 4rem);
    margin: 2rem;
  }

  h3 {
    ${H3GunMetal};
  }

  p {
    ${B1GunMetal};
  }
`

export default Values
