import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StarsParallax from "../components/starsParallax/starsParallax"
import Splash from "../components/splash/splash"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StarsParallax>
      <Splash></Splash>
    </StarsParallax>
  </Layout>
)

export default IndexPage
