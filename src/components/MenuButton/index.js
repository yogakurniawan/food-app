import React, { PureComponent } from 'react'
import Flex from 'styled-flex-component'
import LunchIcon from 'icons/Lunch'
import DinnerIcon from 'icons/Dinner'
import Div from 'components/Div'
import { Box, Heading } from './styles'

export class LunchMenuButton extends PureComponent {
  render() {
    const { active, ...rest } = this.props
    console.log(active)
    return (
      <Div width='100%' position="relative" mr="4px">
        <Box {...rest} leftRoundBorder active={active}>
          <Flex center>
            <Div mr="0.5rem">
              <LunchIcon />
            </Div>
            <Heading>Paket Lunch</Heading>
          </Flex>
        </Box>
      </Div>
    )
  }
}

export class DinnerMenuButton extends PureComponent {
  render() {
    const { active, ...rest } = this.props
    return (
      <Div width='100%' position="relative" ml="4px">
        <Box {...rest} rightRoundBorder active={active}>
          <Flex center>
            <Div mr="0.5rem">
              <DinnerIcon />
            </Div>
            <Heading>Paket Dinner</Heading>
          </Flex>
        </Box>
      </Div>
    )
  }
}
