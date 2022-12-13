import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { colors, H3GunMetal, standardWrapper } from "../../../styles/helpers"

const Logos = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.logosTitle}</h2>
        </div>
        <div className="logos">
          {data.logos.map((logo, index) => {
            const imageDisplay = getImage(
              logo.logo.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = logo.logo.altText
            return (
              <StyledLogo>
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </StyledLogo>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin: 2.5rem auto;

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H3GunMetal};
      color: ${colors.colorPrimary};
      text-transform: uppercase;
    }
  }

  .logos {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const StyledLogo = styled.div`
  width: calc(50%);

  @media (min-width: 768px) {
    width: calc(33.33333333%);
  }

  @media (min-width: 1025px) {
    width: calc(100% / 5);
    padding: 2rem 1rem;
  }
`

export default Logos
