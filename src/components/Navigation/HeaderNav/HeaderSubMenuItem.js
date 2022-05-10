import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { colors, Nav1White } from "../../../styles/helpers"

const HeaderSubMenuItem = ({ item, handleIsActiveOffBlur, isLast }) => {
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .join("/")

  const handleDropDownBlur = () => {
    if (!isLast) return
    handleIsActiveOffBlur()
  }
  return (
    <HeaderSubMenuItemStyled>
      <Link className="subMenuItem" to={`/${slug}`} onBlur={handleDropDownBlur}>
        {item.label}
      </Link>
    </HeaderSubMenuItemStyled>
  )
}

const HeaderSubMenuItemStyled = styled.li`
  width: 100%;
  margin-bottom: 0.5rem;

  a.subMenuItem {
    ${Nav1White};
    width: 100%;
    text-align: center;

    &[aria-current="page"] {
      color: ${colors.white};
      box-shadow: 0 0.15rem 0 0 ${colors.colorTertiary};

      &:hover {
        color: ${colors.white};
        cursor: default;
      }
    }

    &:hover {
      color: ${colors.colorTertiary};
    }
  }
`

export default HeaderSubMenuItem
