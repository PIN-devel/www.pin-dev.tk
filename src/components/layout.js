/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./Footer"
import '../styles/index.scss'
import { Row, Col } from 'reactstrap'
import Sidebar from "./Sidebar"

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <script src="https://kit.fontawesome.com/f6140f184d.js" crossOrigin="anonymous"></script>
      </Helmet>
      
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="cotent">
        <h1>{pageTitle}</h1>
        <Row>
          <Col md="8">{children}</Col> 
          <Col md="4"><Sidebar/></Col>
        </Row>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
