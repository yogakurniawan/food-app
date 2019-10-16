import React, { PureComponent, Fragment } from 'react'
import Flex from 'styled-flex-component'
import MapPinIcon from 'icons/MapPin'
import ArrowRight from 'icons/ArrowRight'
import Div from 'components/Div'
import { Heading1, Heading2, IconWrapper, Container } from './styles'

export default class Navbar extends PureComponent {
  render() {
    const { sticky } = this.props
    return (
      <Container sticky={sticky}>
        <Heading1 mb="4px">Alamat Pengiriman</Heading1>
        <Flex alignCenter>
          <IconWrapper>
            <MapPinIcon />
          </IconWrapper>
          <Heading2 ml="4px" mb="4px">
            Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, Jakar...
          </Heading2>
          <Div ml="auto">
            <ArrowRight />
          </Div>
        </Flex>
      </Container>
    )
  }
}
