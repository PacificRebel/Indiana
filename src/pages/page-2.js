import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <br></br>
    <br></br>
    <h2 class="box">Paljon onnea isi 77v!!! <span role="img" aria-label="Smiley"> 😊</span> <span role="img" aria-label="Hearts">❤️</span></h2>


    <Link to="/" class="box">Takaisin kotisivulle</Link>
  </Layout>
)

export default SecondPage
