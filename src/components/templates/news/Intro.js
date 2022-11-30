import React from "react"
import styled from "styled-components"
import {
  B1GunMetal,
  H1SeaWeedGreen,
  H3GunMetal,
  standardWrapper,
} from "../../../styles/helpers"

const Intro = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="intro-title">
          <h1>{data.newsIntroTitle}</h1>
          <h3>{data.newsIntroSubTitle}</h3>
        </div>
        <div
          className="intro-content"
          dangerouslySetInnerHTML={{ __html: data.newsIntroContent }}
        />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
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
    margin-top: 5rem;

    p {
      ${B1GunMetal}
    }
  }
`

export default Intro
