import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { colors, H3GunMetal, H4Green } from "../../../styles/helpers"

import quotes from "../../../images/test-quotes.png"

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
      <div className="testimonial-title">
        <h3>
          <span>
            <img src={quotes} alt="Quotes" />
          </span>
          Client
          <br /> Words
        </h3>
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <SlideStyled key={index}>
              <div className="slide-inner">
                <p>
                  <span>&#8220;</span>
                  {slide.node.testimonials.testimonialContent}
                  <span>&#8221;</span>
                </p>
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
  margin-top: 0rem;
  z-index: 99999;

  @media (min-width: 768px) {
    max-width: 50rem;
    margin: -4rem auto 0;
  }

  @media (min-width: 1025px) {
    max-width: 73.5rem;
    margin: -8rem 7.5vw 0 auto;
  }

  .slick-dots {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    position: absolute;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }

    li {
      width: 2rem;
      height: 2rem;
      border: 0.1rem solid ${colors.colorAccent};
      border-radius: 50%;

      button {
        width: 2rem;
        height: 2rem;
        color: ${colors.colorAccent};

        &::before {
          display: none;
        }
      }
    }

    li.slick-active {
      background-color: ${colors.colorAccent};
    }
  }

  .testimonial-title {
    position: absolute;
    top: 50%;
    left: -20rem;
    width: 20%;
    padding-left: 4rem;
    transform: translateY(-50%);
    text-align: right;

    h3 {
      ${H4Green};
      text-transform: uppercase;

      span {
        display: block;
        width: 5rem;
        height: 5rem;
        margin: 0 auto 4rem;
      }
    }
  }
`

const SlideStyled = styled.div`
  padding: 2rem 3rem;
  background-color: ${colors.colorSecondary};

  @media (min-width: 768px) {
    padding: 4rem;
  }

  @media (min-width: 1025px) {
    padding: 6rem;
  }

  p {
    ${H3GunMetal};

    &:last-of-type {
      margin: 0;
    }
  }
`

export default Carousel
