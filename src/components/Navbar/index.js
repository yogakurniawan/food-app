import React, { PureComponent } from 'react'
import Flex from 'styled-flex-component'
import KulinaLogo from 'icons/KulinaLogo'
import Hamburger from 'icons/Hamburger'
import { Nav, Header } from './styles'

export default class Navbar extends PureComponent {
  render() {
    return (
      <Header>
        <Nav>
          <Flex full alignCenter justifyBetween>
            <KulinaLogo />
            <Hamburger />
          </Flex>
        </Nav>
      </Header>
    )
  }
}
