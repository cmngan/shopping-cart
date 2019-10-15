import React from 'react'
import { Col, Text } from 'components'

import { connect } from 'react-redux'

const Cart = ({ cartItems })  => {
  return (
    <Col flex={1} VM HM>
      <Text title>Shopping Cart</Text>

      {cartItems.map(({ name }) => <Text>{name}</Text> )}

    </Col>
  )
}

const mapStateToProps = (state, props) => ({
  cartItems: state.cart.items,
})
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Cart)