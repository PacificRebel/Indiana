import * as React from "react";
import pageStyles from "../styles/global.scss";
import headingStyles from "../styles/global.scss";
import headingAccentStyles from "../styles/global.scss";

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Klikkaa tätä!
        <br />
        <span style={headingAccentStyles}> </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
    </main>
  )
}

export default IndexPage
