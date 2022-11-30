import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { colors, medWrapper } from "../styles/helpers"
import MainLogo from "./Logos/MainLogo"
import HeaderNav from "./Navigation/HeaderNav/HeaderNav"
import MobileNav from "./Navigation/MobileNav/MobileNav"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="header__wrapper">
      <div className="headerLogo">
        <h1>
          <Link to="/">
            <MainLogo />
            <span>{siteTitle}</span>
          </Link>
        </h1>
      </div>
      <div className="headerNav">
        <HeaderNav />
      </div>
    </div>
    <MobileNav />
  </StyledHeader>
)

const StyledHeader = styled.header`
  position: relative;
  padding-top: 5rem;
  background: linear-gradient(
    -177.5deg,
    #193768 35%,
    rgba(255, 255, 255, 1) 35%
  );
  z-index: 999999;

  .header__wrapper {
    ${medWrapper};
    align-items: center;

    @media (min-width: 1025px) {
      padding-top: 5rem;
    }
  }

  .headerLogo {
    width: 100%;
    max-width: 37.5rem;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 30%;
    }

    @media (min-width: 1100px) {
      width: 30.5%;
    }

    @media (min-width: 1200px) {
      width: 35%;
    }

    a {
      width: 100%;
      display: block;
      margin: auto;

      &:focus {
        outline: 0.4rem solid ${colors.colorPrimary};
        transition: outline-width 0.35s ease-in-out;
      }
    }

    h1 {
      width: 100%;
      margin: 0;
      padding: 0;

      span {
        position: absolute;
        left: -999%;
      }

      @media (min-width: 768px) {
        width: calc(100%);
        max-width: 45rem;
        margin: 2rem auto;
      }

      @media (min-width: 1025px) {
        width: calc(100%);
        max-width: 100%;
        margin: auto;
      }
    }
  }

  .headerNav {
    width: 100%;

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 1025px) {
      width: 70%;
    }

    @media (min-width: 1100px) {
      width: 69.5%;
    }

    @media (min-width: 1200px) {
      width: 65%;
    }
  }
`

export default Header
