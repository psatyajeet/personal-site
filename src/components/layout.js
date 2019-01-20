import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0px auto;
  max-width: 1050px;
  padding: 0px 1rem;
  font-size: 18px;
`

export default ({ children }) => <Container>{children}</Container>
