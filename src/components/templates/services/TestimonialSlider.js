import React from "react"
import styled from "styled-components"

import HeroImage from "../common/HeroImage"
import Carousel from "./Carousel"

const TestimonialSlider = ({ data, testimonials }) => {
  const bgImg = data.testimonialSliderImage
  return (
    <>
      <SectionStyled>{bgImg && <HeroImage bgImg={bgImg} />}</SectionStyled>
      <Carousel slides={testimonials} />
    </>
  )
}

const SectionStyled = styled.section`
  position: relative;
  width: 100%;
  height: 40vw;
  z-index: 100;

  @media (min-width: 768px) {
    height: 30vw;
  }
`

export default TestimonialSlider
