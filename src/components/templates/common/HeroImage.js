import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const HeroImage = ({ bgImg }) => {
  const imageDisplay = getImage(bgImg.localFile.childImageSharp.gatsbyImageData)
  const imageAlt = bgImg.altText
  return (
    <DivStyled>
      <GatsbyImage
        image={imageDisplay}
        alt={imageAlt}
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </DivStyled>
  )
}

const DivStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

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
`

export default HeroImage
