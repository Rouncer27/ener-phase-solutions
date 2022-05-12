import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import {
  B1GunMetal,
  H1Black,
  H4GunMetal,
  medWrapper,
} from "../../../styles/helpers"

const DisplayPosts = ({ data }) => {
  console.log("DisplayPosts: ", data)
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="article-title">
          <h2>Recent Articles & News</h2>
        </div>
        <div className="article-wrapper">
          {data.map((post, index) => {
            const imageDisplay = getImage(
              post.node.post.featuredImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = post.node.post.featuredImage.altText
            return (
              <PostCard key={index}>
                <div>
                  <GatsbyImage
                    image={imageDisplay}
                    alt={imageAlt}
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <h3>{post.node.title}</h3>
                  </div>
                  <div
                    className="card-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: post.node.post.articleExcerpt,
                    }}
                  />
                  <Link to={`/news-updates/${post.node.slug}`}>Read More</Link>
                </div>
              </PostCard>
            )
          })}
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .article-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Black};
    }
  }

  .article-wrapper {
    display: flex;
    justify-content: center;
  }
`

const PostCard = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
    margin: 1rem;
  }

  .card-content {
    padding: 4rem;
  }

  .card-title {
    width: 100%;

    h3 {
      ${H4GunMetal};
    }
  }

  .card-excerpt {
    width: 100%;

    p {
      ${B1GunMetal};
    }
  }
`

export default DisplayPosts
