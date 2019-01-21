import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
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
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <Section>
              {node.frontmatter.title} <Date>— {node.frontmatter.date}</Date>
            </Section>
            <p>{node.excerpt}</p>
          </Link>
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
