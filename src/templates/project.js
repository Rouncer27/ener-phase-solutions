import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const project = () => {
  return (
    <Layout>
      <Seo title="project" />
      <h1>Single project</h1>
    </Layout>
  )
}

export default project
