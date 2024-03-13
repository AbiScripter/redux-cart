import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  console.log("WISHLIST RENDER");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.wishlist);
  const valueList = Object.values(list);
  const handleWishlist = (item) => {
    dispatch({ type: "WISHLIST", payload: { data: item } });
  };
  // console.log(list);

  return (
    <div className="wishlist-wrapper">
      <h2>wishlist</h2>
      {valueList.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => handleWishlist(item)}>
              remove from wishlist
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
