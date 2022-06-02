import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B1GunMetal,
  Btn1One,
  colors,
  H4GunMetal,
  medWrapper,
} from "../../../styles/helpers"
import { Link } from "gatsby"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ThreeBoxes = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#three-box-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.box-item`,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 2,
          stagger: {
            each: 0.4,
          },
        }
      )
  }, [])
  return (
    <SectionStyled id="three-box-trigger">
      <div className="wrapper">
        {data.threeBoxBoxes.map((box, index) => {
          const imageDisplay = getImage(
            box.image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = box.image.altText
          return (
            <BoxStyled className="box-item" key={index}>
              <Link to={`/${box.slug}`}>
                <div>
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div className="box-text">
                  <div>
                    <h2>{box.title}</h2>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: box.content }} />
                  <div className="button">
                    <button type="button">{box.buttonText}</button>
                  </div>
                </div>
              </Link>
            </BoxStyled>
          )
        })}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }
`

const BoxStyled = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 2.5rem auto;
  border-radius: 0.5rem;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);

  @media (min-width: 768px) {
    width: calc(33.33333333% - 2rem);
    margin: 1rem;
  }

  @media (min-width: 1025px) {
    width: calc(33.33333333% - 2rem);
    margin: 1rem;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    height: 100%;
  }

  .box-text {
    padding: 3rem 2.5rem 12.5rem;
    height: 100%;
    transition: all 0.3s ease-out;
    border: solid 0.3rem transparent;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    h2 {
      ${H4GunMetal};
    }

    p {
      ${B1GunMetal};

      &:last-of-type {
        margin: 0;
      }
    }

    .button {
      position: absolute;
      right: 0;
      bottom: 3rem;
      left: 2.5rem;

      button {
        ${Btn1One};
      }
    }
  }

  &:hover {
    a {
      .box-text {
        border: solid 0.3rem ${colors.colorAccent};
      }
    }
  }
`

export default ThreeBoxes
