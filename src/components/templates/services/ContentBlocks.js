import React from "react"
import styled from "styled-components"
import ContentBlock from "./ContentBlock"

const ContentBlocks = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        {data.contentBesideImageBlocks.map((block, index) => (
          <ContentBlock key={index} block={block} index={index} />
        ))}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    width: 100%;
    margin: 4rem auto;
  }
`

export default ContentBlocks
