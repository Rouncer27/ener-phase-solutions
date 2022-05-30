import React from "react"
import styled from "styled-components"
import HeroImage from "../common/HeroImage"

const PostHeroImage = ({ data }) => (
  <SectionStyled>{data && <HeroImage bgImg={data} />}</SectionStyled>
)

const SectionStyled = styled.section`
  position: relative;
  width: 100%;
  height: 30rem;
  z-index: 100;

  @media (min-width: 768px) {
    height: 40vw;
  }
`

export default PostHeroImage
