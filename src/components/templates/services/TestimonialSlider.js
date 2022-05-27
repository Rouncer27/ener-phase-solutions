import React from "react"
import styled from "styled-components"

import HeroImage from "../common/HeroImage"

const TestimonialSlider = ({ data, testimonials }) => {
  const bgImg = data.testimonialSliderImage
  return (
    <SectionStyled>
      <div>
        <p>Client Words</p>
      </div>
      {bgImg && <HeroImage bgImg={bgImg} />}
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;
  width: 100%;
  padding-top: 20rem;
  z-index: 100;

  @media (min-width: 768px) {
    height: 30vw;
  }
`

export default TestimonialSlider
