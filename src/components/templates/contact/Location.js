import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, H4GunMetal, medWrapper } from "../../../styles/helpers"

const Location = ({ data }) => {
  console.log("Location: ", data)
  const imageDisplay = getImage(
    data.locationImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.locationImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="location-image">
          <GatsbyImage
            image={imageDisplay}
            alt={imageAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="location-content">
          <div dangerouslySetInnerHTML={{ __html: data.locationAddress }} />
          <div className="location-content__contact">
            <p>
              <a href={`tel:+1${data.locationPhone1}`}>{data.locationPhone1}</a>
            </p>
            <p>
              <a href={`tel:+1${data.locationPhone2}`}>{data.locationPhone2}</a>
            </p>
            <p>
              <a href={`mailto:${data.locationEmail}`}>{data.locationEmail}</a>
            </p>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  .wrapper {
    ${medWrapper};
  }

  .location-image {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }
  }

  .location-content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
      padding: 0 4rem;
    }

    p {
      ${H4GunMetal};
    }

    &__contact {
      p {
        margin-bottom: 0.5rem;
      }
    }

    a {
      ${H4GunMetal};

      &:hover {
        color: ${colors.colorSecondary};
      }
    }
  }
`

export default Location
