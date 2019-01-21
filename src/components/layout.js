import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import profilePic from '../images/profile-pic.png'

const Container = styled.div`
  display: flex;
  max-width: 1240px;
  margin: 120px auto;
`

const Sidebar = styled.div`
  width: 180px;
`

const Body = styled.div`
  padding: 0px 1rem;
  font-size: 18px;
`

const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const StyledLink = styled(Link)`
  float: left;
  clear: left;
`

export default ({ children }) => (
  <Container>
    <Sidebar>
      <Img src={profilePic} alt="me" />
      <StyledLink to="/">Writings</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/about">Travel</StyledLink>
      <StyledLink to="/books">Books</StyledLink>
      <StyledLink to="/podcasts">Podcasts</StyledLink>
    </Sidebar>
    <Body>{children}</Body>
  </Container>
)
