import React from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle={"Blog Page"}>
            <ul>
                {data.allFile.nodes.map(node => {
                    return <li>{node.name}</li>
                })}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery {
      allFile(filter: {ext: {eq: ".mdx"}}) {
        nodes {
          name
          ext
          dir
        }
      }
    }
`

export default BlogPage;