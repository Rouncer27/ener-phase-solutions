import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B1White,
  colors,
  H1LightKhaki,
  H1White,
  H3White,
  standardWrapper,
} from "../../../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Partner = ({ data }) => {
  console.log("data: ", data)
  useEffect(() => {
    const items = document.querySelectorAll(".stat-number")
    const plus = document.querySelectorAll(".stat-plus")
      ? document.querySelectorAll(".stat-plus")
      : []

    console.log("plus", plus)

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#counter-trigger",
          markers: false,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .from(items, {
        textContent: 0,
        duration: 2.5,
        ease: "power1.in",
        snap: { textContent: 1 },
        stagger: {
          each: 0.25,
          onUpdate: function () {
            this.targets()[0].innerHTML = numberWithCommas(
              Math.ceil(this.targets()[0].textContent)
            )
          },
        },
      })
      .fromTo(plus, { autoAlpha: 0 }, { autoAlpha: 1 })

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#partner-trigger",
          markers: false,
          start: "top 100%",
          end: "bottom 0%",
          scrub: 1.5,
        },
      })
      .fromTo(
        `.partner-graphic`,
        {
          y: 400,
        },
        {
          ease: "none",
          y: 0,
        }
      )
  }, [])

  return (
    <StyledSection id="partner-trigger">
      <div className="wrapper">
        <div className="partner-title">
          <h2>{data.truePartnerTitle}</h2>
        </div>
        <div className="partner-para">
          <div
            className="partner-content"
            dangerouslySetInnerHTML={{ __html: data.truePartnerContent }}
          />
          <div
            className="partner-small-content"
            dangerouslySetInnerHTML={{ __html: data.truePartnerSmallContent }}
          />
        </div>
        <div className="partner-stats" id="counter-trigger">
          {data.truePartnerStats.map((stat, index) => {
            const imageDisplay = getImage(
              stat.statIcon.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = stat.statIcon.altText

            console.log("stat.statPlus", stat.statPlus)

            return (
              <StyledStat key={index}>
                <div className="stat-icon">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div className="stat-content">
                  <div className="stat-content__wrap">
                    <p className="stat-counter">
                      <span className="stat-number">{stat.statNumber}</span>
                      {stat.statPlus ? (
                        <span className="stat-plus">&#43;</span>
                      ) : null}
                    </p>
                  </div>
                  <p className="stat-title">{stat.statTitle}</p>
                </div>
              </StyledStat>
            )
          })}
        </div>
      </div>
      <div className="partner-graphic" />
      <span className="stat-plus" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: ${colors.black};

  .wrapper {
    ${standardWrapper};
  }

  .partner-graphic {
    position: absolute;
    top: 20rem;
    left: 0;
    width: 10rem;
    height: 31rem;
    background-color: rgba(148, 200, 61, 0.65);
  }

  .partner-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1White};
    }
  }

  .partner-para {
    width: 100%;
    padding-bottom: 5rem;

    .partner-content {
      p {
        ${H3White};
      }
    }

    .partner-small-content {
      p {
        ${B1White};
      }
    }
  }

  .partner-stats {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &::before,
    &::after {
      display: block;
      position: absolute;
      background-color: ${colors.colorSecondary};
      content: "";
    }

    &::before {
      width: 100%;
      top: 50%;
      height: 0.1rem;
      transform: translateY(-50%);
    }

    &::after {
      width: 0.1rem;
      top: 0%;
      bottom: 0%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const StyledStat = styled.div`
  display: flex;
  align-items: center;
  width: calc(50%);

  .stat-icon {
    width: 25%;
    padding: 3rem;
  }

  .stat-content {
    width: 75%;
    text-align: center;

    &__wrap {
      display: flex;
      justify-content: center;
      position: relative;
    }

    .stat-counter {
      ${H1LightKhaki};
      position: relative;
      margin: 0;
    }

    .stat-title {
      ${H3White};
      margin: 0;
    }

    .stat-plus {
      ${H1LightKhaki};
      padding-left: 1rem;
    }
  }
`

export default Partner
