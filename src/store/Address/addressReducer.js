const initalState = {
  addressList: {
    //default address for the inital time
    "2cyuouag": {
      name: "Abilash",
      mobile: "9178912120",
      pincode: "636001",
      address: "12th cross , MG Road",
      city: "Kochi",
      state: "Kerala",
      id: "2cyuouag",
      isDefault: true,
    },
  },
};
function generateRandomId() {
  return Math.random().toString(36).substr(2, 8);
}

const addressReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADDRESS": {
      if (action.payload.operation === "add") {
        const newItem = action.payload.data;

        const addressId = generateRandomId();
        return {
          ...state,
          addressList: {
            ...state.addressList,
            [addressId]: { ...newItem, id: addressId, isDefault: false },
          },
        };
      } else if (action.payload.operation === "delete") {
        const newItem = action.payload.data;

        const addressToBeDeleted = newItem;
        const updatedList = { ...state.addressList };
        delete updatedList[addressToBeDeleted.id];
        return { ...state, addressList: updatedList };
      } else if (action.payload.operation === "edit") {
        const addressId = action.payload.editId;
        const newData = action.payload.data;

        return {
          ...state,
          addressList: {
            ...state.addressList,
            [addressId]: { ...state.addressList[addressId], ...newData },
          },
        };
      } else if (action.payload.operation === "delivery") {
        console.log(action.payload.data);
        //set all to false
        const newList = { ...state.addressList };
        // Get an array of values from the address list object
        const addresses = Object.values(newList);
        // Update the "isDefault" property to false for each address
        addresses.forEach((address) => {
          address.isDefault = false;
        });
        console.log(newList);

        //setting the selected one as default
        const setDefaultId = action.payload.data.id;
        newList[setDefaultId].isDefault = true;
        return { ...state, addressList: newList };
      }
      return state;
    }
    default:
      return state;
    //   return {...state, wishlist: { ...state.wishlist, [newItem.id]: { ...newItem } },};
  }
};

export default addressReducer;
