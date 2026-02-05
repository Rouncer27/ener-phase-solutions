import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { standardWrapper } from "../../../styles/helpers"

const Neta = ({ data }) => {
  const imageDisplay = getImage(
    data.netaLogo.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.netaLogo.altText
  return (
    <StyledLogo>
      <div className="wrapper">
        <div className="neta-logo">
          <div className="neta-logo-wrapper">
            <a target="_blank" rel="noreferrer" href={data.netaWebsite}>
              <GatsbyImage
                image={imageDisplay}
                alt={imageAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </a>
          </div>
        </div>
      </div>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .neta-logo {
    width: 100%;

    &-wrapper {
      max-width: 40rem;
      margin: 2rem auto;
    }
  }
`

export default Neta
