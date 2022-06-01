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
          <h1>{data.pageIntroTitle}</h1>
          {data.pageIntroSubTitle && <h3>{data.pageIntroSubTitle}</h3>}
        </div>
        {data.pageIntroContent && (
          <div
            className="intro-content"
            dangerouslySetInnerHTML={{ __html: data.pageIntroContent }}
          />
        )}
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
    margin-top: 5rem;

    p {
      ${B1GunMetal}
    }
  }
`

export default Intro
