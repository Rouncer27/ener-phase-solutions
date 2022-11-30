import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { colors, Nav1Grey } from "../../../styles/helpers"

import HeaderSubMenu from "./HeaderSubMenu"

const HeaderNavItem = ({ item }) => {
  let slug = item.url
    .split("/")
    .filter(item => item !== "")
    .filter(item => item !== "https:")
    .filter(item => item !== "http:")
    .filter(item => item !== process.env.GATSBY_WORDPRESS_URL)
    .join("/")
  const [subActive, setSubActive] = useState(false)

  if (item.target !== null) {
    slug = item.url
  }

  const handleIsActiveOn = () => {
    setSubActive(true)
  }

  const handleIsActiveOff = () => {
    setSubActive(false)
  }

  return (
    <HeaderNavItemStyled
      className={
        item.cssClasses.length > 0
          ? item.cssClasses.map(name => " " + name)
          : null
      }
    >
      {item.target === null ? (
        <Link
          to={`/${slug}`}
          onMouseEnter={handleIsActiveOn}
          onMouseLeave={handleIsActiveOff}
          onFocus={handleIsActiveOn}
        >
          {item.label}
        </Link>
      ) : (
        <a target="_blank" rel="noreferrer" href={slug}>
          {item.label}
        </a>
      )}

      {item.subItems.length > 0 && (
        <>
          <span className="subIndicator">&#x25BC;</span>
          <HeaderSubMenu
            handleIsActiveOn={handleIsActiveOn}
            handleIsActiveOff={handleIsActiveOff}
            handleIsActiveOffBlur={handleIsActiveOff}
            subActive={subActive}
            items={item.subItems}
          />
        </>
      )}
    </HeaderNavItemStyled>
  )
}

const HeaderNavItemStyled = styled.li`
  padding: 0;
  margin: auto 0.5rem;
  position: relative;
  align-self: center;
  text-align: center;

  a,
  button {
    ${Nav1Grey};
    margin: 0 auto;
    padding: 0.5rem 2rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.35s ease-in-out;

    &:hover {
      background-color: rgba(148, 200, 61, 0.5);
      color: ${colors.colorPrimary};
    }

    &[aria-current="page"] {
      color: ${colors.colorTertiary};
      background-color: rgba(148, 200, 61, 0.5);

      &:hover {
        cursor: default;
      }
    }
  }

  &.highlight a {
    background-color: rgba(148, 200, 61, 0.5);
    border-radius: 0.5rem;
    color: ${colors.white};
  }

  .subIndicator {
    display: inline-block;
    color: ${colors.white};
    font-size: 1rem;
    padding-left: 0.5rem;
  }
`

export default HeaderNavItem
