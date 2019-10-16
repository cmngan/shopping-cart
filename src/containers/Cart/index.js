import React from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import Subtotal from './Subtotal'
import { Col, Row, Text, Button } from 'components'

const Cart = ({ cartItemIds })  => {
  return (
    <Col flex={1} BottomM HM MarginTopL>
      <Col flex={1}>
        <Text h1>Shopping Cart</Text>
        {cartItemIds.map((id, index) => <Item index={index} key={id} /> )}
      </Col>
      <Row spaceBetween TopXL>
        <Button button onClick={() => alert('Not ready yet.')}>← Continue Shopping</Button>
        <Subtotal />
      </Row>
    </Col>
  )
}

const mapStateToProps = (state, props) => ({
  cartItemIds: state.cart.items.map(({ id }) => id),
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Cart)