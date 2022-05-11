import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import HeaderNavItem from "./HeaderNavItem"

const getData = graphql`
  {
    headerMenuTop: wpMenu(name: { eq: "Header Menu" }) {
      name
      menuItems {
        nodes {
          cssClasses
          label
          url
          parentDatabaseId
          parentId
          id
          databaseId
          target
        }
      }
    }
  }
`

const HeaderMenu = () => {
  const data = useStaticQuery(getData)
  const { headerMenuTop } = data
  const allNavItems = headerMenuTop?.menuItems?.nodes
    ? headerMenuTop?.menuItems?.nodes
    : []
  const navItems = allNavItems.filter(item => item.parentDatabaseId === 0)
  const subItems = allNavItems.filter(item => item.parentDatabaseId !== 0)
  const navItemsWithSubs = navItems?.map(item => {
    let itemWithSubs = []
    if (subItems.length !== 0) {
      itemWithSubs = subItems.filter(
        subItem => subItem.parentDatabaseId === item.databaseId
      )
    }
    item.subItems = itemWithSubs
    return item
  })

  const headerNavigation = navItems ? (
    navItemsWithSubs.length > 0 ? (
      <HeaderNavStyled role="navigation" aria-label="primary">
        <ul className="mainNavWrapper">
          {navItemsWithSubs.map(item => {
            return <HeaderNavItem key={item?.id} item={item} top={true} />
          })}
        </ul>
      </HeaderNavStyled>
    ) : null
  ) : null
  return headerNavigation
}

const HeaderNavStyled = styled.nav`
  display: none;
  width: 100%;

  @media (min-width: 768px) {
    display: block;
  }

  .mainNavWrapper {
    display: flex;
    align-items: center;
    align-self: center;
    width: 100%;

    @media (min-width: 768px) {
      justify-content: center;
      margin-top: 2rem;
    }

    @media (min-width: 1025px) {
      margin-top: 0;
    }
  }
`

export default HeaderMenu
