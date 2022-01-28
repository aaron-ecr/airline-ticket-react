

export const getFlights = () => ({
  type: 'GET_FLIGHTS',
});

export const findFlights = (payload) => ({
  type: 'GET_ROUTES',
  payload
});

// Cart

export function addToCart(item) {
  return {
      type: 'ADD',
      item: item
  };
}

export function removeFromCart(item) {
  return {
      type: 'REMOVE',
      item: item
  };
}

export function removeAllCart(cart) {
  return {
      type: 'REMOVE_ALL',
      cart
  };
}