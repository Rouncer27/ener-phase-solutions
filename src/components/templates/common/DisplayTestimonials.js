import React from "react"
import styled from "styled-components"
import {
  standardWrapper,
  H4Green,
  colors,
  H3GunMetal,
} from "../../../styles/helpers"

const DisplayTestimonials = ({ data }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="testimonial-title">
          <h3>
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
  margin-top: -5rem;

  .wrapper {
    ${standardWrapper};
  }

  .testimonial-title {
    width: 20%;

    h3 {
      ${H4Green};
    }
  }

  .testimonial-content {
    width: 80%;
    padding: 4.8rem 6.6rem;
    background-color: ${colors.colorSecondary};

    p {
      ${H3GunMetal};
    }

    &__name {
      p {
        margin: 0;
      }
    }
  }
`

export default DisplayTestimonials
