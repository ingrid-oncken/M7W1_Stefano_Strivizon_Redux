export const addToCartAction = (bookToAdd) =>
  dispatch({
    type: 'ADD_ITEM_TO_CART',
    payload: bookToAdd,
  })

export const removeFromCartAction = (index) =>
  dispatch({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: index,
  })
