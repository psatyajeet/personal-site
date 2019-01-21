import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Section = styled.h4`
  margin-bottom: 12px;
`

const Date = styled.span`
  color: #bbb;
`

export default ({ data }) => {
  return (
    <Layout>
      <h3>Writings</h3>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Section>
            {node.frontmatter.title} <Date>— {node.frontmatter.date}</Date>
          </Section>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
