import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  Btn1Two,
  colors,
  H3GunMetal,
  standardWrapper,
} from "../../../styles/helpers"

const getData = graphql`
  {
    posts: allWpPost {
      edges {
        node {
          post {
            articleExcerpt
            featuredImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
          date
          title
          slug
          id
        }
      }
    }
  }
`

const Posts = () => {
  const postsData = useStaticQuery(getData)
  const posts = postsData.posts.edges
  return (
    <StyledSection>
      <div className="wrapper">
        {posts.length > 0 &&
          posts.map(post => {
            const options = { year: "numeric", month: "long", day: "numeric" }
            const postDate = new Date(post.node.date).toLocaleDateString(
              undefined,
              options
            )
            const imageDisplay = getImage(
              post.node.post.featuredImage.localFile.childImageSharp
                .gatsbyImageData
            )
            const imageAlt = post.node.post.featuredImage.altText
            return (
              <PostCard key={post.node.id}>
                <Link to={`/news-updates/${post.node.slug}`}>
                  <div className="post-image">
                    <div className="post-image__wrap">
                      <GatsbyImage
                        image={imageDisplay}
                        alt={imageAlt}
                        layout="fullWidth"
                        formats={["auto", "webp", "avif"]}
                      />
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-content__title">
                      <h2>{post.node.title}</h2>
                    </div>
                    <div
                      className="post-content__excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.node.post.articleExcerpt,
                      }}
                    />
                  </div>
                  <div className="post-content__bottom">
                    <div className="post-content__date">
                      <p>{postDate}</p>
                    </div>
                    <div className="post-content__button">
                      <button type="button">Read More</button>
                    </div>
                  </div>
                </Link>
              </PostCard>
            )
          })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
    justify-content: flex-start;
  }
`

const PostCard = styled.article`
  position: relative;
  width: 100%;
  margin-bottom: 2.5rem;
  background-color: rgba(148, 200, 61, 0.7);
  box-shadow: 0.25rem 0.25rem 0.3rem 0.25rem rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
    margin: 2rem 1rem;
    background-color: #d5d5d5;
  }

  a {
    position: relative;

    &::after {
      position: absolute;
      top: -6.5rem;
      left: -1.5rem;
      width: 0;
      height: 0;
      transform: rotate(45deg);
      transform-origin: center center;
      transition: all 0.3s ease-out;
      border-top: 10rem solid transparent;
      border-bottom: 10rem solid transparent;
      border-right: 10rem solid rgba(148, 200, 61, 1);
      opacity: 0;
      z-index: 100;
      content: "";
    }
  }

  .post-image {
    position: relative;
    width: 100%;
    height: 25vw;
    z-index: 100;

    @media (min-width: 768px) {
      height: 15vw;
      max-height: 25rem;
    }

    &__wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100%);
        height: 100%;

        img {
          width: 100% !important;
        }
      }
    }
  }

  .post-content {
    position: relative;
    width: 100%;
    padding: 2rem;
    transition: all 0.3s ease-out;
    border-top: 0.5rem solid transparent;

    @media (min-width: 768px) {
      padding: 6rem;
      padding-bottom: 20rem;
    }

    &__bottom {
      width: 100%;
      padding: 2rem;

      @media (min-width: 768px) {
        position: absolute;
        right: 6rem;
        bottom: 6rem;
        left: 6rem;
        padding: 0;
      }
    }

    &__title {
      margin-bottom: 2.2rem;

      h2 {
        ${H3GunMetal};
        margin: 0;
      }
    }

    &__excerpt {
      p {
        ${B1Black};
      }
    }

    &__date {
      p {
        ${B1Black};
      }
    }

    &__button {
      button {
        ${Btn1Two};
        background-color: transparent;
      }
    }
  }

  a {
    &:hover {
      .post-content {
        border-top: 0.5rem solid ${colors.colorSecondary};
      }

      &::after {
        opacity: 0.75;
      }
    }
  }
`

export default Posts
