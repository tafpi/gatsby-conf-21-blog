import React from 'react'
import {graphql, Link, useStaticQuery} from "gatsby";
import {headerNav, navBar} from './layout.module.css';

const Layout = ({children, pageTitle}) => {

    const data = useStaticQuery(graphql`
        query myQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return(
    <>
        <div className={headerNav}>
            <h1>{data.site.siteMetadata.title}</h1>
            <ul className={navBar}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
        <main>
            <h3>{pageTitle}</h3>
            {children}
        </main>
    </>
    )
}

export default Layout