import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { B1White, colors, medWrapper } from "../styles/helpers"

import MainLogo from "./Logos/MainLogo"
import Twitter from "./Icons/Twitter"
import Linkedin from "./Icons/Linkedin"

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="foot-upper">
          <div className="foot-nav foot-nav__left">
            <p>
              <Link to="/services">Services</Link>
            </p>
            <p>
              <Link to="/projects">Projects</Link>
            </p>
            <p>
              <Link to="/news-updates">News & Updates</Link>
            </p>
          </div>
          <div className="foot-nav foot-nav__right">
            <p>
              <Link to="/contact-us">Contact Us</Link>
            </p>
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/disclaimer">Disclaimer</Link>
            </p>
          </div>
          <div className="foot-social">
            <div className="foot-social__icons">
              <ul>
                <StyledIcon>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="Follow us on Linkedin - Link will open in new window"
                    href={`https://www.linkedin.com/company/ener-phase-solutions-ltd`}
                  >
                    <i>
                      <Linkedin />
                      <span className="visuallyhidden">Linkedin</span>
                    </i>
                  </a>
                </StyledIcon>
              </ul>
            </div>
            <div className="foot-social__logo">
              <div className="foot-social__logo--wrapper">
                <MainLogo />
              </div>
            </div>
          </div>
        </div>
        <div className="foot-copy">
          <p>
            Ener-Phase Solutions © {new Date().getFullYear()} All Rights
            Reserved. Designed, and developed by{" "}
            <a
              title="Switchback Creative - Link will open in new window"
              target="_blank"
              rel="noreferrer"
              href="https://switchbackcreative.ca"
            >
              Switchback Creative
            </a>
            , Built with
            {` `}
            <a
              title="Gatsby JS - Link will open in new window"
              target="_blank"
              rel="noreferrer"
              href="https://www.gatsbyjs.com"
            >
              Gatsby
            </a>
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 4rem 0;
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${medWrapper};
  }

  .foot-upper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 7.5rem;

    .foot-nav {
      width: 100%;

      @media (min-width: 768px) {
        width: 20%;
      }

      p {
        ${B1White};
        margin: 0;

        a {
          ${B1White};
          text-transform: uppercase;

          &:hover {
            color: ${colors.colorSecondary};
          }
        }
      }
    }

    .foot-social {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 4rem;

      @media (min-width: 768px) {
        width: 50%;
        margin-top: auto;
      }

      &__icons {
        width: 30%;
      }

      &__logo {
        position: relative;
        width: 70%;
        padding: 2rem;
        background-color: ${colors.white};
        border-top-left-radius: 2.4rem;
        border-bottom-left-radius: 2.4rem;
        @media (min-width: 768px) {
          padding: 3rem 3rem 3rem 7.1rem;
        }

        &::before {
          position: absolute;
          top: 0;
          left: 100%;
          bottom: 0;
          width: 500rem;
          background-color: ${colors.white};
          content: "";
          z-index: 1;
        }

        &--wrapper {
          position: relative;
          z-index: 10;
        }
      }
    }
  }

  .foot-copy {
    width: 100%;

    p {
      ${B1White};
    }

    a {
      ${B1White};
    }
  }
`

const StyledIcon = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: ${colors.colorSecondary};

    @media (min-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
    @media (min-width: 1025px) {
      width: 6.5rem;
      height: 6.5rem;
    }

    &:focus {
      outline: 0.4rem solid ${colors.colorPrimary};
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 1.75rem;
      height: 1.75rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.white};

      @media (min-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
      @media (min-width: 1025px) {
        width: 3.25rem;
        height: 3.25rem;
      }
    }

    &:hover {
      background-color: ${colors.white};

      svg {
        fill: ${colors.colorPrimary};
      }
    }
  }
`

export default Footer
