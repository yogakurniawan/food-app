import React, { PureComponent, Fragment } from 'react'
import Flex from 'styled-flex-component'
import Div from 'components/Div'
import { Heading1, Heading2, Heading3, Img, Label } from './styles'

export default class FoodCard extends PureComponent {
  render() {
    const {
      data: { image, normalPrice, discountedPrice, tags, shippingFee, foodName, isNew }
    } = this.props
    return (
      <Div mt="2rem" position="relative">
        <Div mb="1rem">
          {isNew && <Label>BARU</Label>}
          <Img src={image} />
        </Div>
        <Flex alignCenter justifyBetween>
          <div>
            <Heading1 color="#1e1e1e">{foodName}</Heading1>
            <Heading2 color="#bbbec0">{tags.join(' • ')}</Heading2>
            <Heading2 color="#8fc0f7">{shippingFee}</Heading2>
          </div>
          <div>
            <Heading3 color="#bbbec0">{normalPrice}</Heading3>
            <Heading1 color="#ff9559">{discountedPrice}</Heading1>
          </div>
        </Flex>
      </Div>
    )
  }
}
