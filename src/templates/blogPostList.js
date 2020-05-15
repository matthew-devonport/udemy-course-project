import React from 'react'
import Layout from '../components/layout'


export default ({pageContext}) => (
    <Layout>
        {pageContext.posts.map(post => (
            <div>
                <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
                <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
            </div>
        ))}
    </Layout>
)