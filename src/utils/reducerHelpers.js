export function cartHandleHelper(state, action) {
  console.log(state);
  const newItem = action.payload.data;
  const updatedCart = { ...state.cart };
  console.log("updatedCart", updatedCart);
  // If item already exists in the cart
  if (updatedCart[newItem.id]) {
    if (action.payload.operation === "add") {
      updatedCart[newItem.id].quantity += 1;
    } else if (action.payload.operation === "subtract") {
      updatedCart[newItem.id].quantity -= 1;
    } else {
      updatedCart[newItem.id].quantity = 0;
    }
  } else {
    // Add new item to cart with quantity 1
    updatedCart[newItem.id] = { ...newItem, quantity: 1 };
  }
  return { ...state, cart: updatedCart };
}

// export function wishlistHandleHelper(state, action) {
//   const newItem = action.payload.data;
//   const updatedList = { ...state.wishlist };
//   //if already wishlisted
//   if (updatedList[newItem.id]) {
//     //delete from that list
//     delete updatedList[newItem.id];
//     return { ...state, wishlist: updatedList };
//   }

//   updatedList[newItem.id] = { ...newItem };
//   return { ...state, wishlist: updatedList };
// }

export function wishlistHandleHelper(state, action) {
  const newItem = action.payload.data;
  const isWishlisted = state.wishlist[newItem.id]; // Check if item is already wishlisted

  if (isWishlisted) {
    // If already wishlisted, remove it
    const updatedList = { ...state.wishlist };
    delete updatedList[newItem.id];
    return { ...state, wishlist: updatedList };
  } else {
    // If not wishlisted, add it
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        [newItem.id]: { ...newItem },
      },
    };
  }
}
