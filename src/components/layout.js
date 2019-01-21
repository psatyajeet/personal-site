import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ExternalLink from './ExternalLink'

import profilePic from '../images/profile-pic.png'

const Container = styled.div`
  margin: 60px auto;
  padding: 0px 32px;

  @media (min-width: 768px) {
    margin: 120px auto;
    padding: 0px;
    display: flex;
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
  }

  @media (min-width: 1270px) {
    max-width: 1240px;
  }
`

const Sidebar = styled.div`
  width: 180px;
`

const Body = styled.div`
  font-size: 18px;
  max-width: 500px;

  @media (min-width: 768px) {
    padding: 0px 1rem;
  }

  @media (min-width: 1270px) {
    max-width: 1050px;
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

export default ({ children }) => (
  <Container>
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
    </Sidebar>
    <Body>{children}</Body>
  </Container>
)
