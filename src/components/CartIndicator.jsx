import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  cartLength: state.cart.products.length,
})

const CartIndicator = ({ cartLenght, history, location, match }) => (
  <div className="ml-auto mt-2">
    <Button color="primary" onClick={() => history.push('/cart')}>
      <FaShoppingCart />
      <span className="ml-2">{cartLenght}</span>
    </Button>
  </div>
)

export default connect(mapStateToProps)(withRouter(CartIndicator))
