import React from "react"
import styled from "styled-components"
import { B1GunMetal, H1SeaWeedGreen, medWrapper } from "../../../styles/helpers"

const Trust = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="trust-title">
          <h2>{data.serviceTrustTitle}</h2>
        </div>
        <div
          className="trust-content"
          dangerouslySetInnerHTML={{ __html: data.serviceTrustContent }}
        ></div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .trust-title {
    width: 100%;

    h2 {
      ${H1SeaWeedGreen};
      font-weight: bold;
    }
  }

  .trust-content {
    width: 100%;
    max-width: 95rem;
    margin-right: auto;
    margin-left: 0;

    p {
      ${B1GunMetal};
    }
  }
`

export default Trust
