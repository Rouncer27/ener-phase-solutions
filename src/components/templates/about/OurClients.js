import React, { useState, useEffect } from "react"
import styled from "styled-components"

import {
  medWrapper,
  H2DarkGreen,
  colors,
  B1GunMetal,
  H3GunMetal,
  B1White,
} from "../../../styles/helpers"

const OurClients = ({ data }) => {
  const [activeList, setActiveList] = useState(1)

  console.log("OurClients: ", data)

  const handleSetListActive = item => {
    setActiveList(item)
  }

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="title">
          <h2>{data.clientsListsTitle}</h2>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.clientsListsContent }}
        />
        <div className="client-lists">
          <div className="client-list-nav">
            {data.clientsLists.map((list, index) => {
              return (
                <div
                  className={`client-list-nav__item ${
                    activeList === index + 1 ? "active-list-title" : ""
                  }`}
                  data-item={index + 1}
                  key={index}
                  onClick={() => handleSetListActive(index + 1)}
                >
                  <h3>
                    {list.title} <span>&#8594;</span>
                  </h3>
                </div>
              )
            })}
          </div>
          <div className="client-list-names">
            {data.clientsLists.map((list, i) => {
              return (
                <div
                  className={`${
                    activeList === i + 1 ? "active-list-item" : ""
                  } client-list-names__group`}
                  data-item={i + 1}
                  key={i}
                >
                  {list.clients.map((client, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <p>{client.name}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-graphic" />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
    position: relative;
    overflow: hidden;
  }

  .bg-graphic {
    display: none;
    position: absolute;
    top: 0;
    left: 0rem;
    width: 5rem;
    height: 40rem;
    background-color: rgba(54, 170, 99, 0.64);

    @media (min-width: 768px) {
      display: block;
      top: 0;
      left: -2rem;
      width: 8rem;
      height: 65rem;
    }
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2DarkGreen};
    }
  }

  .content {
    width: 100%;
    text-align: center;

    p {
      ${B1GunMetal};
    }
  }

  .client-lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      padding: 0 2rem;
    }

    @media (min-width: 1025px) {
      padding: 0 6rem;
    }
  }

  .client-list-nav {
    position: relative;
    width: calc(100%);
    margin-bottom: 4rem;

    @media (min-width: 768px) {
      width: calc(50%);
      margin-bottom: 0;
    }

    &__item {
      width: 100%;
      border: solid 1px #000;
      padding: 3.5rem 7rem;
      cursor: pointer;

      h3 {
        ${H3GunMetal};
        margin: 0;
        padding: 0;
        text-transform: uppercase;

        span {
          color: ${colors.colorAccent};
        }
      }
    }

    .client-list-nav__item.active-list-title {
      background-color: ${colors.black};

      h3 {
        color: ${colors.white};
      }
    }
  }

  .client-list-names {
    width: calc(100%);
    padding: 5rem 9rem;
    background-color: ${colors.black};

    @media (min-width: 768px) {
      width: calc(50%);
    }

    &__group {
      display: none;

      p {
        ${B1White};
      }
    }

    .active-list-item.client-list-names__group {
      display: block;
    }
  }
`

export default OurClients
