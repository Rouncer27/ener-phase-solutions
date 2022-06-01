import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PostHeroImage from "../components/templates/singlePost/PostHeroImage"
import PostTitle from "../components/templates/singlePost/PostTitle"
import PostWysiwyg from "../components/templates/singlePost/PostWysiwyg"
import PostGallery from "../components/templates/singlePost/PostGallery"

const Post = props => {
  return (
    <Layout>
      <Seo title="Post Page" />
      <PostHeroImage data={props.data.post.post.featuredImage} />
      <PostTitle
        title={props.data.post.title}
        excerpt={props.data.post.post.articleExcerpt}
      />
      <PostWysiwyg
        date={props.data.post.date}
        content={props.data.post.post.articleContent}
      />
      {props.data.post.post.articleGallery && (
        <PostGallery data={props.data.post.post.articleGallery} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query singlePostQuery($slug: String!) {
    seoInfo: wpPost(slug: { eq: $slug }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    post: wpPost(slug: { eq: $slug }) {
      post {
        articleExcerpt
        articleContent
        featuredImage {
          altText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1500)
            }
          }
        }
        articleGallery {
          altText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(width: 1500)
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
`

export default Post
