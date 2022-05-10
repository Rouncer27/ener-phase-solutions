import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, Nav1White } from "../../../styles/helpers"

import MobileSubMenu from "./MobileSubMenu"

const MobileNavItem = ({ item }) => {
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .filter(item => item !== "https:")
    .filter(item => item !== "http:")
    .filter(item => item !== process.env.GATSBY_WORDPRESS_URL)
    .join("/")

  const [subActive, setSubActive] = useState(false)

  const handleToggleActive = () => {
    setSubActive(!subActive)
  }
  return (
    <MobileNavItemStyled>
      <Link to={`/${slug === "home" ? "" : slug}`}>{item.label}</Link>
      {item.subItems && item.subItems.length > 0 && (
        <div className="subContainer">
          <button
            onClick={() => {
              handleToggleActive()
            }}
          >
            {subActive ? <>&#8722;</> : <>&#43;</>}
          </button>
          <MobileSubMenu subActive={subActive} items={item.subItems} />
        </div>
      )}
    </MobileNavItemStyled>
  )
}

const MobileNavItemStyled = styled.li`
  position: relative;
  width: 100%;
  border-bottom: 0.1rem solid ${colors.white};
  text-align: center;

  .subContainer {
    width: 100%;
    height: 100%;

    button {
      position: absolute;
      top: 50%;
      right: 0;
      width: 4rem;
      height: 4rem;
      font-size: 2.5rem;
      font-weight: bold;
      border-radius: 0 !important;
      transform: translateY(-50%);
      line-height: 1.25;
      z-index: 150;

      &:hover {
        cursor: pointer;
      }
    }
  }

  a {
    ${Nav1White};
    display: block;
    width: 100%;
    padding: 2rem;

    &:hover {
      color: ${colors.colorTertiary};
    }

    &[aria-current="page"] {
      color: ${colors.colorSecondary};
      background-color: ${colors.colorTertiary};

      &:hover {
        cursor: default;
      }
    }
  }
`

export default MobileNavItem
