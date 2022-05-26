import React from "react"
import styled from "styled-components"
import {
  B1Black,
  B1GunMetal,
  H1SeaWeedGreen,
  H3Black,
  H3GunMetal,
  medWrapper,
} from "../../../styles/helpers"

const Values = ({ data }) => {
  console.log("Values: ", data)
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="values-title">
          <h2>{data.sideBySideContentTitle}</h2>
        </div>
        <div className="values">
          {data.sideBySideContentBlocks.map((block, index) => {
            return (
              <BlockStyle key={index}>
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
