import React, { PureComponent } from 'react'
import Flex from 'styled-flex-component'
import styled from 'styled-components'
import Navbar from 'components/Navbar'
import ShippingInfo from 'components/ShippingInfo'
import FoodCard from 'components/FoodCard'
import { LunchMenuButton, DinnerMenuButton } from 'components/MenuButton'

const Layout = styled.div`
  width: 100%;
  margin: auto;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`

const Container = styled.div`
  padding: 0.5rem;
  padding-bottom: 3rem;
`

const FoodList = [
  {
    image:
      'https://images.unsplash.com/photo-1570078420152-d016091ec97a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
    normalPrice: 'Rp 45,000',
    discountedPrice: 'Rp 35,000',
    tags: ['Lunch', 'Budget', 'Kitchen'],
    shippingFee: 'Free Delivery',
    foodName: 'Tokyo Lunch',
    isNew: false
  },
  {
    image:
      'https://images.unsplash.com/photo-1560100927-c32f29063ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    normalPrice: 'Rp 35,000',
    discountedPrice: 'Rp 25,000',
    tags: ['Lunch', 'Budget', 'Kitchen'],
    shippingFee: 'Free Delivery',
    foodName: 'Szechuan Lunch',
    isNew: true
  },
  {
    image:
      'https://images.unsplash.com/photo-1564844536311-de546a28c87d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    normalPrice: 'Rp 60,000',
    discountedPrice: 'Rp 50,000',
    tags: ['Lunch', 'Budget', 'Kitchen'],
    shippingFee: 'Free Delivery',
    foodName: 'Healthy Lunch',
    isNew: false
  }
]

class App extends PureComponent {
  state = {
    activeMenu: 'lunch',
    sticky: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleClickMenu = menu => {
    return () => {
      this.setState({
        activeMenu: menu
      })
    }
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const sticky = currentScrollPos >= 100

    this.setState({
      prevScrollpos: currentScrollPos,
      sticky
    })
  }

  render() {
    const { activeMenu, sticky } = this.state
    return (
      <Layout>
        <Navbar />
        <Container>
          <ShippingInfo sticky={sticky} />
          <Flex>
            <LunchMenuButton active={activeMenu === 'lunch'} onClick={this.handleClickMenu('lunch')} />
            <DinnerMenuButton active={activeMenu === 'dinner'} onClick={this.handleClickMenu('dinner')} />
          </Flex>
          {FoodList.map(food => (
            <FoodCard data={food} />
          ))}
        </Container>
      </Layout>
    )
  }
}

export default App
