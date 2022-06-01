import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { colors, H3GunMetal } from "../../../styles/helpers"

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "0",
  arrows: true,
  dots: true,
}

const Carousel = ({ slides }) => {
  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <SlideStyled key={index}>
              <div className="slide-inner">
                <p>{slide.node.testimonials.testimonialContent}</p>
                <p>{slide.node.title}</p>
              </div>
            </SlideStyled>
          )
        })}
      </Slider>
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.div`
  position: relative;
  margin-top: -5rem;
  z-index: 99999;

  @media (min-width: 768px) {
    max-width: 50rem;
    margin: -4rem auto 0;
  }

  @media (min-width: 1025px) {
    max-width: 73.5rem;
    margin: -4rem 7.5vw 0 auto;
  }
`

const SlideStyled = styled.div`
  background-color: ${colors.colorSecondary};

  @media (min-width: 768px) {
    padding: 4rem;
  }

  @media (min-width: 1025px) {
    padding: 6rem;
  }

  p {
    ${H3GunMetal};
  }
`

export default Carousel
