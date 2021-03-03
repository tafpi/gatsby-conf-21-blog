import React from "react"
// import {Link} from "gatsby"
import Layout from "../components/layout"
import {StaticImage} from "gatsby-plugin-image"

// markup
const IndexPage = () => {
    return (
        <Layout>

            <title>Home Page</title>
            <h1>
                Congratulations
                <br/>
                <span>— you just made a Gatsby site! </span>

                <span role="img" aria-label="Party popper emojis">
                  🎉🎉🎉
                </span>
            </h1>
            <p>
                Edit <code>src/pages/index.js</code> to see this page
                update in real-time.{" "}
                <span role="img" aria-label="Sunglasses smiley emoji">
                  😎
                </span>
            </p>

            <StaticImage src="https://placekitten.com/g/600/300" alt="cats rule"></StaticImage>

        </Layout>
    )
}

export default IndexPage
