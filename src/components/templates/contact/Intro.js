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
          <h1>{data.contactIntroTitle}</h1>
          <h3>{data.contactIntroSubTitle}</h3>
        </div>
        <div
          className="intro-content"
          dangerouslySetInnerHTML={{ __html: data.contactIntroContent }}
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
      margin-bottom: 0;
    }

    h3 {
      ${H3GunMetal};
      margin-top: 0;
    }
  }

  .intro-content {
    width: 100%;
    max-width: 75rem;
    margin-top: 2.5rem;
    margin-right: auto;
    margin-left: 0;

    p {
      ${B1GunMetal}
    }
  }
`

export default Intro
