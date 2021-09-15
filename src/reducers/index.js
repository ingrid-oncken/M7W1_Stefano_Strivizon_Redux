import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM_TO_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          // products: state.cart.filter((book, i) => i !== action.payload),
          products: [
            state.cart.products.slice(0, action.payload),
            state.cart.products.slice(
              action.payload + 1,
              action.payload.length
            ),
          ],
        },
      }

    default:
      return state
  }
}
export default mainReducer
