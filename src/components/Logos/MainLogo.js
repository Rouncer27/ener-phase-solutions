import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const getData = graphql`
  {
    logo: wp {
      acfOptionsSiteWideSettings {
        siteWideSettings {
          mainLogo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }
      }
    }
  }
`

const MainLogo = () => {
  const data = useStaticQuery(getData)
  const image = getImage(
    data?.logo?.acfOptionsSiteWideSettings?.siteWideSettings?.mainLogo
      ?.localFile?.childImageSharp?.gatsbyImageData
  )
  const logoAlt =
    data?.logo?.acfOptionsSiteWideSettings?.siteWideSettings?.mainLogo?.altText
  return (
    <MainLogoStyled>
      <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
    </MainLogoStyled>
  )
}

const MainLogoStyled = styled.div`
  width: 100%;
  height: 100%;
`

export default MainLogo
