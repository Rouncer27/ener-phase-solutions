import React from "react"
import styled from "styled-components"
import {
  B1GunMetal,
  H1SeaWeedGreen,
  H3GunMetal,
  medWrapper,
} from "../../../styles/helpers"

const Intro = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="intro-title">
          <h1>{data.projectsIntroTitle}</h1>
          <h3>{data.projectsIntroSubTitle}</h3>
        </div>
        <div
          className="intro-content"
          dangerouslySetInnerHTML={{ __html: data.projectsIntroContent }}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .intro-title {
    width: 100%;

    h1 {
      ${H1SeaWeedGreen};
    }

    h3 {
      ${H3GunMetal};
    }
  }

  .intro-content {
    width: 100%;
    margin-top: 5rem;

    p {
      ${B1GunMetal}
    }
  }
`

export default Intro
