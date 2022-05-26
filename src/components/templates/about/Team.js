import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1GunMetal,
  colors,
  H3White,
  H4GunMetal,
  medWrapper,
} from "../../../styles/helpers"

const Team = ({ data }) => {
  console.log("Team: ", data)
  const [leaderWidth, setLeaderWidth] = useState(150)

  useEffect(() => {
    const leaderTitle = document.querySelector(".leadership-team__title h2")
    setLeaderWidth(leaderTitle.offsetWidth)
  }, [])
  return (
    <StyledSection leaderWidth={leaderWidth}>
      <div className="wrapper">
        <div className="leadership-team">
          <div className="leadership-team__title">
            <h2>Leadership team</h2>
          </div>
          {data.leadershipTeamMembers.map((leader, index) => {
            const imageDisplay = getImage(
              leader.image.localFile.childImageSharp.gatsbyImageData
            )
            const imageTopAlt = leader.image.altText
            return (
              <LeadershipTeam key={index}>
                <div className="leader-image">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageTopAlt}
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
                  <button type="button">Meet {leader.firstName}</button>
                </div>
              </LeadershipTeam>
            )
          })}
        </div>
      </div>
      <div className="overlay" />
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
  .wrapper {
    ${medWrapper};
    position: relative;
    padding-top: 25rem;
    z-index: 100;
  }

  .leadership-team {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &__title {
      position: absolute;
      top: ${props => props.leaderWidth + 20}px;
      left: -2rem;
      transform-origin: left center;
      transform: rotate(-90deg);

      h2 {
        ${H3White};
      }
    }
  }
`

const LeadershipTeam = styled.div`
  width: 100%;
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

export default Team
