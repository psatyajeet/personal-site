import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import favicon from '../images/favicon.ico'
import profilePic from '../images/profile-pic.png'
import ExternalLink from './ExternalLink'

const Container = styled.div`
  margin: 60px auto;
  padding: 0px 32px;

  @media (min-width: 1024px) {
    width: 920px;
    margin: 80px auto;
    padding: 0px;
    display: flex;
  }
`

const Sidebar = styled.div`
  width: 120px;

  @media (min-width: 1024px) {
    margin: 0px 48px 0px 80px;
    position: fixed;
  }
`

const Body = styled.div`
  font-size: 18px;

  @media (min-width: 1024px) {
    width: 800px;
    margin-left: 248px;
    padding: 0px 1rem;
  }
`

const ImgLink = styled(Link)`
  background-image: none;
`

const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const StyledLink = styled(Link)``

const StyledExternalLink = styled(ExternalLink)``

export default ({ children, title, description, keywords }) => {
  return (
    <Container>
      <Helmet
        title={`${title} | Satyajeet Pal`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <Sidebar>
        <ImgLink to="/">
          <Img src={profilePic} alt="me" />
        </ImgLink>
        <div>
          <StyledLink to="/">Writings</StyledLink>
        </div>
        <div>
          <StyledLink to="/about">About</StyledLink>
        </div>
        {/* <StyledLink to="/about">Travel</StyledLink>
      <StyledLink to="/books">Books</StyledLink>
      <StyledLink to="/podcasts">Podcasts</StyledLink> */}
        <div>
          <StyledExternalLink to="https://github.com/psatyajeet">
            Github
          </StyledExternalLink>
        </div>
        <div>
          <StyledExternalLink to="https://twitter.com/satyajeet_pal">
            Twitter
          </StyledExternalLink>
        </div>
        <div>
          <StyledExternalLink to="https://www.linkedin.com/in/satyajeetpal/">
            LinkedIn
          </StyledExternalLink>
        </div>
        <div>
          <StyledExternalLink to="/rss.xml">RSS </StyledExternalLink>
        </div>
      </Sidebar>
      <Body>{children}</Body>
    </Container>
  )
}
