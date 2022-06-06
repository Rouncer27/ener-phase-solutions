import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1GunMetal,
  B1White,
  colors,
  H3White,
  H4GunMetal,
  H4White,
  medWrapper,
} from "../../../styles/helpers"

const Team = ({ data, setModalActive, setActiveContent }) => {
  const imageBGDisplay = getImage(
    data.teamBackgroundImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageBGAlt = data.teamBackgroundImage.altText

  const [leaderWidth, setLeaderWidth] = useState(150)
  const [operationalWidth, setOperationalWidth] = useState(150)

  useEffect(() => {
    const leaderTitle = document.querySelector(".leadership-team__title h2")
    const operationalTitle = document.querySelector(
      ".operational-team__title h2"
    )
    setLeaderWidth(leaderTitle.offsetWidth)
    setOperationalWidth(operationalTitle.offsetWidth)
  }, [])
  return (
    <StyledSection
      leaderWidth={leaderWidth}
      operationalWidth={operationalWidth}
    >
      <div className="wrapper">
        <div className="leadership-team">
          <div className="leadership-team__title">
            <h2>Leadership team</h2>
          </div>
          {data.leadershipTeamMembers.map((leader, index) => {
            const imageDisplay = getImage(
              leader.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = leader.image.altText
            return (
              <LeadershipTeam key={index}>
                <div className="leader-image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div className="leader-content">
                  <h3>
                    <span>{leader.firstName} </span>
                    <span>{leader.lastName}</span>
                  </h3>
                  <p>{leader.title}</p>
                  <button
                    onClick={() => {
                      setModalActive(true)
                      setActiveContent({
                        name: `${leader.firstName} ${leader.lastName}`,
                        title: leader.title,
                        bio: leader.bio,
                        imageSrc: imageDisplay,
                        imageAlt: imageAlt,
                      })
                    }}
                    type="button"
                  >
                    Meet {leader.firstName}
                  </button>
                </div>
              </LeadershipTeam>
            )
          })}
        </div>
        <div className="operational-team">
          <div className="operational-team__title">
            <h2>Leadership team</h2>
          </div>
          {data.operationalTeamMembers.map((operational, index) => {
            const imageDisplay = getImage(
              operational.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = operational.image.altText
            return (
              <OperationalMembers key={index}>
                <div className="operational-image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div className="operational-content">
                  <h3>
                    <span>{operational.firstName} </span>
                    <span>{operational.lastName}</span>
                  </h3>
                  <p>{operational.title}</p>
                  <button
                    onClick={() => {
                      setModalActive(true)
                      setActiveContent({
                        name: `${operational.firstName} ${operational.lastName}`,
                        title: operational.title,
                        bio: operational.bio,
                        imageSrc: imageDisplay,
                        imageAlt: imageAlt,
                      })
                    }}
                    type="button"
                  >
                    Read More
                  </button>
                </div>
              </OperationalMembers>
            )
          })}
        </div>
      </div>
      <div className="overlay" />
      <div className="background-image">
        <GatsbyImage
          image={imageBGDisplay}
          alt={imageBGAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  z-index: 10;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100%);
      height: 100%;

      img {
        width: 100% !important;
      }
    }
  }
  .wrapper {
    ${medWrapper};
    position: relative;
    padding-top: 5rem;
    padding-bottom: 5rem;
    z-index: 100;

    @media (min-width: 768px) {
      padding-top: 25rem;
      padding-bottom: 12.5rem;
    }
  }

  .leadership-team {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &__title {
      width: 100%;

      @media (min-width: 768px) {
        width: auto;
        position: absolute;
        top: ${props => props.leaderWidth + 20}px;
        left: -2rem;
        transform-origin: left center;
        transform: rotate(-90deg);
      }

      @media (min-width: 1025px) {
        left: -2rem;
      }

      h2 {
        ${H3White};
      }
    }
  }

  .operational-team {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &__title {
      width: 100%;

      @media (min-width: 768px) {
        width: auto;
        position: absolute;
        top: ${props => props.leaderWidth + 20}px;
        left: -2rem;
        transform-origin: left center;
        transform: rotate(-90deg);
      }

      @media (min-width: 1025px) {
        left: -2rem;
      }

      h2 {
        ${H3White};
      }
    }
  }
`

const LeadershipTeam = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  background-color: ${colors.colorSecondary};

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
    margin: 2rem 1rem;
  }

  .leader-content {
    width: 100%;
    padding: 2rem;
    text-align: center;

    h3 {
      ${H4GunMetal};
      text-transform: uppercase;
    }

    p {
      ${B1GunMetal};
      margin: 0;
      text-transform: uppercase;
    }

    button {
      ${B1GunMetal};
      margin: 0;
      border: none;
      border-bottom: 0.1rem solid ${colors.colorTertiary};
      background-color: transparent;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`

const OperationalMembers = styled.div`
  width: calc(100% - 1rem);
  background-color: ${colors.colorPrimary};

  @media (min-width: 768px) {
    width: calc(33.333333% - 2rem);
    margin: 2rem 1rem;
  }

  .operational-content {
    width: 100%;
    padding: 2rem;
    text-align: center;

    h3 {
      ${H4White};
      text-transform: uppercase;
    }

    p {
      ${B1White};
      margin: 0;
      text-transform: uppercase;
    }

    button {
      ${B1White};
      margin: 0;
      border: none;
      border-bottom: 0.1rem solid ${colors.white};
      background-color: transparent;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`

export default Team
