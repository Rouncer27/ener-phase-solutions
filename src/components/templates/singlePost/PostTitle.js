import React from "react"
import styled from "styled-components"
import {
  colors,
  H2DarkGreen,
  H4GunMetal,
  medWrapper,
} from "../../../styles/helpers"

const PostTitle = ({ title, excerpt }) => {
  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="post-title">
          <h1>{title}</h1>
        </div>
        <div
          className="post-excerpt"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  .wrapper {
    ${medWrapper};
  }

  .post-title {
    width: 100%;

    h1 {
      ${H2DarkGreen};
    }
  }

  .post-excerpt {
    width: 100%;
    border-bottom: solid 0.2rem ${colors.colorAccent};

    p {
      ${H4GunMetal};
      max-width: 90rem;
      margin-bottom: 1rem;
      padding-bottom: 2rem;
    }
  }
`

export default PostTitle
