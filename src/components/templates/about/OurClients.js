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
                  <div>
                    <h3>{list.title}</h3>
                  </div>
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
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
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
  }

  .client-list-nav {
    width: calc(50%);
    &__item {
      width: 100%;
      border: solid 1px #000;
      padding: 3.5rem 7rem;
      cursor: pointer;

      h3 {
        ${H3GunMetal};
        margin: 0;
        padding: 0;
      }
    }
  }

  .client-list-names {
    width: calc(50%);
    padding: 5rem 9rem;
    background-color: ${colors.black};

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
