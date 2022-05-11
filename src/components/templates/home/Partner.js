import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  B1White,
  colors,
  H1LightKhaki,
  H3White,
  standardWrapper,
} from "../../../styles/helpers"

const Partner = ({ data }) => {
  console.log("Partner data: ", data)
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="partner-title">
          <h2>{data.truePartnerTitle}</h2>
        </div>
        <div className="partner-para">
          <div
            className="partner-content"
            dangerouslySetInnerHTML={{ __html: data.truePartnerContent }}
          />
          <div
            className="partner-small-content"
            dangerouslySetInnerHTML={{ __html: data.truePartnerSmallContent }}
          />
        </div>
        <div className="partner-stats">
          {data.truePartnerStats.map((stat, index) => {
            const imageDisplay = getImage(
              stat.statIcon.localFile.childImageSharp.gatsbyImageData
            )
            const imageAlt = stat.statIcon.altText
            return (
              <StyledStat key={index}>
                <div className="stat-icon">
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div className="stat-content">
                  <p>{stat.statNumber.toLocaleString("en-US")}</p>
                  <p>{stat.statTitle}</p>
                </div>
              </StyledStat>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: ${colors.black};

  .wrapper {
    ${standardWrapper};
  }

  .partner-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1LightKhaki};
    }
  }

  .partner-para {
    width: 100%;

    .partner-content {
      p {
        ${H3White};
      }
    }

    .partner-small-content {
      p {
        ${B1White};
      }
    }
  }

  .partner-stats {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`

const StyledStat = styled.div`
  display: flex;
  align-items: center;
  width: calc(50%);

  .stat-icon {
    width: 25%;
    padding: 3rem;
  }

  .stat-content {
    width: 75%;

    p:first-of-type {
      ${H1LightKhaki};
      margin: 0;
    }

    p:last-of-type {
      ${H3White};
      margin: 0;
    }
  }
`

export default Partner
