import React from "react"
import styled from "styled-components"
import {
  H2DarkGreen,
  H4GunMetal,
  standardWrapper,
} from "../../../styles/helpers"

const ServicesList = ({ data }) => {
  console.log("ServicesList: ", data)
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="services-title">
          <h2>{data.servicesListTitle}</h2>
        </div>
        <ul className="services-list">
          {data.servicesListItems.map((item, index) => (
            <li key={index}>{item.item}</li>
          ))}
        </ul>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }

  @media (min-width: 1025px) {
    padding: 0 0 8rem;
  }

  .wrapper {
    ${standardWrapper};
    max-width: 55rem !important;
  }

  .services-title {
    width: 100%;

    h2 {
      ${H2DarkGreen};
    }
  }

  .services-list {
    width: 100%;

    li {
      ${H4GunMetal};
      margin-bottom: 0.75rem;
    }
  }
`

export default ServicesList
