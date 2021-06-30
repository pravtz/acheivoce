import React from 'react'
import { Container, MainContent } from './styled'


type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Container>

 
    <MainContent>{children}</MainContent>
  </Container>
)

export default 