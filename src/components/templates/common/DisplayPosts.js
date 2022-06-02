import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import styled from "styled-components"
import {
  B1GunMetal,
  Btn1One,
  H1Black,
  H4GunMetal,
  standardWrapper,
} from "../../../styles/helpers"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const DisplayPosts = ({ data, bgImg }) => {
  const bgImageDisplay = getImage(
    bgImg.localFile.childImageSharp.gatsbyImageData
  )
  const bgImageAlt = bgImg.altText

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#posts-trigger`,
          markers: false,
          start: "top 40%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `.post-card`,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 2,
          stagger: {
            each: 0.4,
          },
        }
      )
  }, [])

  return (
    <StyledSection>
      <div id="posts-trigger" className="wrapper">
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
              <PostCard className="post-card" key={index}>
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
      <div className="article-hero">
        <GatsbyImage
          image={bgImageDisplay}
          alt={bgImageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="article-overlay" />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  padding-top: 7.5rem;
  padding-bottom: 17.5rem;

  .wrapper {
    ${standardWrapper};
  }

  .article-title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Black};
    }
  }

  .article-wrapper {
    position: relative;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    z-index: 10;
  }

  .article-hero {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50rem;
    z-index: -1;

    @media (min-width: 768px) {
      height: 45rem;
    }

    @media (min-width: 1025px) {
      height: 58rem;
    }

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% + 3.5vw);
      height: 100%;

      img {
        width: 100% !important;
      }
    }
  }

  .article-overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50rem;
    background-color: rgba(0, 0, 0, 0.62);
    z-index: 1;

    @media (min-width: 768px) {
      height: 45rem;
    }

    @media (min-width: 1025px) {
      height: 58rem;
    }
  }
`

const PostCard = styled.div`
  width: 100%;
  margin: 2.5rem auto;
  background-color: #f0f0f0;

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

  a {
    ${Btn1One};
    background-color: #f0f0f0;
  }
`

export default DisplayPosts
