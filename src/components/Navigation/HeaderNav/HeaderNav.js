import React from "react"
import styled from "styled-components"

import HeaderMenuMain from "./HeaderMenuMain"

const HeaderNav = () => {
  return (
    <HeaderNavStyled>
      <div className="">
        <div className="">
          <HeaderMenuMain />
        </div>
      </div>
    </HeaderNavStyled>
  )
}

const HeaderNavStyled = styled.div`
  width: 100%;
`

export default HeaderNav
