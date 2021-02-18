import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Section = styled.h4`
  margin-bottom: 12px;
`

const Date = styled.div`
  margin-top: 8px;
  color: #bbb;
`

export default ({ data }) => {
  console.log(data.allMarkdownRemark.edges.reverse())
  return (
    <Layout title="Home" description="Home">
      <h3>Writings</h3>
      {data.allMarkdownRemark.edges.reverse().map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <Section>
              <div>{node.frontmatter.title}</div>
              <Date>{node.frontmatter.date}</Date>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
