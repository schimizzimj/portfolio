import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StarsParallax from "../components/starsParallax/starsParallax"
import Splash from "../components/splash/splash"
import Projects from "../components/Projects/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StarsParallax>
      <Splash></Splash>
    </StarsParallax>
    <Projects></Projects>
  </Layout>
)

export default IndexPage
