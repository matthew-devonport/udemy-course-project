import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

const PortfolioItems = () => {
    return (
        <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio {
              edges{
                node{
                  title
                  excerpt
                  content
                  featured_media{
                    source_url
                  }
                }
              }
            }
          }

    `} />
    )
}

export default PortfolioItems