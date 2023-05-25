import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // const store = useSelector((store) =>store)  ===== subscribes to whole store which will cause major performance issues
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4">
      <h1 className="text-3xl">Cart - {cartItems.length}</h1>
      <button
        className="bg-green-200 px-2 py-1 rounded-sm mt-2"
        onClick={() => handleClearCart()}
      >
        Clear
      </button>
      <div className="flex flex-wrap gap-4 pt-8">
        {cartItems.map((item) => {
          return <FoodItem {...item.card.info} key={item.card.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
