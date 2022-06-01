import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Intro from "../components/templates/news/Intro"
import Posts from "../components/templates/news/Posts"

const News = props => {
  return (
    <Layout>
      <Seo title="News Page" />
      <Intro data={props.data.intro.template.newsTemplate} />
      {props.data.intro.template.newsTemplate.displayNewsAndUpdatesPosts && (
        <Posts />
      )}
    </Layout>
  )
}

export const newsTempQuery = graphql`
  query newsTempPage($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
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

    intro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_News {
          newsTemplate {
            newsIntroTitle
            newsIntroSubTitle
            newsIntroContent
            displayNewsAndUpdatesPosts
          }
        }
      }
    }
  }
`

export default News
