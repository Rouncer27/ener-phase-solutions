import React from "react"
import styled from "styled-components"

import HeroImage from "../common/HeroImage"

const PageHero = ({ data }) => (
  <SectionStyled>{data && <HeroImage bgImg={data} />}</SectionStyled>
)

const SectionStyled = styled.section`
  position: relative;
  width: 100%;
  padding-top: 20rem;
  z-index: 100;

  @media (min-width: 768px) {
    height: 39vw;
  }
`

export default PageHero
