import React from "react"
import styled from "styled-components"
import {
  standardWrapper,
  H4Green,
  colors,
  H3White,
} from "../../../styles/helpers"

const DisplayTestimonials = ({ data }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="testimonial-title">
          <h3>
            <span>&#8220;</span>
            Client
            <br /> Words
          </h3>
        </div>
        <div className="testimonial-content">
          <div>
            <p>
              <span>&#8220;</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: data[0].node.testimonials.testimonialContent,
                }}
              />
              <span>&#8221;</span>
            </p>
            <div />

            <div className="testimonial-content__name">
              <p>&#8211; {data[0].node.title}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin-top: 2.5rem;
  @media (min-width: 768px) {
    margin-top: -5rem;
  }

  .wrapper {
    ${standardWrapper};
    align-items: center;
  }

  .testimonial-title {
    width: 20%;
    padding-right: 4rem;
    text-align: right;

    h3 {
      ${H4Green};
      padding-top: 5rem;
      text-transform: uppercase;

      span {
        display: block;
        font-size: 20rem;
        font-weight: normal;
        line-height: 0;
        color: ${colors.colorSecondary};
      }
    }
  }

  .testimonial-content {
    width: 100%;
    padding: 1.5rem;
    background-color: ${colors.colorPrimary};

    @media (min-width: 768px) {
      width: 80%;
      max-width: 70rem;
      padding: 4.8rem 6.6rem;
    }

    p {
      ${H3White};
    }

    &__name {
      p {
        margin: 0;
      }
    }
  }
`

export default DisplayTestimonials
